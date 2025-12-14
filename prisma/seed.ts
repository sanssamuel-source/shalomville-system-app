
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  // 1. Create Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@shalomville.com' },
    update: {},
    create: {
      email: 'admin@shalomville.com',
      name: 'School Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  // 2. Create Official Parent (Mrs. Sarah Williams)
  const parentUser = await prisma.user.upsert({
    where: { email: 'sarah.w@gmail.com' },
    update: {},
    create: {
      email: 'sarah.w@gmail.com',
      name: 'Mrs. Sarah Williams',
      password: hashedPassword,
      role: 'PARENT',
      parentProfile: {
        create: {
           phone: '+232 76 123 456',
           address: 'Freetown, Sierra Leone'
        }
      }
    },
    include: { parentProfile: true }
  });

  // 3. Create Student
  const student = await prisma.student.create({
    data: {
      firstName: 'Daniel',
      lastName: 'Williams',
      parentId: parentUser.parentProfile.id,
      fees: {
        create: [
            { amount: 5000, status: 'paid', dueDate: new Date('2025-09-15'), description: '1st Term School Fees' },
            { amount: 1500, status: 'unpaid', dueDate: new Date('2025-10-01'), description: 'Uniform & Sport Wears' },
            { amount: 800, status: 'unpaid', dueDate: new Date('2025-10-15'), description: 'ICT & Science Lab' },
            { amount: 2000, status: 'unpaid', dueDate: new Date('2025-10-15'), description: 'Text Books' }
        ]
      }
    }
  });

  // 4. Create Announcements (Scraped & Mock)
  await prisma.announcement.createMany({
    data: [
      {
        title: "Moral Values",
        category: "Education",
        content: "At Shalomville, we prioritize moral values alongside academic excellence. We believe in raising a total child who shines in character and learning.",
        createdById: admin.id
      },
      {
        title: "Education Excellence",
        category: "Academic",
        content: "Our promise to parents is to make their children excellent pupils that will be innovative, creative, and award-winning children.",
        createdById: admin.id
      },
      {
        title: "Science & Innovation Fair",
        category: "Events",
        content: "Join us on Feb 15, 2025 for our annual Science Fair where students showcase their innovative projects.",
        createdById: admin.id
      }
    ]
  });

  console.log({ admin, parentUser, student });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

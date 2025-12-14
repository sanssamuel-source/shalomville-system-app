
import Link from 'next/link';
import { ArrowRight, BookOpen, Heart, Shield, Award, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/happy-black-students-walking-school-corridor-talking_1262-12349.jpg')] bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
            <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase mb-6 inline-block animate-in fade-in slide-in-from-bottom-4 duration-700">
                Welcome to Shalomville
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                Building Excellence in <span className="text-primary-400">Character</span> & <span className="text-primary-400">Learning</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Our vision is to raise a total child who shines in character and learning. We transmit knowledge using modern education technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                <Link href="/admissions" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary-900/20">
                    Enroll Your Child
                </Link>
                <Link href="/about" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
                    Learn More <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Shalomville?</h2>
                <div className="w-20 h-1 bg-primary-600 mx-auto rounded mb-4"></div>
                <p className="text-gray-600 text-lg">
                    We are positioned to help our children develop impeccable characters that will make them exemplary persons everywhere they go.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Education</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We transmit knowledge using modern education technology equipment and competent teaching staff.
                    </p>
                </div>

                <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                    <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Heart className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Moral Values</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Honesty, integrity, justice, love, and service. We focus on modeling godly characters.
                    </p>
                </div>

                <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Shield className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Environment</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Our school compound is secure with ample play areas, making learning both easy and fun.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Top Facilities</h2>
                <div className="w-20 h-1 bg-primary-600 mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors">
                    <div className="mb-4 text-primary-400">
                        <Award className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Sports Complex</h4>
                    <p className="text-gray-400 text-sm">Basketball court, playground, running track, and tennis courts.</p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors">
                    <div className="mb-4 text-primary-400">
                        <Users className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Interactive Classes</h4>
                    <p className="text-gray-400 text-sm">Hands-on activities and collaborative projects for engaging learning.</p>
                </div>

                 <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors">
                    <div className="mb-4 text-primary-400">
                        <Heart className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Sick Bay</h4>
                    <p className="text-gray-400 text-sm">Essential first aid treatment staffed by caring professionals.</p>
                </div>

                 <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors">
                    <div className="mb-4 text-primary-400">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">ICT & Science Lab</h4>
                    <p className="text-gray-400 text-sm">Modern computers and science equipment for practical learning.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary-600 text-white text-center">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Family?</h2>
             <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                 Admission is open for the 2025 academic session. Secure your child's future today.
             </p>
             <Link href="/admissions" className="bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors inline-block shadow-2xl">
                 Apply for Admission
             </Link>
        </div>
      </section>
    </>
  );
}

# ShalomVille System Deployment Guide

This guide covers deploying the full-stack Next.js application to **Vercel** (Frontend/API) and **Railway** (Database).

## Option A: Automatic Deployment (Recommended)

### 1. Database Setup (Railway)

1.  Create an account at [Railway.app](https://railway.app).
2.  Click **"New Project"** -> **"Provision PostgreSQL"**.
3.  Click on the **PostgreSQL** card -> **Variables**.
4.  Copy the `DATABASE_URL`.

### 2. Connect App to Railway

1.  Open `schema.prisma`.
2.  Ensure provider is set to postgresql: `provider = "postgresql"`.
3.  Run `npx prisma migrate deploy` locally (if you have the Railway URL in your .env) OR let Railway handle it.

### 3. Vercel Deployment

1.  Push code to GitHub.
2.  Import into Vercel.
3.  Add Environment Variables: `DATABASE_URL` and `JWT_SECRET`.
4.  Deploy.

---

## Option B: Manual Upload to GitHub (Your Request)

If you cannot run git commands securely from this terminal, follow these steps to upload manually:

1.  **Open the Project Folder**: I have opened the folder `shalomville-system` for you.
2.  **Create a Repository**: Go to [GitHub.com](https://github.com) and create a new empty repository (e.g., `shalomville-system`).
3.  **Upload Files**:
    - Click **"Upload an existing file"**.
    - Drag and drop **ALL** files and folders from `shalomville-system` **EXCEPT**:
      - `node_modules` (This is huge and should NOT be uploaded)
      - `.next` (Build folder, do not upload)
      - `.git` (Hidden folder, do not upload)
    - **Important**: You might need to drag folders like `src`, `public`, `prisma` individually if drag-and-drop is limited.
4.  **Commit**: Click "Commit changes".
5.  **Connect to Vercel**: Now go to Vercel and import this new repository.

---

## Post-Deployment Checks (Audit List)

We performed a final audit of the system:

- [x] **Public Site**: Home, About, Admissions, Contact pages are active.
- [x] **Portal Login**: accessible from top-right of public site.
- [x] **Admin/Parent Dashboards**: Securely behind login.
- [x] **Database**: Prisma connected and seeded.

### Known "Missing" Links (Placeholders)

These links in the footer/nav are currently placeholders (`#`) until you have specific content for them:

- Social Media (Facebook, Twitter, Instagram)
- "Our Team" specific section anchor
- "Events Calendar" specific page (currently links to news)

## Admin Access Credentials

- **Login**: [your-vercel-url]/login
- **Email**: `admin@shalomville.com`
- **Password**: `admin123`


# 🧱 Companion (Compi) – High-Level Architecture (MVP)

Companion is a social platform tailored to developers, combining verified portfolios with a recruitment dashboard, social features, and credibility tracking.

---

## 🌐 Frontend Stack

| Tech               | Usage                                              |
|--------------------|----------------------------------------------------|
| React.js           | SPA for user-facing components and recruiter views |
| TailwindCSS        | Styling with dark/glass theme                      |
| React Router       | Routing across pages                               |
| Context API / Redux| Global state management                            |
| Axios / Fetch      | API communication                                  |
| Framer Motion      | UI animations (optional)                           |

---

## 🧠 Backend Stack

| Tech               | Usage                                                     |
|--------------------|-----------------------------------------------------------|
| Django             | Core backend framework                                    |
| DRF                | RESTful APIs for React frontend                           |
| PostgreSQL         | Relational DB for structured data                         |
| Celery + Redis     | Task queues: verification, scoring, email                 |
| JWT + SimpleJWT    | Secure token-based auth                                   |
| Supabase/S3/Cloudinary | Media and image uploads                            |

---

## 📊 MVP Database Models

### 👤 Users

- `id`, `email`, `username`
- `is_verified`, `total_points`
- `profile_pic`, `bio`, `last_active_at`

### 📁 Projects

- `title`, `desc`, `tags`
- `github_link`, `live_link`
- `score`, `verification_status`
- `community_endorsements`, `submitted_via`

### 🧠 Skills

- `skill_name`, `level`
- `endorsed_by`, `verified`

### 📚 Education & Experience

- `user_id`, `institution/company`
- `start_date`, `end_date`
- `evidence_link`, `verified_by`

### 🏷️ Reports

- `item_type`, `reported_by`, `reason`
- `status` ("pending", "reviewed", etc.)

### 📬 Notifications

- `type`, `seen`

---

## 🔐 Authentication

- JWT-based login
- Google, GitHub, Microsoft OAuth options

---

## 🧠 Verification Engine

| Layer              | Description                                                   |
|--------------------|---------------------------------------------------------------|
| Required Signals   | GitHub repo, screenshots, self-declared origin                |
| Auto-checks        | Commit analysis, AI fingerprinting, plagiarism detection      |
| Manual Review      | Optional (based on flags or reports)                          |
| Community Endorse  | Boosts credibility via endorsements                           |
| Score System       | Up to 100 points per project                                  |

---

## 📊 Points Engine

| Action                    | Points         |
|---------------------------|----------------|
| Project Verified          | Up to 100      |
| Skill Verified            | Up to 25       |
| Education/Exp Verified    | 30–60          |
| Endorsements              | +2 each        |
| Featured Project/Article  | +10            |
| Inactivity > 1 year       | -50, warning   |

> 1000 = Assured Badge | 750 = Verified Badge | <300 = Limited Visibility

---

## 💼 Recruiter Dashboard

- Search + Filter by skills, trust level
- Save profiles to "Wishlist"
- View history of visited profiles
- Trust Badges shown ("Verified", "Assured")

---

## 🔍 Discover & Feed

- Users post text, images, projects
- Threads, Devlogs, Articles
- Like, comment, share system
- Trending Projects/Articles/Users (Daily, Weekly, Monthly)
- “Article of the Day” & “Project of the Week” badges

---

## 🌐 Portfolio Website

- Auto-generated from user profile
- Free `username.compi.dev` subdomain
- Choose from 5–10 themes
- Unlock more via points
- Upload own HTML/CSS supported

---

## 🧪 Infrastructure / DevOps

| Component           | Purpose                       |
|---------------------|-------------------------------|
| Vercel / Netlify    | Frontend hosting              |
| Render / Railway    | Django API + PostgreSQL       |
| Cloudinary/Supabase | Media storage                 |
| Redis + Celery      | Task queue                    |
| GitHub Actions      | CI/CD                         |

---

## 🔐 Roles & Access

| Role        | Abilities                                                  |
|-------------|------------------------------------------------------------|
| User        | Add/edit content, post, follow, report                     |
| Recruiter   | Search, shortlist, view badges                             |
| Admin       | Review content, resolve reports                            |
| Community   | Endorsements, comments, suggest improvements               |

---

## 🔗 Key Routes

| Route                | Page                          |
|----------------------|-------------------------------|
| `/`                  | Landing Page                  |
| `/feed`              | Discover / Timeline           |
| `/profile/:username` | Dev Profile                   |
| `/portfolio/:user`   | Public Portfolio              |
| `/recruiter`         | Recruiter Dashboard           |

---

## 📈 Stretch Goals (Post-MVP)

- Resume PDF Export
- Code Quizzes for Skill Verifications
- GitHub Webhook Integration
- Browser Plugin Proof Capture

---

**Made with ❤️ by Team Compi**

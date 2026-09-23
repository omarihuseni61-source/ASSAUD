# Software Requirements Specification (SRS)
## ASAUD Website - Modern Educational Platform

**Project Name:** ASAUD Website Redesign  
**Organization:** Actuarial Science Association University of Dar es Salaam (ASAUD)  
**Version:** 1.0  
**Date:** September 2026  
**Status:** In Development

---

## 1. EXECUTIVE SUMMARY

The ASAUD Website is a modern, dynamic platform designed to serve as a comprehensive educational hub for actuarial science students at the University of Dar es Salaam. The website will provide centralized access to academic resources, career guidance, community information, and event management. Built with Next.js and utilizing a static data folder architecture, the platform will deliver seamless navigation, quick downloads, and dynamic content rendering without requiring backend infrastructure.

---

## 2. PROJECT OVERVIEW

### 2.1 Purpose
To create a modern, user-friendly digital platform that consolidates all ASAUD activities, resources, and information, enabling students to access academic materials, career pathways, events, and community information in one centralized location.

### 2.2 Scope
- **In Scope:** 6 main sections with multiple subsections, dynamic data rendering, file downloads, responsive design, search functionality, event management
- **Out of Scope:** User authentication, database backend, real-time messaging, payment processing, complex analytics

### 2.3 Target Users
- ASAUD Students (Primary)
- Prospective Actuarial Science Students
- ASAUD Leadership and Committee Members
- University Faculty and Partners
- External Visitors Interested in Actuarial Science

### 2.4 Technology Stack
- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS / CSS Modules
- **Data Management:** JSON/YAML files in data folder
- **Deployment:** Vercel / Static Hosting
- **Version Control:** Git/GitHub

---

## 3. SYSTEM ARCHITECTURE

### 3.1 Data-Driven Architecture
The website uses a **static data folder approach** where all content is stored as structured JSON/YAML files. Components dynamically render data using the `map()` function, eliminating the need for backend infrastructure.

### 3.2 Core Principles
- **Scalability:** Add new content by simply adding data files
- **Maintainability:** Centralized data management
- **Performance:** Static generation ensures fast load times
- **Flexibility:** Easy modifications without touching components

---

## 4. FUNCTIONAL REQUIREMENTS

### 4.1 Home Section
**Purpose:** Main entry point with overview and quick navigation

**Features:**
- Hero section with ASAUD introduction
- Brief overview of activities and purpose
- Featured activities carousel
- Quick access cards to major sections
- Important updates/announcements
- Social media links
- Call-to-action buttons

**Data Structure:**
```json
{
  "hero": { "title", "subtitle", "backgroundImage" },
  "introduction": { "description", "highlights" },
  "featuredActivities": [{ "title", "description", "image", "link" }],
  "updates": [{ "date", "title", "content", "type" }],
  "socialLinks": [{ "platform", "url", "icon" }]
}
```

---

### 4.2 About Section
**Purpose:** Institutional information and organizational details

**Subsections:**

#### 4.2.1 About ASAUD
- Organization identity and mission
- Relationship with UDSM
- Vision, mission, objectives
- Core values
- Membership scope
- Roles and responsibilities

**Data Structure:**
```json
{
  "identity": { "name", "acronym", "tagline" },
  "relationship": { "university", "establishment_date" },
  "vision": "string",
  "mission": "string",
  "objectives": ["string"],
  "coreValues": [{ "value", "description", "icon" }],
  "membershipScope": "string",
  "roles": [{ "role", "description" }]
}
```

#### 4.2.2 History of ASAUD
- Establishment details
- Formation background
- Major milestones
- Evolution over time
- Key achievements

**Data Structure:**
```json
{
  "founded": "date",
  "background": "string",
  "timeline": [
    { "year", "event", "description", "image" }
  ],
  "milestones": [{ "year", "milestone", "significance" }],
  "achievements": [{ "title", "description", "year" }]
}
```

#### 4.2.3 Constitution
- Official governance rules
- Membership terms
- Leadership structure
- Elections procedures
- Financial management
- PDF document link for download

**Data Structure:**
```json
{
  "lastUpdated": "date",
  "chapters": [
    { "chapter", "title", "content" }
  ],
  "sections": [
    { "section", "title", "subsections": [] }
  ],
  "documentUrl": "url_to_pdf"
}
```

#### 4.2.4 FAQs
- Common questions about membership
- Academic activities
- Career guidance
- Participation procedures

**Data Structure:**
```json
{
  "categories": [
    {
      "category": "string",
      "faqs": [
        { "id", "question", "answer", "relatedLinks": [] }
      ]
    }
  ]
}
```

#### 4.2.5 Contact
- Official email addresses
- Physical office location
- Social media handles
- Department contacts

**Data Structure:**
```json
{
  "email": "string",
  "phone": "string",
  "office": { "building", "room", "campus" },
  "social": [{ "platform", "handle", "url" }],
  "departmentContacts": [
    { "department", "email", "phone", "personInCharge" }
  ]
}
```

---

### 4.3 Academics Section
**Purpose:** Educational resources and career development

**Subsections:**

#### 4.3.1 Actuarial Science at UDSM
- Program overview
- Duration and structure
- Courses by level
- Progression requirements
- Graduation requirements
- Skills developed

**Data Structure:**
```json
{
  "programInfo": { "name", "duration", "degree" },
  "description": "string",
  "structure": {
    "years": [
      { "year", "semester": [{ "courses": [] }] }
    ]
  },
  "progressionRequirements": [{ "level", "requirement" }],
  "graduationRequirements": [{ "requirement", "description" }],
  "skillsDeveloped": [{ "skill", "description" }]
}
```

#### 4.3.2 Study Materials
- Lecture slides organized by course/level
- Tutorials
- Past papers and quizzes

**Data Structure:**
```json
{
  "materials": [
    {
      "courseCode": "string",
      "courseName": "string",
      "level": "number",
      "semester": "number",
      "lecturer": "string",
      "resources": [
        {
          "type": "lecture | tutorial | pastpaper | quiz",
          "title": "string",
          "fileName": "string",
          "fileSize": "string",
          "uploadDate": "date",
          "downloadUrl": "url",
          "description": "string"
        }
      ]
    }
  ]
}
```

#### 4.3.3 Career Pathways
- Professional qualification routes
- Professional bodies information
- Career fields and opportunities

**Data Structure:**
```json
{
  "pathways": [
    {
      "title": "string",
      "description": "string",
      "steps": [{ "step", "description", "duration" }],
      "resources": [{ "title", "url" }]
    }
  ],
  "professionalBodies": [
    { "name", "description", "website", "focus" }
  ],
  "careerFields": [
    { "field", "description", "responsibilities", "salary_range" }
  ]
}
```

---

### 4.4 Data & Projects Section
**Purpose:** Practical resources and student showcase

**Subsections:**

#### 4.4.1 Data Hub
- Downloadable actuarial datasets
- Dataset descriptions and variables
- Source and format information
- Usage examples

**Data Structure:**
```json
{
  "datasets": [
    {
      "id": "string",
      "name": "string",
      "category": "insurance | claims | mortality | financial | demographic | simulated",
      "description": "string",
      "variables": [{ "name", "type", "description" }],
      "source": "string",
      "format": "csv | xlsx | json",
      "fileSize": "string",
      "downloadUrl": "url",
      "usageExample": "string",
      "applications": ["string"]
    }
  ]
}
```

#### 4.4.2 Student Projects
- Project showcase
- Student/team names
- Problem statement and objectives
- Methodology and findings
- Project files and links

**Data Structure:**
```json
{
  "projects": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "team": [{ "name", "role", "email" }],
      "academicYear": "string",
      "problemStatement": "string",
      "objectives": ["string"],
      "methodology": "string",
      "toolsUsed": ["string"],
      "findings": "string",
      "deliverables": [
        { "type": "report | presentation | code | demo", "url" }
      ],
      "thumbnail": "url",
      "category": "string"
    }
  ]
}
```

---

### 4.5 Community Section
**Purpose:** People, achievements, and partnerships

**Subsections:**

#### 4.5.1 Leadership
- Current leadership structure
- Leader names, positions, and profiles
- Leadership term information
- Official photographs

**Data Structure:**
```json
{
  "currentTerm": "2024-2025",
  "leaders": [
    {
      "id": "string",
      "name": "string",
      "position": "string",
      "portfolio": "string",
      "bio": "string",
      "photo": "url",
      "email": "string",
      "term": "date_range"
    }
  ]
}
```

#### 4.5.2 Membership
- Membership categories
- Eligibility criteria
- Benefits
- Application procedures

**Data Structure:**
```json
{
  "categories": [
    {
      "name": "string",
      "eligibility": ["string"],
      "benefits": ["string"],
      "requirements": ["string"],
      "joinProcedure": "string"
    }
  ],
  "statistics": { "totalMembers", "activeMembers" }
}
```

#### 4.5.3 Awards & Recognition
- Academic achievements
- Competition awards
- Scholarships
- Professional accomplishments
- Research innovations

**Data Structure:**
```json
{
  "awards": [
    {
      "id": "string",
      "title": "string",
      "recipient": "string",
      "category": "academic | competition | scholarship | professional | research | leadership",
      "year": "number",
      "description": "string",
      "image": "url"
    }
  ]
}
```

#### 4.5.4 Partners
- Official partner organizations
- Partnership descriptions
- Collaboration types
- Official links

**Data Structure:**
```json
{
  "partners": [
    {
      "id": "string",
      "name": "string",
      "type": "corporate | government | educational | ngo",
      "description": "string",
      "logo": "url",
      "website": "url",
      "collaboration": "string",
      "contactEmail": "string"
    }
  ]
}
```

---

### 4.6 News & Events Section
**Purpose:** Current activities and opportunities

**Subsections:**

#### 4.6.1 Upcoming Events
- Event details (date, time, venue)
- Event descriptions and themes
- Speakers/facilitators
- Registration information
- Target audience

**Data Structure:**
```json
{
  "events": [
    {
      "id": "string",
      "title": "string",
      "date": "datetime",
      "endDate": "datetime",
      "venue": "string",
      "type": "workshop | seminar | conference | networking | competition | training",
      "description": "string",
      "theme": "string",
      "speakers": [{ "name", "title", "bio", "photo" }],
      "targetAudience": "string",
      "capacity": "number",
      "registrationDeadline": "date",
      "registrationUrl": "url",
      "image": "url",
      "requirements": ["string"]
    }
  ]
}
```

#### 4.6.2 Latest News & Opportunities
- ASAUD announcements
- Internship opportunities
- Scholarships
- Competitions
- Mentorship programs
- Training opportunities
- Career announcements

**Data Structure:**
```json
{
  "items": [
    {
      "id": "string",
      "title": "string",
      "type": "news | internship | scholarship | competition | mentorship | training | career",
      "date": "date",
      "description": "string",
      "fullContent": "string",
      "image": "url",
      "category": "string",
      "deadline": "date",
      "link": "url",
      "featured": "boolean"
    }
  ]
}
```

---

## 5. NON-FUNCTIONAL REQUIREMENTS

### 5.1 Performance
- Page load time: < 2 seconds
- Lighthouse score: > 90
- Mobile responsiveness: 320px - 2560px
- Image optimization with Next.js Image component

### 5.2 Security
- HTTPS enforcement
- No sensitive data exposure
- Input validation on forms
- CSRF protection if forms exist

### 5.3 Usability
- Intuitive navigation structure
- Clear information hierarchy
- Accessibility (WCAG 2.1 AA)
- Mobile-first design approach

### 5.4 Maintainability
- Clean code structure
- Comprehensive documentation
- Reusable components
- Consistent naming conventions

### 5.5 Compatibility
- Chrome, Firefox, Safari, Edge (latest versions)
- iOS and Android devices
- Tablet and desktop viewing

---

## 6. DATA MANAGEMENT STRATEGY

### 6.1 Data Storage
All content stored in `/data` folder as JSON files organized by section:
```
data/
├── home/
├── about/
├── academics/
├── dataProjects/
├── community/
└── newsEvents/
```

### 6.2 Data Loading
- Static imports at build time using Next.js
- Efficient JSON parsing and rendering
- Optional: getStaticProps for SSG

### 6.3 Data Updating
- Modify JSON files directly
- Rebuild and redeploy (automatic with CI/CD)
- No database queries or backend logic

---

## 7. TECHNICAL SPECIFICATIONS

### 7.1 Technology Choices

| Aspect | Technology | Rationale |
|--------|-----------|-----------|
| Framework | Next.js | SSG, file-based routing, performance |
| Styling | Tailwind CSS | Utility-first, responsive, rapid development |
| Icons | Lucide React | Modern, customizable, tree-shakeable |
| PDF Handling | next-pdf-viewer | Server and client-side PDF rendering |
| File Download | Built-in fetch API | Simple, no external dependency |
| SEO | Next.js built-in | Meta tags, dynamic OG images |
| Analytics | Vercel Analytics | Built-in deployment tracking |

### 7.2 Component Architecture
- **Layout Components:** Navigation, Footer, Sidebar
- **Section Components:** Modular components for each section
- **Feature Components:** Cards, Carousel, Modal, Accordion
- **Utility Components:** Button, Badge, Tag, Alert

### 7.3 Folder Organization
See Section 8 for complete folder structure

---

## 8. USER INTERFACE & EXPERIENCE

### 8.1 Design Principles
- Clean, modern aesthetic
- Consistent color scheme (University colors + professional palette)
- Clear typography hierarchy
- Generous whitespace
- Intuitive CTA placement

### 8.2 Navigation
- Main navigation bar (desktop)
- Mobile hamburger menu
- Breadcrumb navigation on subsections
- Footer navigation links
- Search functionality across all content

### 8.3 Content Display
- Cards for courses, projects, events
- Tables for datasets and materials
- Carousels for featured content
- Modals for detailed information
- Accordions for FAQs

---

## 9. INTEGRATION & DEPLOYMENT

### 9.1 Build Process
```bash
npm run build    # Static generation
npm run start    # Production server
npm run dev      # Development environment
```

### 9.2 Deployment
- **Platform:** Vercel (recommended) or Static hosting
- **CDN:** Automatic with Vercel
- **SSL/TLS:** Automatic certificate management
- **Monitoring:** Built-in analytics

### 9.3 CI/CD
- GitHub Actions for automated builds
- Auto-deploy on main branch push
- Preview deployments for pull requests

---

## 10. SUCCESS METRICS

### 10.1 Functional Metrics
- All 6 sections fully functional
- 100% data visibility
- Zero broken links
- Fast page load times

### 10.2 User Metrics
- Student engagement tracking
- Download statistics
- Event registration volume
- Return visitor rate

### 10.3 Technical Metrics
- Lighthouse scores > 90
- 99.9% uptime
- < 2 second load times
- Mobile-friendly score

---

## 11. TIMELINE & MILESTONES

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Design & Planning | 1 week | Wireframes, Component library |
| Development - Phase 1 | 2 weeks | Home, About sections |
| Development - Phase 2 | 2 weeks | Academics, Data & Projects |
| Development - Phase 3 | 1.5 weeks | Community, News & Events |
| Testing & Optimization | 1 week | Bug fixes, performance tuning |
| Deployment & Launch | 3 days | Production deployment, monitoring |

---

## 12. RISK MANAGEMENT

### 12.1 Identified Risks
| Risk | Impact | Mitigation |
|------|--------|-----------|
| Data inconsistency | Medium | Version control, documentation |
| Build size | Medium | Code splitting, lazy loading |
| SEO concerns | Low | Next.js built-in SEO tools |
| Outdated data | Medium | Regular update schedule |

---

## 13. MAINTENANCE & SUPPORT

### 13.1 Post-Launch
- Regular content updates (bi-weekly)
- Security patches (as needed)
- Performance monitoring (continuous)
- User feedback collection (monthly)

### 13.2 Content Management
- Assign content owners per section
- Establish update schedule
- Document data file structures
- Create backup procedures

---

## 14. APPENDICES

### 14.1 Glossary
- **ASAUD:** Actuarial Science Association University of Dar es Salaam
- **UDSM:** University of Dar es Salaam
- **SSG:** Static Site Generation
- **SPA:** Single Page Application
- **CMS:** Content Management System

### 14.2 References
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- WCAG Accessibility Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

---

**Document Version:** 1.0  
**Last Updated:** September 2026  
**Next Review:** Upon project launch completion

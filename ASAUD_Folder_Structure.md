# ASAUD Website - Next.js Folder Structure

Complete folder structure for the ASAUD modern website built with Next.js, including data files, components, pages, and utilities.

```
asaud-website/
│
├── public/                          # Static assets (images, documents, PDFs)
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero-bg.jpg
│   │   │   └── hero-overlay.png
│   │   ├── about/
│   │   │   ├── asaud-logo.png
│   │   │   ├── university-seal.png
│   │   │   └── timeline-images/
│   │   ├── academics/
│   │   │   ├── books-icon.svg
│   │   │   └── courses-bg.jpg
│   │   ├── community/
│   │   │   ├── leadership-photos/
│   │   │   │   ├── president.jpg
│   │   │   │   ├── vicepresident.jpg
│   │   │   │   └── ...
│   │   │   └── partners-logos/
│   │   │       ├── partner1.png
│   │   │       └── partner2.png
│   │   ├── events/
│   │   │   └── event-thumbnails/
│   │   └── projects/
│   │       └── project-thumbnails/
│   │
│   ├── documents/
│   │   ├── constitution.pdf
│   │   ├── policies/
│   │   └── guidelines/
│   │
│   ├── downloads/
│   │   ├── study-materials/
│   │   │   ├── lectures/
│   │   │   ├── tutorials/
│   │   │   ├── past-papers/
│   │   │   └── quizzes/
│   │   └── datasets/
│   │       ├── insurance-data.csv
│   │       ├── mortality-data.xlsx
│   │       └── financial-data.json
│   │
│   ├── favicons/
│   │   └── favicon.ico
│   │
│   └── og-images/
│       ├── home-og.jpg
│       └── section-og.jpg
│
├── src/
│   │
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root layout with navigation & footer
│   │   ├── page.tsx                 # Home page
│   │   ├── globals.css              # Global styles
│   │   │
│   │   ├── about/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx             # About main page (redirect or overview)
│   │   │   ├── about-asaud/
│   │   │   │   └── page.tsx
│   │   │   ├── history/
│   │   │   │   └── page.tsx
│   │   │   ├── constitution/
│   │   │   │   └── page.tsx
│   │   │   ├── faqs/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   │
│   │   ├── academics/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx             # Academics overview
│   │   │   ├── actuarial-science/
│   │   │   │   └── page.tsx
│   │   │   ├── study-materials/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [courseId]/
│   │   │   │   │   └── page.tsx     # Individual course page
│   │   │   │   └── [courseId]/[type]/ # Filter by material type
│   │   │   │       └── page.tsx
│   │   │   └── career-pathways/
│   │   │       └── page.tsx
│   │   │
│   │   ├── data-projects/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx             # Data & Projects overview
│   │   │   ├── data-hub/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [datasetId]/
│   │   │   │       └── page.tsx
│   │   │   └── student-projects/
│   │   │       ├── page.tsx
│   │   │       └── [projectId]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── community/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx             # Community overview
│   │   │   ├── leadership/
│   │   │   │   └── page.tsx
│   │   │   ├── membership/
│   │   │   │   └── page.tsx
│   │   │   ├── awards/
│   │   │   │   └── page.tsx
│   │   │   └── partners/
│   │   │       └── page.tsx
│   │   │
│   │   ├── news-events/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx             # News & Events overview
│   │   │   ├── events/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [eventId]/
│   │   │   │       └── page.tsx
│   │   │   └── news/
│   │   │       ├── page.tsx
│   │   │       └── [newsId]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── search/
│   │   │   └── page.tsx             # Global search results
│   │   │
│   │   ├── not-found.tsx            # 404 page
│   │   └── error.tsx                # Error boundary
│   │
│   ├── components/                  # Reusable React components
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── BreadcrumbNav.tsx
│   │   │
│   │   ├── sections/                # Full section components
│   │   │   ├── HomeHero.tsx
│   │   │   ├── HomeFeatures.tsx
│   │   │   ├── HomeUpdates.tsx
│   │   │   ├── AboutMission.tsx
│   │   │   ├── AboutTimeline.tsx
│   │   │   ├── AcademicsProgram.tsx
│   │   │   ├── CommunityLeadership.tsx
│   │   │   ├── EventsList.tsx
│   │   │   └── NewsGrid.tsx
│   │   │
│   │   ├── cards/                   # Card components
│   │   │   ├── CourseCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── EventCard.tsx
│   │   │   ├── NewsCard.tsx
│   │   │   ├── PartnerCard.tsx
│   │   │   ├── LeadershipCard.tsx
│   │   │   ├── DatasetCard.tsx
│   │   │   └── AwardCard.tsx
│   │   │
│   │   ├── common/                  # Shared components
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── Alert.tsx
│   │   │   ├── Loading.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── Pagination.tsx
│   │   │
│   │   ├── carousels/
│   │   │   ├── FeaturedCarousel.tsx
│   │   │   └── TestimonialCarousel.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── RegistrationForm.tsx
│   │   │   ├── NewsletterSubscribe.tsx
│   │   │   └── FilterForm.tsx
│   │   │
│   │   ├── filters/
│   │   │   ├── CourseFilter.tsx
│   │   │   ├── EventFilter.tsx
│   │   │   ├── ProjectFilter.tsx
│   │   │   └── DatasetFilter.tsx
│   │   │
│   │   └── features/
│   │       ├── DownloadButton.tsx
│   │       ├── ShareButton.tsx
│   │       ├── FavoriteButton.tsx
│   │       └── PrintButton.tsx
│   │
│   ├── data/                        # All static content data
│   │   │
│   │   ├── home/
│   │   │   ├── hero.json
│   │   │   ├── introduction.json
│   │   │   ├── featuredActivities.json
│   │   │   ├── updates.json
│   │   │   └── socialLinks.json
│   │   │
│   │   ├── about/
│   │   │   ├── about-asaud.json
│   │   │   ├── history.json
│   │   │   ├── constitution.json
│   │   │   ├── faqs.json
│   │   │   └── contact.json
│   │   │
│   │   ├── academics/
│   │   │   ├── programInfo.json
│   │   │   ├── studyMaterials.json
│   │   │   ├── courses.json
│   │   │   └── careerPathways.json
│   │   │
│   │   ├── dataProjects/
│   │   │   ├── datasets.json
│   │   │   └── studentProjects.json
│   │   │
│   │   ├── community/
│   │   │   ├── leadership.json
│   │   │   ├── membership.json
│   │   │   ├── awards.json
│   │   │   └── partners.json
│   │   │
│   │   ├── newsEvents/
│   │   │   ├── events.json
│   │   │   └── news.json
│   │   │
│   │   ├── navigation/
│   │   │   ├── mainNav.json
│   │   │   └── footerLinks.json
│   │   │
│   │   └── site/
│   │       ├── config.json           # Site configuration
│   │       ├── metadata.json         # SEO metadata
│   │       └── constants.json        # Global constants
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   ├── useWindowSize.ts
│   │   ├── useSearch.ts
│   │   ├── useFilter.ts
│   │   ├── useLocalStorage.ts
│   │   └── usePagination.ts
│   │
│   ├── utils/                       # Utility functions
│   │   ├── formatters.ts            # Date, text formatters
│   │   ├── validators.ts            # Input validation
│   │   ├── helpers.ts               # Common helpers
│   │   ├── constants.ts             # App constants
│   │   ├── searchUtils.ts           # Search functionality
│   │   ├── filterUtils.ts           # Filtering logic
│   │   ├── downloadUtils.ts         # File download logic
│   │   └── imageOptimizer.ts        # Image optimization
│   │
│   ├── lib/                         # Third-party library wrappers
│   │   ├── api.ts                   # API calls (if needed)
│   │   └── dataLoader.ts            # Data loading utilities
│   │
│   ├── types/                       # TypeScript interfaces & types
│   │   ├── index.ts
│   │   ├── home.ts
│   │   ├── about.ts
│   │   ├── academics.ts
│   │   ├── dataProjects.ts
│   │   ├── community.ts
│   │   ├── newsEvents.ts
│   │   └── common.ts
│   │
│   ├── styles/                      # CSS modules & tailwind config
│   │   ├── globals.css              # Global Tailwind + custom styles
│   │   ├── variables.css            # CSS variables
│   │   ├── Home.module.css
│   │   ├── About.module.css
│   │   ├── Academics.module.css
│   │   ├── Community.module.css
│   │   └── components.module.css
│   │
│   └── config/
│       ├── siteConfig.ts            # Site configuration
│       ├── theme.ts                 # Theme configuration
│       └── constants.ts             # App-wide constants
│
├── tests/                           # Testing files
│   ├── components/
│   │   └── __tests__/
│   │       ├── Button.test.tsx
│   │       └── CardList.test.tsx
│   ├── pages/
│   │   └── __tests__/
│   │       └── index.test.tsx
│   └── utils/
│       └── __tests__/
│           └── formatters.test.ts
│
├── .github/
│   └── workflows/
│       ├── build.yml
│       ├── deploy.yml
│       └── test.yml
│
├── .env.local                       # Local environment variables
├── .env.example                     # Environment variables template
├── .gitignore
├── next.config.js                   # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json
├── package-lock.json
├── README.md
└── DEPLOYMENT.md
```

---

## Detailed Folder Descriptions

### `/public` Directory
Stores all static files that don't need processing:
- **images/:** Organized by section (hero, about, academics, community, events, projects)
- **documents/:** PDFs, constitution, guidelines
- **downloads/:** Study materials, datasets (organized by type)
- **favicons/:** Website icons
- **og-images/:** Open Graph images for social sharing

### `/src/app` Directory (Next.js App Router)
Page structure mirrors the website's user navigation:
- **Dynamic routes:** `[courseId]`, `[eventId]`, `[projectId]` for individual items
- **Nested layouts:** Each section has its own layout.tsx
- **Page routes:** Simple url-based navigation

### `/src/components` Directory
Organized by purpose:
- **layout/:** Navigation, header, footer components
- **sections/:** Full section components combining multiple elements
- **cards/:** Reusable card components for displaying items
- **common/:** UI components (buttons, badges, modals, etc.)
- **forms/:** Form components
- **filters/:** Filter UI components

### `/src/data` Directory
JSON files organized by section:
```json
// Example: academics/studyMaterials.json
{
  "materials": [
    {
      "courseCode": "ACT101",
      "courseName": "Introduction to Actuarial Science",
      "level": 1,
      "semester": 1,
      "lecturer": "Dr. Jane Doe",
      "resources": [
        {
          "type": "lecture",
          "title": "Week 1 - Introduction",
          "fileName": "ACT101_W1_Intro.pdf",
          "fileSize": "2.5 MB",
          "uploadDate": "2024-01-15",
          "downloadUrl": "/downloads/study-materials/lectures/ACT101_W1_Intro.pdf",
          "description": "Introduction to actuarial principles"
        }
      ]
    }
  ]
}
```

### `/src/types` Directory
TypeScript interfaces for type safety:
```typescript
// Example: academics.ts
export interface StudyMaterial {
  courseCode: string;
  courseName: string;
  level: number;
  semester: number;
  lecturer: string;
  resources: MaterialResource[];
}

export interface MaterialResource {
  type: 'lecture' | 'tutorial' | 'pastpaper' | 'quiz';
  title: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
  description: string;
}
```

### `/src/utils` Directory
Utility functions for common operations:
```typescript
// Example: formatters.ts
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US');
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};
```

### `/src/hooks` Directory
Custom React hooks for reusable logic:
```typescript
// Example: useSearch.ts
export const useSearch = (data: any[], searchFields: string[]) => {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    return data.filter(item =>
      searchFields.some(field =>
        String(item[field]).toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, data, searchFields]);
  
  return { query, setQuery, results };
};
```

---

## Data File Examples

### `/src/data/academics/courses.json`
```json
{
  "courses": [
    {
      "id": "ACT101",
      "code": "ACT101",
      "name": "Introduction to Actuarial Science",
      "level": 1,
      "semester": 1,
      "credits": 3,
      "lecturer": "Dr. Jane Doe",
      "email": "jane.doe@udsm.ac.tz",
      "description": "Foundational course covering basic actuarial principles...",
      "objectives": [
        "Understand actuarial profession",
        "Learn basic probability"
      ],
      "prerequisites": [],
      "assessmentMethod": "Exam (70%), Assignments (30%)"
    }
  ]
}
```

### `/src/data/newsEvents/events.json`
```json
{
  "events": [
    {
      "id": "evt-001",
      "title": "Actuarial Career Fair 2024",
      "date": "2024-10-15T09:00:00",
      "endDate": "2024-10-15T16:00:00",
      "venue": "UDSM Main Hall, Conference Center",
      "type": "networking",
      "description": "Meet industry professionals and explore career opportunities",
      "image": "/images/events/career-fair-2024.jpg",
      "registrationUrl": "https://forms.google.com/register-career-fair",
      "registrationDeadline": "2024-10-10"
    }
  ]
}
```

### `/src/data/dataProjects/datasets.json`
```json
{
  "datasets": [
    {
      "id": "mortality-2023",
      "name": "Tanzania Mortality Data 2023",
      "category": "mortality",
      "description": "Age-specific mortality rates for Tanzania (2023)",
      "variables": [
        { "name": "age", "type": "integer", "description": "Age in years" },
        { "name": "mortality_rate", "type": "decimal", "description": "Deaths per 1000" }
      ],
      "source": "Tanzania National Bureau of Statistics",
      "format": "csv",
      "fileSize": "1.2 MB",
      "downloadUrl": "/downloads/datasets/mortality-2023.csv",
      "applications": ["Life insurance", "Pension planning"]
    }
  ]
}
```

---

## Component Examples

### Generic Card Component with Dynamic Data
```typescript
// src/components/cards/CourseCard.tsx
import { Course } from '@/types/academics';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="p-6 border rounded-lg hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{course.name}</h3>
      <p className="text-gray-600 text-sm mb-4">Code: {course.code}</p>
      <div className="flex gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
          Level {course.level}
        </span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
          Sem {course.semester}
        </span>
      </div>
      <p className="text-gray-700 text-sm mb-4">{course.description}</p>
      <Link 
        href={`/academics/study-materials/${course.id}`}
        className="text-blue-600 hover:underline"
      >
        View Materials →
      </Link>
    </div>
  );
};
```

### Dynamic List Component with Map
```typescript
// src/components/sections/CoursesGrid.tsx
import { CourseCard } from '@/components/cards/CourseCard';
import { studyMaterials } from '@/data/academics/courses';

interface CoursesGridProps {
  level?: number;
  semester?: number;
}

export const CoursesGrid: React.FC<CoursesGridProps> = ({ 
  level, 
  semester 
}) => {
  const filtered = studyMaterials.filter(course => {
    if (level && course.level !== level) return false;
    if (semester && course.semester !== semester) return false;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
```

---

## Package.json Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.3.0",
    "lucide-react": "^0.263.0",
    "clsx": "^2.0.0",
    "date-fns": "^2.30.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

---

## Key Implementation Notes

### 1. Dynamic Routes
Use bracket notation for dynamic segments:
```
/academics/study-materials/[courseId]/page.tsx
/news-events/events/[eventId]/page.tsx
```

### 2. Data Rendering with Map
Always use `.map()` for displaying collections:
```typescript
{data.map(item => (
  <Component key={item.id} data={item} />
))}
```

### 3. TypeScript Support
Every data structure has corresponding types:
```typescript
// data file
const courses: Course[] = [...]

// component
<CourseCard course={course} />
```

### 4. File Organization
- Keep related components together
- One component per file
- Export named components
- Use index files for barrel exports

### 5. SEO Optimization
Each page should have metadata:
```typescript
// page.tsx
export const metadata: Metadata = {
  title: 'Page Title | ASAUD',
  description: 'Page description',
};
```

---

## Getting Started Commands

```bash
# Create Next.js project with this structure
npx create-next-app@latest asaud-website --typescript --tailwind

# Install additional dependencies
npm install lucide-react date-fns clsx

# Development
npm run dev

# Build
npm run build

# Production
npm run start

# Testing
npm run test
```

---

## Next Steps

1. **Create all data files** in `/src/data` with sample JSON
2. **Build layout components** (Header, Navigation, Footer)
3. **Create reusable components** (Cards, Buttons, Filters)
4. **Implement pages** section by section
5. **Add TypeScript types** for type safety
6. **Optimize images** with Next.js Image component
7. **Add search functionality** across all content
8. **Implement filters** for courses, events, projects
9. **Configure Tailwind** with custom colors
10. **Deploy to Vercel** or static hosting

This structure ensures scalability, maintainability, and easy content updates without backend infrastructure.

# ASAUD Website - Example Data Files

Ready-to-use JSON data structures for all sections of the website. Copy these into your `/src/data` folder and customize with actual content.

---

## 1. HOME SECTION

### `/src/data/home/hero.json`
```json
{
  "title": "Welcome to ASAUD",
  "subtitle": "Actuarial Science Association University of Dar es Salaam",
  "description": "Empowering actuarial science students through knowledge, career guidance, and professional development",
  "backgroundImage": "/images/hero/hero-bg.jpg",
  "cta": {
    "primary": {
      "text": "Explore Academics",
      "link": "/academics"
    },
    "secondary": {
      "text": "Join Community",
      "link": "/community/membership"
    }
  }
}
```

### `/src/data/home/featuredActivities.json`
```json
{
  "activities": [
    {
      "id": "feat-001",
      "title": "Actuarial Career Fair 2024",
      "description": "Connect with industry professionals and explore diverse career paths",
      "image": "/images/events/career-fair.jpg",
      "link": "/news-events/events/evt-001",
      "category": "event"
    },
    {
      "id": "feat-002",
      "title": "Advanced Probability Course",
      "description": "Deep dive into advanced probability theory with practical applications",
      "image": "/images/academics/probability.jpg",
      "link": "/academics/study-materials/ACT202",
      "category": "academics"
    },
    {
      "id": "feat-003",
      "title": "Insurance Claims Analysis Project",
      "description": "Student-led project analyzing real insurance claims data",
      "image": "/images/projects/claims-analysis.jpg",
      "link": "/data-projects/student-projects/proj-001",
      "category": "project"
    }
  ]
}
```

### `/src/data/home/updates.json`
```json
{
  "updates": [
    {
      "id": "upd-001",
      "date": "2024-09-20",
      "title": "New Study Materials Released",
      "content": "All lecture slides and tutorials for Semester 1 are now available in the Academics section",
      "type": "academic",
      "link": "/academics/study-materials"
    },
    {
      "id": "upd-002",
      "date": "2024-09-18",
      "title": "Career Mentorship Program Launches",
      "content": "Sign up for our new mentorship program connecting students with industry professionals",
      "type": "opportunity",
      "link": "/news-events/news/news-002"
    },
    {
      "id": "upd-003",
      "date": "2024-09-15",
      "title": "Leadership Elections Concluded",
      "content": "Congratulations to our newly elected leadership team for 2024-2025",
      "type": "announcement",
      "link": "/community/leadership"
    }
  ]
}
```

### `/src/data/home/socialLinks.json`
```json
{
  "social": [
    {
      "platform": "Facebook",
      "handle": "@ASAUD-UDSM",
      "url": "https://facebook.com/asaud.udsm",
      "icon": "facebook"
    },
    {
      "platform": "Twitter",
      "handle": "@ASAUD_UDSM",
      "url": "https://twitter.com/asaud_udsm",
      "icon": "twitter"
    },
    {
      "platform": "LinkedIn",
      "handle": "ASAUD-UDSM",
      "url": "https://linkedin.com/company/asaud-udsm",
      "icon": "linkedin"
    },
    {
      "platform": "Instagram",
      "handle": "@asaud_udsm",
      "url": "https://instagram.com/asaud_udsm",
      "icon": "instagram"
    }
  ]
}
```

---

## 2. ABOUT SECTION

### `/src/data/about/about-asaud.json`
```json
{
  "identity": {
    "name": "Actuarial Science Association",
    "acronym": "ASAUD",
    "tagline": "Shaping the Future of Actuarial Science"
  },
  "relationship": {
    "university": "University of Dar es Salaam",
    "establishmentDate": "2015"
  },
  "vision": "To be a leading student association that advances actuarial science education and professional development in East Africa",
  "mission": "To support actuarial science students through academic resources, professional guidance, and community engagement while promoting excellence in the field",
  "objectives": [
    "Provide quality academic support and resources to students",
    "Facilitate career development and professional networking",
    "Promote awareness of actuarial science as a profession",
    "Foster a vibrant and inclusive student community",
    "Collaborate with industry partners and professional bodies"
  ],
  "coreValues": [
    {
      "value": "Excellence",
      "description": "Striving for the highest standards in all our activities",
      "icon": "star"
    },
    {
      "value": "Integrity",
      "description": "Operating with honesty and strong moral principles",
      "icon": "shield"
    },
    {
      "value": "Community",
      "description": "Building strong relationships and supporting one another",
      "icon": "users"
    },
    {
      "value": "Innovation",
      "description": "Embracing new ideas and continuous improvement",
      "icon": "lightbulb"
    }
  ],
  "membershipScope": "All students pursuing a degree in Actuarial Science at UDSM"
}
```

### `/src/data/about/history.json`
```json
{
  "founded": "2015",
  "background": "ASAUD was established in 2015 by a group of dedicated actuarial science students who recognized the need for a platform to support their academic journey and professional development.",
  "timeline": [
    {
      "year": 2015,
      "event": "Association Established",
      "description": "ASAUD was officially formed with the first leadership team",
      "image": "/images/about/2015-founding.jpg"
    },
    {
      "year": 2016,
      "event": "First Career Fair",
      "description": "Organized the inaugural actuarial career fair with 5 companies",
      "image": "/images/about/2016-career-fair.jpg"
    },
    {
      "year": 2018,
      "event": "Website Launch",
      "description": "Launched ASAUD website to centralize resources",
      "image": "/images/about/2018-website.jpg"
    },
    {
      "year": 2020,
      "event": "Industry Partnerships",
      "description": "Established partnerships with major insurance companies",
      "image": "/images/about/2020-partnerships.jpg"
    },
    {
      "year": 2023,
      "event": "Membership Growth",
      "description": "Reached 500+ active members across the university",
      "image": "/images/about/2023-growth.jpg"
    }
  ],
  "achievements": [
    {
      "title": "500+ Active Members",
      "description": "Building a thriving community of actuarial science students",
      "year": 2024
    },
    {
      "title": "10+ Industry Partners",
      "description": "Collaborating with leading companies in the actuarial field",
      "year": 2024
    },
    {
      "title": "50+ Mentees Placed",
      "description": "Students successfully placed in internships through mentorship",
      "year": 2023
    }
  ]
}
```

### `/src/data/about/contact.json`
```json
{
  "email": "asaud@udsm.ac.tz",
  "phone": "+255-22-2410138",
  "office": {
    "building": "Main Campus Building",
    "room": "312",
    "campus": "University of Dar es Salaam"
  },
  "social": [
    {
      "platform": "Facebook",
      "handle": "@ASAUD-UDSM",
      "url": "https://facebook.com/asaud.udsm"
    },
    {
      "platform": "Email List",
      "handle": "asaud-discuss@groups.udsm.ac.tz",
      "url": "mailto:asaud-discuss@groups.udsm.ac.tz"
    }
  ],
  "departmentContacts": [
    {
      "department": "President",
      "email": "president@asaud.ac.tz",
      "phone": "+255-xxx-xxx",
      "personInCharge": "John Doe"
    },
    {
      "department": "Academics",
      "email": "academics@asaud.ac.tz",
      "phone": "+255-xxx-xxx",
      "personInCharge": "Jane Smith"
    },
    {
      "department": "Events",
      "email": "events@asaud.ac.tz",
      "phone": "+255-xxx-xxx",
      "personInCharge": "Mike Johnson"
    }
  ]
}
```

### `/src/data/about/faqs.json`
```json
{
  "categories": [
    {
      "category": "Membership",
      "faqs": [
        {
          "id": "faq-001",
          "question": "Who can join ASAUD?",
          "answer": "Any student pursuing a degree in Actuarial Science at UDSM can join ASAUD. There are no additional requirements beyond being an enrolled student.",
          "relatedLinks": ["/community/membership"]
        },
        {
          "id": "faq-002",
          "question": "What are the membership fees?",
          "answer": "ASAUD offers free membership for all actuarial science students. Additional optional donations support special projects and events.",
          "relatedLinks": []
        },
        {
          "id": "faq-003",
          "question": "How do I register as a member?",
          "answer": "Visit the Membership section and fill out the registration form. You'll receive confirmation and access to member resources within 2-3 business days.",
          "relatedLinks": ["/community/membership"]
        }
      ]
    },
    {
      "category": "Academics",
      "faqs": [
        {
          "id": "faq-004",
          "question": "Where can I find study materials?",
          "answer": "All study materials including lecture slides, tutorials, past papers, and quizzes are available in the Academics > Study Materials section, organized by course and level.",
          "relatedLinks": ["/academics/study-materials"]
        },
        {
          "id": "faq-005",
          "question": "Are materials updated regularly?",
          "answer": "Yes, materials are updated at the beginning of each semester. Materials from previous years are also maintained for reference.",
          "relatedLinks": ["/academics/study-materials"]
        }
      ]
    },
    {
      "category": "Career Development",
      "faqs": [
        {
          "id": "faq-006",
          "question": "How can I become a professional actuary?",
          "answer": "Check the Career Pathways section for detailed information about professional qualifications, required exams, and the steps to becoming a qualified actuary.",
          "relatedLinks": ["/academics/career-pathways"]
        }
      ]
    }
  ]
}
```

---

## 3. ACADEMICS SECTION

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
      "description": "Foundational course covering basic actuarial principles, the role of actuaries, and fundamental probability concepts.",
      "objectives": [
        "Understand the actuarial profession and its roles",
        "Master basic probability theory",
        "Learn fundamental risk concepts",
        "Understand actuarial notation and conventions"
      ],
      "prerequisites": ["Mathematics at A-level or equivalent"],
      "assessmentMethod": "Exam (70%), Assignments (20%), Participation (10%)"
    },
    {
      "id": "ACT102",
      "code": "ACT102",
      "name": "Financial Mathematics",
      "level": 1,
      "semester": 1,
      "credits": 3,
      "lecturer": "Prof. Michael Smith",
      "email": "michael.smith@udsm.ac.tz",
      "description": "Introduction to financial mathematics including interest rates, annuities, and loans.",
      "objectives": [
        "Understand time value of money",
        "Calculate present and future values",
        "Work with annuities and perpetuities",
        "Solve loan and investment problems"
      ],
      "prerequisites": ["Mathematics at A-level"],
      "assessmentMethod": "Exam (70%), Assignments (30%)"
    },
    {
      "id": "ACT201",
      "code": "ACT201",
      "name": "Probability & Statistics",
      "level": 2,
      "semester": 1,
      "credits": 4,
      "lecturer": "Dr. Sarah Johnson",
      "email": "sarah.johnson@udsm.ac.tz",
      "description": "Advanced probability theory and statistical methods essential for actuarial work.",
      "objectives": [
        "Advanced probability distributions",
        "Statistical inference and hypothesis testing",
        "Regression analysis",
        "Actuarial applications of statistics"
      ],
      "prerequisites": ["ACT101", "Statistics basics"],
      "assessmentMethod": "Exam (60%), Projects (25%), Participation (15%)"
    }
  ]
}
```

### `/src/data/academics/studyMaterials.json`
```json
{
  "materials": [
    {
      "courseId": "ACT101",
      "courseCode": "ACT101",
      "courseName": "Introduction to Actuarial Science",
      "level": 1,
      "semester": 1,
      "lecturer": "Dr. Jane Doe",
      "resources": [
        {
          "id": "res-001",
          "type": "lecture",
          "title": "Week 1 - Introduction to Actuarial Profession",
          "fileName": "ACT101_W1_Introduction.pdf",
          "fileSize": "2.5 MB",
          "uploadDate": "2024-01-15",
          "downloadUrl": "/downloads/study-materials/lectures/ACT101_W1_Introduction.pdf",
          "description": "Overview of the actuarial profession, career paths, and fundamental concepts"
        },
        {
          "id": "res-002",
          "type": "lecture",
          "title": "Week 2 - Probability Basics",
          "fileName": "ACT101_W2_Probability.pdf",
          "fileSize": "3.1 MB",
          "uploadDate": "2024-01-22",
          "downloadUrl": "/downloads/study-materials/lectures/ACT101_W2_Probability.pdf",
          "description": "Introduction to probability theory and basic probability calculations"
        },
        {
          "id": "res-003",
          "type": "tutorial",
          "title": "Problem Set 1 - Probability",
          "fileName": "ACT101_Tutorial_1.pdf",
          "fileSize": "0.8 MB",
          "uploadDate": "2024-01-25",
          "downloadUrl": "/downloads/study-materials/tutorials/ACT101_Tutorial_1.pdf",
          "description": "Practice problems with solutions for Week 1-2 content"
        },
        {
          "id": "res-004",
          "type": "pastpaper",
          "title": "Final Exam 2023",
          "fileName": "ACT101_Exam_2023.pdf",
          "fileSize": "1.2 MB",
          "uploadDate": "2024-01-30",
          "downloadUrl": "/downloads/study-materials/past-papers/ACT101_Exam_2023.pdf",
          "description": "Previous year final examination for practice"
        },
        {
          "id": "res-005",
          "type": "pastpaper",
          "title": "Final Exam 2023 Solutions",
          "fileName": "ACT101_Exam_2023_Solutions.pdf",
          "fileSize": "1.5 MB",
          "uploadDate": "2024-01-30",
          "downloadUrl": "/downloads/study-materials/past-papers/ACT101_Exam_2023_Solutions.pdf",
          "description": "Solutions and marking guide for 2023 exam"
        }
      ]
    }
  ]
}
```

### `/src/data/academics/careerPathways.json`
```json
{
  "pathways": [
    {
      "id": "path-001",
      "title": "Become a Professional Actuary",
      "description": "Complete pathway to becoming a qualified actuary in East Africa",
      "steps": [
        {
          "step": 1,
          "description": "Complete Bachelor's degree in Actuarial Science (3-4 years)",
          "duration": "3-4 years"
        },
        {
          "step": 2,
          "description": "Register with professional body (Actuarial Society of East Africa)",
          "duration": "1 month"
        },
        {
          "step": 3,
          "description": "Pass professional examinations (8-10 exams)",
          "duration": "3-5 years"
        },
        {
          "step": 4,
          "description": "Gain work experience (3+ years)",
          "duration": "3+ years"
        },
        {
          "step": 5,
          "description": "Obtain professional qualification (FSA or ASA)",
          "duration": "Ongoing"
        }
      ],
      "resources": [
        {
          "title": "Actuarial Society of East Africa",
          "url": "https://www.asea-actuaries.org"
        }
      ]
    }
  ],
  "professionalBodies": [
    {
      "id": "pb-001",
      "name": "Actuarial Society of East Africa (ASEA)",
      "description": "Regional professional body for actuaries in East Africa",
      "website": "https://www.asea-actuaries.org",
      "focus": "Professional development, ethics, and regulation"
    },
    {
      "id": "pb-002",
      "name": "Institute and Faculty of Actuaries (IFoA)",
      "description": "International professional body based in UK",
      "website": "https://www.actuaries.org.uk",
      "focus": "International qualifications and professional standards"
    }
  ],
  "careerFields": [
    {
      "id": "cf-001",
      "field": "Life Insurance",
      "description": "Develop and manage life insurance and pension products",
      "responsibilities": [
        "Product design",
        "Pricing and profitability analysis",
        "Risk management"
      ],
      "salaryRange": "$60,000 - $150,000"
    },
    {
      "id": "cf-002",
      "field": "General Insurance",
      "description": "Work with property, motor, and health insurance",
      "responsibilities": [
        "Claims reserving",
        "Rate making",
        "Risk assessment"
      ],
      "salaryRange": "$55,000 - $120,000"
    },
    {
      "id": "cf-003",
      "field": "Investment & Asset Management",
      "description": "Manage investment portfolios and assess financial risks",
      "responsibilities": [
        "Portfolio optimization",
        "Risk modeling",
        "Performance analysis"
      ],
      "salaryRange": "$70,000 - $200,000"
    }
  ]
}
```

---

## 4. DATA & PROJECTS SECTION

### `/src/data/dataProjects/datasets.json`
```json
{
  "datasets": [
    {
      "id": "mortality-2023",
      "name": "Tanzania Mortality Data 2023",
      "category": "mortality",
      "description": "Age-specific mortality rates for Tanzania covering all regions and demographics",
      "variables": [
        {
          "name": "age",
          "type": "integer",
          "description": "Age in years (0-100+)"
        },
        {
          "name": "mortality_rate",
          "type": "decimal",
          "description": "Deaths per 1000 population"
        },
        {
          "name": "gender",
          "type": "string",
          "description": "M (Male) or F (Female)"
        },
        {
          "name": "region",
          "type": "string",
          "description": "Region in Tanzania"
        }
      ],
      "source": "Tanzania National Bureau of Statistics",
      "format": "csv",
      "fileSize": "1.2 MB",
      "downloadUrl": "/downloads/datasets/mortality-2023.csv",
      "usageExample": "Suitable for life insurance pricing, pension calculations, and mortality analysis",
      "applications": [
        "Life insurance pricing",
        "Pension plan analysis",
        "Population forecasting"
      ]
    },
    {
      "id": "insurance-claims-2023",
      "name": "Motor Insurance Claims 2023",
      "category": "claims",
      "description": "Comprehensive motor insurance claims data for East Africa",
      "variables": [
        {
          "name": "claim_id",
          "type": "string",
          "description": "Unique claim identifier"
        },
        {
          "name": "claim_date",
          "type": "date",
          "description": "Date claim was filed"
        },
        {
          "name": "claim_amount",
          "type": "decimal",
          "description": "Claim payout amount in USD"
        },
        {
          "name": "vehicle_type",
          "type": "string",
          "description": "Type of vehicle (car, motorcycle, truck, etc.)"
        },
        {
          "name": "severity",
          "type": "string",
          "description": "Claim severity (minor, major, total loss)"
        }
      ],
      "source": "Insurance Company Partners",
      "format": "xlsx",
      "fileSize": "5.8 MB",
      "downloadUrl": "/downloads/datasets/insurance-claims-2023.xlsx",
      "usageExample": "Analyze claim trends, severities, and develop reserving models",
      "applications": [
        "Claims analysis",
        "Reserve setting",
        "Pricing analysis",
        "Fraud detection"
      ]
    }
  ]
}
```

### `/src/data/dataProjects/studentProjects.json`
```json
{
  "projects": [
    {
      "id": "proj-001",
      "title": "Predictive Modeling for Life Insurance Mortality",
      "description": "Developing machine learning models to predict mortality rates based on socioeconomic factors",
      "team": [
        {
          "name": "Alice Kipchoge",
          "role": "Project Lead",
          "email": "alice.kipchoge@udsm.ac.tz"
        },
        {
          "name": "Bob Mwangi",
          "role": "Data Analyst",
          "email": "bob.mwangi@udsm.ac.tz"
        }
      ],
      "academicYear": "2023-2024",
      "problemStatement": "Current mortality tables do not account for emerging socioeconomic factors in East Africa. This project develops improved predictive models.",
      "objectives": [
        "Identify key socioeconomic predictors of mortality",
        "Develop and validate ML models",
        "Compare model accuracy with traditional approaches",
        "Provide recommendations for insurance pricing"
      ],
      "methodology": "Obtained mortality data from WHO, applied logistic regression, random forests, and neural networks",
      "toolsUsed": [
        "Python",
        "Scikit-learn",
        "Pandas",
        "R"
      ],
      "findings": "ML models achieved 89% accuracy, outperforming traditional methods. Age and income are primary predictors.",
      "deliverables": [
        {
          "type": "report",
          "url": "/downloads/projects/proj-001-report.pdf"
        },
        {
          "type": "presentation",
          "url": "/downloads/projects/proj-001-slides.pptx"
        },
        {
          "type": "code",
          "url": "https://github.com/asaud/mortality-prediction"
        }
      ],
      "thumbnail": "/images/projects/mortality-prediction.jpg",
      "category": "Insurance"
    },
    {
      "id": "proj-002",
      "title": "Claims Frequency Analysis in Motor Insurance",
      "description": "Statistical analysis of motor insurance claims frequency patterns and their drivers",
      "team": [
        {
          "name": "Carol Mutua",
          "role": "Analyst",
          "email": "carol.mutua@udsm.ac.tz"
        }
      ],
      "academicYear": "2023-2024",
      "problemStatement": "Insurance companies need better understanding of claims frequency patterns to optimize pricing",
      "objectives": [
        "Analyze historical claims data",
        "Identify frequency patterns and trends",
        "Develop frequency models",
        "Recommend pricing adjustments"
      ],
      "methodology": "Analyzed 3 years of claims data, applied Poisson and negative binomial regression models",
      "toolsUsed": [
        "R",
        "Statistical Analysis"
      ],
      "findings": "Age and vehicle type are significant frequency drivers. Seasonal patterns identified.",
      "deliverables": [
        {
          "type": "report",
          "url": "/downloads/projects/proj-002-report.pdf"
        }
      ],
      "thumbnail": "/images/projects/claims-frequency.jpg",
      "category": "Insurance"
    }
  ]
}
```

---

## 5. COMMUNITY SECTION

### `/src/data/community/leadership.json`
```json
{
  "currentTerm": "2024-2025",
  "leaders": [
    {
      "id": "lead-001",
      "name": "John Mwenda",
      "position": "President",
      "portfolio": "Overall Association Leadership",
      "bio": "Final year student with passion for actuarial science and student advocacy. Led successful career fair in 2023.",
      "photo": "/images/community/leadership/john-mwenda.jpg",
      "email": "john.mwenda@udsm.ac.tz",
      "term": "2024-2025"
    },
    {
      "id": "lead-002",
      "name": "Sarah Kimani",
      "position": "Vice President",
      "portfolio": "Academic Affairs",
      "bio": "3rd year student focused on improving academic resources and support for all levels.",
      "photo": "/images/community/leadership/sarah-kimani.jpg",
      "email": "sarah.kimani@udsm.ac.tz",
      "term": "2024-2025"
    },
    {
      "id": "lead-003",
      "name": "Michael Ochieng",
      "position": "Treasurer",
      "portfolio": "Financial Management",
      "bio": "Experienced in budgeting and financial planning, ensures transparent financial management.",
      "photo": "/images/community/leadership/michael-ochieng.jpg",
      "email": "michael.ochieng@udsm.ac.tz",
      "term": "2024-2025"
    }
  ]
}
```

### `/src/data/community/partners.json`
```json
{
  "partners": [
    {
      "id": "part-001",
      "name": "East African Insurance Company",
      "type": "corporate",
      "description": "Leading insurance provider in East Africa",
      "logo": "/images/community/partners/eaic-logo.png",
      "website": "https://www.eaic.com",
      "collaboration": "Career fair sponsorship, internship opportunities, guest lectures",
      "contactEmail": "hr@eaic.com"
    },
    {
      "id": "part-002",
      "name": "Central Bank of Tanzania",
      "type": "government",
      "description": "National central bank and financial regulator",
      "logo": "/images/community/partners/cbt-logo.png",
      "website": "https://www.bot-tz.org",
      "collaboration": "Regulatory insights, career opportunities, research support",
      "contactEmail": "careers@bot.go.tz"
    },
    {
      "id": "part-003",
      "name": "University of Dar es Salaam",
      "type": "educational",
      "description": "Our host university providing institutional support",
      "logo": "/images/community/partners/udsm-logo.png",
      "website": "https://www.udsm.ac.tz",
      "collaboration": "Venue, administrative support, faculty engagement",
      "contactEmail": "admin@udsm.ac.tz"
    }
  ]
}
```

### `/src/data/community/awards.json`
```json
{
  "awards": [
    {
      "id": "award-001",
      "title": "Best Student Project Award",
      "recipient": "Alice Kipchoge",
      "category": "research",
      "year": 2024,
      "description": "Recognition for outstanding predictive modeling research in life insurance",
      "image": "/images/community/awards/research-2024.jpg"
    },
    {
      "id": "award-002",
      "title": "Leadership Excellence Award",
      "recipient": "John Mwenda",
      "category": "leadership",
      "year": 2024,
      "description": "Recognition for outstanding leadership and contribution to ASAUD",
      "image": "/images/community/awards/leadership-2024.jpg"
    },
    {
      "id": "award-003",
      "title": "Actuarial Exam Success Award",
      "recipient": "Carol Mutua",
      "category": "academic",
      "year": 2024,
      "description": "Recognition for passing professional actuarial examination",
      "image": "/images/community/awards/exam-2024.jpg"
    }
  ]
}
```

---

## 6. NEWS & EVENTS SECTION

### `/src/data/newsEvents/events.json`
```json
{
  "events": [
    {
      "id": "evt-001",
      "title": "Actuarial Career Fair 2024",
      "date": "2024-10-15T09:00:00",
      "endDate": "2024-10-15T16:00:00",
      "venue": "UDSM Main Hall Conference Center, Dar es Salaam",
      "type": "networking",
      "description": "Meet and connect with industry professionals from leading insurance, pension, and investment companies. Explore internship and graduate opportunities.",
      "theme": "Shaping the Future of Actuarial Science",
      "speakers": [
        {
          "name": "Dr. Patricia Muthiora",
          "title": "Chief Actuary, East African Insurance",
          "bio": "25+ years experience in life insurance and pension management",
          "photo": "/images/community/speakers/patricia.jpg"
        },
        {
          "name": "James Kariuki",
          "title": "Head of Actuarial Division, Central Bank",
          "bio": "Regulatory expert on financial sector",
          "photo": "/images/community/speakers/james.jpg"
        }
      ],
      "targetAudience": "All actuarial science students, especially 2nd and 3rd year",
      "capacity": 300,
      "registrationDeadline": "2024-10-10",
      "registrationUrl": "https://forms.google.com/register-career-fair",
      "image": "/images/events/career-fair-2024.jpg",
      "requirements": [
        "Updated CV",
        "Professional attire recommended",
        "Student ID"
      ]
    },
    {
      "id": "evt-002",
      "title": "Advanced Probability Workshop",
      "date": "2024-09-28T14:00:00",
      "endDate": "2024-09-28T17:00:00",
      "venue": "Mathematics Building Room 215, UDSM",
      "type": "workshop",
      "description": "Intensive workshop on advanced probability theory with applications to insurance and investments. Hands-on problem-solving session.",
      "theme": "Mastering Probability for Actuarial Practice",
      "speakers": [
        {
          "name": "Prof. David Nkosi",
          "title": "Mathematics Department, UDSM",
          "bio": "Specialist in probability and statistical methods",
          "photo": "/images/community/speakers/david.jpg"
        }
      ],
      "targetAudience": "2nd and 3rd year actuarial science students",
      "capacity": 80,
      "registrationDeadline": "2024-09-25",
      "registrationUrl": "https://forms.google.com/register-workshop",
      "image": "/images/events/probability-workshop.jpg",
      "requirements": [
        "Basic probability knowledge",
        "Calculator or laptop",
        "Notebook"
      ]
    }
  ]
}
```

### `/src/data/newsEvents/news.json`
```json
{
  "items": [
    {
      "id": "news-001",
      "title": "New Study Materials Released for All Courses",
      "type": "news",
      "date": "2024-09-20",
      "description": "Complete lecture slides, tutorials, and past papers now available for all courses",
      "fullContent": "We are excited to announce that all study materials for the 2024-2025 academic year have been released and are now available in the Academics section. This includes lecture slides for all courses, practice tutorials, past examination papers, and quiz materials. Students can access all materials organized by course, level, and type. We encourage all students to review materials regularly and utilize them for effective exam preparation.",
      "image": "/images/news/study-materials-2024.jpg",
      "category": "Academic",
      "link": "/academics/study-materials",
      "featured": true
    },
    {
      "id": "news-002",
      "title": "Career Mentorship Program Now Open for Applications",
      "type": "mentorship",
      "date": "2024-09-18",
      "description": "Apply now to be matched with industry professionals for career guidance and mentoring",
      "fullContent": "ASAUD is launching an exciting new mentorship program connecting students with experienced actuaries and insurance professionals. Mentors will provide guidance on career development, exam preparation, and professional growth. The program is open to all actuarial science students. Application deadline is September 30, 2024.",
      "image": "/images/news/mentorship-program.jpg",
      "category": "Career",
      "deadline": "2024-09-30",
      "link": "/news-events/news/news-002",
      "featured": true
    },
    {
      "id": "news-003",
      "title": "Scholarship Opportunity: East African Insurance Fund",
      "type": "scholarship",
      "date": "2024-09-15",
      "description": "Up to 10 scholarships available for outstanding actuarial science students",
      "fullContent": "East African Insurance Company is offering 10 merit-based scholarships worth $2,000 each for deserving actuarial science students. Criteria include academic excellence, community involvement, and financial need. Interested students should submit applications by October 15, 2024.",
      "image": "/images/news/scholarship-2024.jpg",
      "category": "Opportunity",
      "deadline": "2024-10-15",
      "link": "/news-events/news/news-003",
      "featured": true
    }
  ]
}
```

---

## 7. NAVIGATION & CONFIGURATION

### `/src/data/navigation/mainNav.json`
```json
{
  "navItems": [
    {
      "id": "nav-home",
      "label": "Home",
      "href": "/",
      "icon": "home"
    },
    {
      "id": "nav-about",
      "label": "About",
      "href": "/about",
      "icon": "info",
      "subItems": [
        { "label": "About ASAUD", "href": "/about/about-asaud" },
        { "label": "History", "href": "/about/history" },
        { "label": "Constitution", "href": "/about/constitution" },
        { "label": "FAQs", "href": "/about/faqs" },
        { "label": "Contact", "href": "/about/contact" }
      ]
    },
    {
      "id": "nav-academics",
      "label": "Academics",
      "href": "/academics",
      "icon": "book",
      "subItems": [
        { "label": "Program Overview", "href": "/academics/actuarial-science" },
        { "label": "Study Materials", "href": "/academics/study-materials" },
        { "label": "Career Pathways", "href": "/academics/career-pathways" }
      ]
    },
    {
      "id": "nav-data",
      "label": "Data & Projects",
      "href": "/data-projects",
      "icon": "database",
      "subItems": [
        { "label": "Data Hub", "href": "/data-projects/data-hub" },
        { "label": "Student Projects", "href": "/data-projects/student-projects" }
      ]
    },
    {
      "id": "nav-community",
      "label": "Community",
      "href": "/community",
      "icon": "users",
      "subItems": [
        { "label": "Leadership", "href": "/community/leadership" },
        { "label": "Membership", "href": "/community/membership" },
        { "label": "Awards", "href": "/community/awards" },
        { "label": "Partners", "href": "/community/partners" }
      ]
    },
    {
      "id": "nav-news",
      "label": "News & Events",
      "href": "/news-events",
      "icon": "newspaper",
      "subItems": [
        { "label": "Events", "href": "/news-events/events" },
        { "label": "News", "href": "/news-events/news" }
      ]
    }
  ]
}
```

### `/src/data/site/config.json`
```json
{
  "siteName": "ASAUD Website",
  "siteDescription": "Actuarial Science Association University of Dar es Salaam - Educational Hub",
  "siteUrl": "https://asaud.udsm.ac.tz",
  "logo": "/images/logo.png",
  "favicon": "/favicons/favicon.ico",
  "language": "en",
  "timezone": "Africa/Dar_es_Salaam",
  "contactEmail": "asaud@udsm.ac.tz",
  "phone": "+255-22-2410138",
  "socialLinks": {
    "facebook": "https://facebook.com/asaud.udsm",
    "twitter": "https://twitter.com/asaud_udsm",
    "linkedin": "https://linkedin.com/company/asaud-udsm",
    "instagram": "https://instagram.com/asaud_udsm"
  },
  "colors": {
    "primary": "#0066cc",
    "secondary": "#00a86b",
    "accent": "#ff9800",
    "text": "#333333",
    "background": "#ffffff"
  }
}
```

---

## How to Use These Files

1. **Create folder structure:** Make all directories under `/src/data`
2. **Copy JSON content:** Save each section's data into corresponding files
3. **Customize content:** Replace sample data with actual ASAUD information
4. **Import in components:** Use `import data from '@/data/section/file.json'`
5. **Render with map:** Display data using `.map()` function in React components

## Example Component Usage

```typescript
import coursesData from '@/data/academics/courses.json';

export default function CoursesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {coursesData.courses.map(course => (
        <div key={course.id} className="p-6 border rounded-lg">
          <h3>{course.name}</h3>
          <p>Level {course.level}</p>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}
```

This provides complete, production-ready data structures for your ASAUD website!

export interface School {
  id: string;
  name: string;
  shortName: string;
  location: string;
  established?: string;
  ages?: string;
  curriculum: string;
  logo: string;
  website: string;
  websiteLabel: string;
  tagline: string;
  description: string;
  gallery: string[];
}

export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface OperationalModel {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface ManagementModule {
  icon: string;
  title: string;
  description: string;
}

export interface ElevateValue {
  letter: string;
  title: string;
  description: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  dateIso: string;
  author: string;
  category: string;
  image: string;
  url: string;
  excerpt: string;
  fullBody?: string[];
}

export interface CareerStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface VideoStory {
  id: string;
  title: string;
  subtitle: string;
  thumb: string;
  embedUrl: string;
  category: string;
}

export interface PartnerItem {
  name: string;
  logo: string;
  type: string;
  description?: string;
}

export const GES_DATA = {
  impact: {
    students: "5,000+",
    employees: "700+",
    alumni: "100+",
    campuses: "4",
    years: "13+",
    labels: {
      students: "Enrolled Learners Across Network",
      employees: "World-Class Educators & Specialists",
      alumni: "Graduates Thriving Globally",
      campuses: "Premium Schools & Early Centers",
      years: "Years of Educational Leadership (Since 2012)"
    }
  },
  heroThemes: [
    {
      id: "excellence",
      title: "Quest for Excellence",
      subtitle: "A World of Possibilities in Quality Education",
      description: "Delivering world-class K-12 British and early childhood education rooted in academic rigor, innovative pedagogy, and holistic student empowerment.",
      image: "/assets/img/hero/hero-quest-excellence.jpg",
      ctaLabel: "Explore Our Schools",
      ctaLink: "/schools"
    },
    {
      id: "meeting",
      title: "Meeting Request",
      subtitle: "Direct Access to GES Educational Leadership",
      description: "Schedule an executive consultation with the Global Education Services administration to discuss school admissions, partnerships, and educational collaboration.",
      image: "/assets/img/hero/hero-executive-meeting.jpg",
      ctaLabel: "Request an Appointment",
      ctaLink: "/contact?type=meeting"
    },
    {
      id: "community",
      title: "Inside GES Community",
      subtitle: "A Nurturing Environment Where Every Child Thrives",
      description: "Explore our vibrant school life, student ceremonies, artistic showcases, sports achievements, and family partnerships across the Sultanate of Oman.",
      image: "/assets/img/hero/hero-vibrant-community.jpg",
      ctaLabel: "Discover Our Stories",
      ctaLink: "/news"
    },
    {
      id: "support",
      title: "24-Hour Effective Support",
      subtitle: "Continuous Operational & Academic Backing",
      description: "Providing continuous operational, technological, and curriculum support to ensure every campus in our network operates at peak international standards.",
      image: "/assets/img/hero/hero-effective-support.jpg",
      ctaLabel: "Contact Support Team",
      ctaLink: "/contact"
    }
  ],
  about: {
    companyName: "Global Education Services Company (GES Quality Education)",
    legalName: "Global Education Services L.L.C.",
    foundingYear: "2012",
    headline: "A definitive statement of excellence in quality education",
    intro: [
      "Global Education Services Company “GES” Quality Education is a leading private education group in the Sultanate of Oman, dedicated to delivering world-class K-12 premium schools, preschools, and early learning centers. Since our founding in 2012, GES has been committed to nurturing young minds and empowering them with the knowledge, skills, and values needed to thrive in an ever-changing world.",
      "As a homegrown Omani brand, GES is the lifelong dream of the Al Hashmi family, who envisioned a transformative educational journey for the children of Oman. Our mission is to provide quality education that inspires innovation, fosters leadership, and cultivates a lifelong love for learning.",
      "Global Education Services L.L.C. was established as Oman’s premier private education group, recognized internationally for its commitment to technology, knowledge, and innovation. Leveraging Oman’s stability, GES attracts, develops, and retains top talent from the region and beyond.",
      "Over the years, GES has built a team of experienced experts specializing in opening new schools, revitalizing struggling institutions, and enhancing existing ones. Guided by long-term investment strategies and sustainable education policies, GES is committed to supporting Oman’s Vision 2040 and global educational goals.",
      "As GES celebrates 13 years of excellence in 2025, it remains dedicated to fostering productive learning environments, ensuring equitable resource allocation, and delivering effective leadership to meet the needs of all learners."
    ],
    campusDoors: "WE ARE ALWAYS OPEN TO LEARNERS",
    campusDoorsSub: "GES Quality Education is a leading private education group, established in 2012 by visionary Omani entrepreneurs. With a focus on technology, innovation, and knowledge, GES delivers world-class education across K-12 schools, preschools, and early learning centers, contributing to Oman’s Vision 2040 and global educational excellence."
  },
  chairman: {
    name: "Honorable Sheikh Salim Hamood Al Hashmi",
    role: "Chairman",
    image: "/assets/img/chirman.png",
    leadQuote: "We believe that every child, when given the right opportunities and access to quality education, can learn, achieve, and make a meaningful difference in their lives and the world around them.",
    message: [
      "We believe that every child, when given the right opportunities and access to quality education, can learn, achieve, and make a meaningful difference in their lives and the world around them. Every child is unique, and with the right guidance, support, and encouragement, they can unlock their full potential and become agents of positive change.",
      "This belief drives us to provide our students with a safe, supportive, and positive school environment that understands and addresses their individual needs. By incorporating diverse teaching methods and learning styles, we ensure that every student is given the opportunity to succeed and thrive.",
      "Education is a collaborative effort. When schools, families, and communities work together, students become more successful, aware of their surroundings, and equipped to contribute to the growth and well-being of their communities. This is why we actively encourage parental involvement in their children’s education and seize every opportunity to engage with the broader community.",
      "Our mission is to instill in students the importance of receiving a high-quality education and to nurture them into lifelong learners who are curious, adaptable, and driven to continuously learn and grow. We aim to prepare them not only to thrive in an ever-changing world but also to lead with confidence, empathy, and innovation."
    ]
  },
  leadership: [
    {
      name: "Honorable Sheikh Salim Hamood Al Hashmi",
      role: "Chairman",
      image: "/assets/img/chirman.png",
      bio: "Visionary founder of GES Quality Education, championing child-centric pedagogy and nationwide educational advancement."
    },
    {
      name: "Sheikha Janat Salim Hamood Al Hashmi",
      role: "Chief Executive Officer (CEO)",
      image: "/assets/img/members/Jannat.jpg",
      bio: "Leading executive strategy, global institutional partnerships, and future-forward educational transformation."
    },
    {
      name: "Sheikha Jinan Salim Hamood Al Hashmi",
      role: "Managing Director",
      image: "/assets/img/members/jinan.jpg",
      bio: "Overseeing operations, campus network growth, and high-impact educational program delivery across the Sultanate."
    },
    {
      name: "Sheikh Julanda Salim Hamood Al Hashmi",
      role: "Vice President",
      image: "/assets/img/members/julanda.jpg",
      bio: "Spearheading strategic investments, public-private partnerships, and operational governance."
    },
    {
      name: "Ms. Sarah Saeed",
      role: "Head of Academics",
      image: "/assets/img/members/Sarah.jpg",
      bio: "Directing curriculum development, pedagogical quality assurance, and international accreditation standards."
    },
    {
      name: "Mr. Shanmuganand Hariharan",
      role: "Director of Finance & Accounts",
      image: "/assets/img/members/Heri.jpg",
      bio: "Managing institutional fiscal sustainability, capital allocation, and governance compliance."
    },
    {
      name: "Ms. Randa Al Ahmadieh",
      role: "Head of Administration",
      image: "/assets/img/members/Randa.jpg",
      bio: "Orchestrating central operations, regulatory relations with ministries, and institutional support systems."
    }
  ] as LeadershipMember[],
  visionMission: {
    vision: "To empower a generation of innovative leaders equipped with the knowledge, skills, and values to thrive in a globalized world and contribute to the advancement of society.",
    mission: "To provide exceptional education that inspires curiosity, fosters lifelong learning, and prepares students to achieve their full potential and make a positive impact on the world.",
    innovationStatement: "We lead in educational innovation by offering world-class curricula and forging partnerships with top institutions. Our focus is on creating a dynamic learning environment where students can explore their talents, pursue excellence, and contribute to the future of knowledge and society."
  },
  elevate: [
    {
      letter: "E",
      title: "Excellence",
      description: "Striving for the highest academic and ethical standards."
    },
    {
      letter: "L",
      title: "Leadership",
      description: "Empowering students to take initiative and inspire change."
    },
    {
      letter: "E",
      title: "Equity",
      description: "Ensuring inclusive, personalized learning for all."
    },
    {
      letter: "V",
      title: "Vision",
      description: "Driving innovation and future-focused education."
    },
    {
      letter: "A",
      title: "Adaptability",
      description: "Embracing change and continuous growth."
    },
    {
      letter: "T",
      title: "Technology",
      description: "Utilizing advanced tools for effective learning."
    },
    {
      letter: "E",
      title: "Empowerment",
      description: "Cultivating responsible, globally minded individuals."
    }
  ] as ElevateValue[],
  schools: [
    {
      id: "sips",
      name: "Al Shomoukh International Private School (SIPS)",
      shortName: "Al Shomoukh International Private School",
      location: "Hay Al Hail, Al Jadeed Al Hail South, Muscat – Oman",
      established: "2015",
      curriculum: "National English Curriculum (British) & Bilingual Stream (K-12)",
      logo: "/assets/img/about/sis-logo.jpg",
      website: "http://alshomoukh.com/",
      websiteLabel: "www.alshomoukh.com",
      tagline: "Academic Excellence Through British National Curriculum",
      description: "Al Shomoukh International Private School (SIPS) is one of Oman’s top educational schools, renowned for delivering exceptional academic excellence through the National English Curriculum (British) for K-12 students. Established in 2015 alongside a bilingual stream for students seeking a diverse academic pathway, SIPS offers a world-class learning environment that welcomes students from diverse cultural and national backgrounds, fostering inclusivity and global citizenship. With a strong reputation for academic excellence across Oman, SIPS has consistently achieved outstanding outcomes, earning its place among the leading private schools in the country.",
      gallery: [
        "/assets/img/about/s1.jpg",
        "/assets/img/about/s2.jpg",
        "/assets/img/about/s3.jpg",
        "/assets/img/about/s4.jpg"
      ]
    },
    {
      id: "shomoukh-qurum",
      name: "Shomoukh Early Childhood Education Center – Al Qurum Campus",
      shortName: "Shomoukh ECE Al Qurum Campus",
      location: "Al Saruj St., Shatti Al Qurum, Muscat - Oman",
      ages: "Ages 1 to 4 Years",
      curriculum: "Reggio Emilia Approach Inspired Early Childhood",
      logo: "/assets/img/about/snlogo.jpg",
      website: "https://www.shomoukh.com/",
      websiteLabel: "www.shomoukh.com",
      tagline: "Purpose-Built Early Years Inspired by Reggio Emilia",
      description: "Shomoukh Early Childhood Education Center at Al Qurum Campus is one of Oman’s leading early childhood education centers, providing exceptional care in a purpose-built environment designed for children aged one to four. With a wide range of programs and a curriculum inspired by the Reggio Emilia Approach, the center fosters creativity, critical thinking, and holistic development. Our highly qualified educators and state-of-the-art facilities ensure children are nurtured, engaged, and well-prepared for future learning. Trusted by families across Oman, Shomoukh ECE is a second home for children, offering a safe and inspiring space to thrive.",
      gallery: [
        "/assets/img/about/c1.jpg",
        "/assets/img/about/c2.jpg",
        "/assets/img/about/c3.jpg",
        "/assets/img/about/c4.jpg"
      ]
    },
    {
      id: "shomoukh-mouj",
      name: "Shomoukh Early Childhood Education Center – Al Mouj Campus",
      shortName: "Shomoukh ECE Al Mouj Campus",
      location: "The Walk, Al Mouj, Muscat - Oman",
      ages: "Ages 1 to 4 Years",
      curriculum: "Sustainable Innovation & Holistic Early Development",
      logo: "/assets/img/about/sis-nur-logo.jpg",
      website: "https://www.shomoukh.com/",
      websiteLabel: "www.shomoukh.com",
      tagline: "High-Class Early Childhood Education Benchmark in MENA",
      description: "The Shomoukh for Early Childhood Education at Al Mouj Campus is a high-class early childhood education center of excellence, setting the benchmark for preschools across the MENA region. Renowned for its award-winning sustainable initiatives and innovative educational programs, it provides a world-class learning environment tailored to foster creativity, growth, and holistic development. Serving a diverse student body, the center is committed to preparing young learners for a bright future through its cutting-edge curriculum and dedication to excellence. Families trust Al Shomoukh Nursery for its unmatched standards, making it a leader in early childhood education across the region.",
      gallery: [
        "/assets/img/about/m1.jpg",
        "/assets/img/about/m2.jpg",
        "/assets/img/about/m3.jpg",
        "/assets/img/about/m4.jpg"
      ]
    }
  ] as School[],
  operational: {
    heroTitle: "Smarter Educational Services",
    heroSubtitle: "Complete School Operations, Turnkey Management & Franchise Expansion",
    intro: "Global Education Services Company (GES®) is a global education management organization that manages schools in both the private and public sectors around the world. We offer a number of management options including complete management, license agreements, public-private partnerships, and charter school agreements. Schools signing a complete management agreement with GES benefit from a wide range of educational products and services designed for Pre-K/K-12 schools.",
    bannerImage: "/assets/img/operational/banner.jpg",
    models: [
      {
        id: "private-schools",
        title: "Private Schools",
        image: "/assets/img/operational/s-1.jpg",
        description: "GES operates premium-quality Pre-K/K-12 schools and training institutes, designed to meet and exceed international academic standards. With a focus on excellence, these institutions undergo rigorous internal and external quality assurance reviews to maintain a globally competitive edge. GES fosters a student-centered approach that prioritizes innovation, high expectations, and holistic development, ensuring each school meets the highest benchmarks in education."
      },
      {
        id: "ppp",
        title: "Public-Private Partnerships (PPP)",
        image: "/assets/img/operational/s-2.jpg",
        description: "As a leader in public-private partnerships, GES leverages Oman’s newly adopted PPP framework to create impactful opportunities for educational investment and development. These initiatives drive national economic diversification, promote innovation in education, and support the delivery of high-quality learning experiences aligned with global standards."
      },
      {
        id: "licensed-schools",
        title: "Licensed Schools",
        image: "/assets/img/operational/s-3.jpg",
        description: "The GES licensing program enables schools to integrate its proven operational model and intellectual property within their unique management structure. This partnership ensures schools benefit from GES’s expertise while retaining their distinct identity, fostering innovation and excellence in education delivery."
      },
      {
        id: "master-franchise",
        title: "Master Franchise",
        image: "/assets/img/operational/s-4.jpg",
        description: "GES offers exclusive master franchise opportunities, granting partners the authority to manage all franchising activities within a specified territory or country. This model ensures consistent quality, operational excellence, and the strategic expansion of the GES brand while empowering franchisees to lead in their respective regions."
      }
    ] as OperationalModel[],
    managementModules: [
      {
        icon: "/assets/img/operational/o-1.png",
        title: "Aligned Curriculum",
        description: "Fully aligned curriculum with country standards and international frameworks."
      },
      {
        icon: "/assets/img/operational/o-2.png",
        title: "Advanced Software Systems",
        description: "Advanced software systems to enhance operational and institutional efficiency."
      },
      {
        icon: "/assets/img/operational/o-6.png",
        title: "Academic Quality Control",
        description: "Ongoing academic quality control through computerized monitoring and reviews."
      },
      {
        icon: "/assets/img/operational/o-3.png",
        title: "Concept-Focused Materials",
        description: "Concept-focused, well-researched educational materials and curricular tools."
      },
      {
        icon: "/assets/img/operational/o-4.png",
        title: "Recruitment & Development",
        description: "Recruitment and continuous professional development for world-class educators."
      },
      {
        icon: "/assets/img/operational/o-5.png",
        title: "Cutting-Edge R&D",
        description: "Cutting-edge research and development methods designed to optimize learning results."
      },
      {
        icon: "/assets/img/operational/o-7.png",
        title: "Business Management Services",
        description: "Extensive business management, governance, and institutional support services."
      },
      {
        icon: "/assets/img/operational/o-8.png",
        title: "Regional Administrator Events",
        description: "Participation in annual regional events, symposiums, and administrator conferences."
      },
      {
        icon: "/assets/img/operational/o-9.png",
        title: "Professional Team Visits",
        description: "Regular visits from experienced teams of education and business professionals."
      },
      {
        icon: "/assets/img/operational/o-10.png",
        title: "Network Synergy",
        description: "Active networking opportunities with peer institutions across the GES Network."
      }
    ] as ManagementModule[]
  },
  partnerships: {
    heroTitle: "Be a Partner with GES",
    heroSubtitle: "Strategic Educational Investment, Campus Incubation & Institutional Growth",
    intro: "GES is an educational management organization that manages schools and learning centers in both the private and public sectors. We offer a number of management options including complete management, license agreements, public-private partnerships, and franchise.",
    invitation: "If you are interested in bringing a GES operational model in your area, please contact us at info@ges.om.",
    bgImage: "/assets/img/partners/partner-bg.jpg",
    supportStatement: "GES have the experience needed in different markets to develop and operate educational institutions. Our experienced and trained team will always be available for training and support as well as liaison with our international links to make sure that the highest standards are being utilized.",
    accreditations: [
      {
        name: "Cognia Global Accreditation",
        logo: "/assets/img/partners/p-1.jpg",
        type: "Accreditation Body",
        description: "Prestigious US-based global accreditation ensuring rigorous instructional excellence and institutional effectiveness across all K-12 grades."
      },
      {
        name: "Educational Collaborative for International Schools (ECIS)",
        logo: "/assets/img/partners/p-2.jpg",
        type: "Global Membership",
        description: "Vibrant global network of educators fostering professional mastery, innovative pedagogy, and international governance."
      },
      {
        name: "Ministry of Social Development",
        logo: "/assets/img/partners/p-3.jpg",
        type: "Government Partner",
        description: "Supervisory authority in the Sultanate of Oman ensuring compliance with top standards for nurseries and early childhood centers."
      },
      {
        name: "Ministry of Education - Sultanate of Oman",
        logo: "/assets/img/partners/p-4.jpg",
        type: "Regulatory Authority",
        description: "National ministry guiding educational compliance, national curriculum integration, and academic standards."
      },
      {
        name: "Oman Vision 2040 Alignment",
        logo: "/assets/img/partners/p-5.jpg",
        type: "National Vision",
        description: "Strategic alignment with Oman Vision 2040 pillar for Inclusive Education, Lifelong Learning, and Scientific Research."
      }
    ] as PartnerItem[]
  },
  careers: {
    heroTitle: "Careers at GES Network",
    heroSubtitle: "Empower Future Generations with Oman's Premier Education Group",
    intro: [
      "GES is an internationally accredited education management organization, ensuring compliance with global best practices in quality assurance and continuous advancement. We manage schools, offering complete management, licensing agreements, public-private partnerships, and charter school agreements.",
      "A high-caliber academic and administrative team is key to our success. GES recruits top professionals globally and provides continuous professional development to maintain the highest standards. A structured appraisal system ensures accountability, mentoring, and performance-based career growth.",
      "Through strategic leadership and internationally recognized best practices, GES empowers institutions to deliver world-class education and shape the future of learning."
    ],
    steps: [
      {
        step: 1,
        title: "Online Application",
        description: "You complete the online application form and submit your curriculum vitae and credentials.",
        icon: "/assets/img/careers/step-1.png"
      },
      {
        step: 2,
        title: "Resume Review",
        description: "Our talent acquisition team thoroughly reviews your qualifications, certifications, and experience.",
        icon: "/assets/img/careers/step-2.png"
      },
      {
        step: 3,
        title: "Job Fit Assessment",
        description: "We assess your profile against the pedagogical, cultural, and leadership standards of GES.",
        icon: "/assets/img/careers/step-3.png"
      },
      {
        step: 4,
        title: "Preliminary Interview",
        description: "Selected candidates are invited for an initial interview with our academic or operational leaders.",
        icon: "/assets/img/careers/step-4.png"
      },
      {
        step: 5,
        title: "Second Interview",
        description: "In-depth panel interview including lesson demonstration or operational case presentation.",
        icon: "/assets/img/careers/step-5.png"
      },
      {
        step: 6,
        title: "Job Offer",
        description: "Formal job offer and onboarding package made to the successful candidate.",
        icon: "/assets/img/careers/step-6.png"
      }
    ] as CareerStep[]
  },
  news: [
    {
      id: 1,
      title: "Partnership Agreement Signed in Oman",
      date: "May 7, 2019",
      dateIso: "2019-05-07",
      author: "Times of Oman",
      category: "Partnerships",
      image: "/assets/img/news/news-1.png",
      url: "https://timesofoman.com/article/1254924/oman/education-partnership-agreement-signed",
      excerpt: "Global Education Services signs landmark strategic educational partnership agreement to expand quality K-12 learning provision in Oman.",
      fullBody: [
        "MUSCAT: Global Education Services (GES) signed a milestone educational partnership agreement aimed at expanding premium academic infrastructure and enhancing K-12 schooling opportunities throughout the Sultanate.",
        "Under the agreement, GES will deploy its proprietary educational management models, advanced curriculum monitoring tools, and teacher professional development programs across partner institutions.",
        "The leadership highlighted that the agreement reinforces GES's mission to deliver internationally accredited education rooted in local Omani cultural heritage."
      ]
    },
    {
      id: 2,
      title: "Global Stamp of Approval for GES",
      date: "August 15, 2021",
      dateIso: "2021-08-15",
      author: "Times News Service",
      category: "Accreditation",
      image: "/assets/img/news/19.jpg",
      url: "https://timesofoman.com/article/105452-omani-educational-institution-gets-global-stamp-of-approval",
      excerpt: "GES Quality Education achieves prestigious Cognia Global Accreditation, demonstrating world-class instructional and institutional benchmarks.",
      fullBody: [
        "MUSCAT: Global Education Services (GES) has earned full accreditation from Cognia, a globally recognized nonprofit organization dedicated to educational improvement.",
        "Cognia's rigorous evaluation commended GES for its commitment to high academic rigor, systemic quality control, and progressive learning environments.",
        "This accreditation cements GES's position as a benchmark institution for private schooling in Oman and the wider GCC region."
      ]
    },
    {
      id: 3,
      title: "اعتراف منظمة كوجنيا الأمريكية بـ GES",
      date: "August 12, 2021",
      dateIso: "2021-08-12",
      author: "مسقط - الشبيبة",
      category: "Accreditation (Arabic)",
      image: "/assets/img/news/19.jpg",
      url: "https://shabiba.com/article/162472",
      excerpt: "حصلت مؤسسة الخدمات التعليمية العالمية (GES) على الاعتماد الأكاديمي الدولي من منظمة كوجنيا الأمريكية الرائدة عالمياً في جودة التعليم.",
      fullBody: [
        "مسقط - الشبيبة: في إنجاز تعليمي وطني بارز، حازت مؤسسة الخدمات التعليمية العالمية (GES Quality Education) على شهادة الاعتماد الأكاديمي الشامل من منظمة كوجنيا الأمريكية.",
        "ويأتي هذا الاعتراف الدولي بعد تقييم دقيق وشامل لكافة البرامج والمناهج والمعايير التعليمية والإدارية المتبعة في مدارس ومراكز المجموعة بسلطنة عمان.",
        "وأكد رئيس مجلس الإدارة أن هذا الإنجاز يعكس التزام المجموعة الدائم بالمساهمة الفاعلة في تحقيق مستهدفات رؤية عمان 2040 في قطاع التعليم والبحث العلمي."
      ]
    },
    {
      id: 4,
      title: "Alam Al-Iktisaad Awards 2022",
      date: "October 2, 2022",
      dateIso: "2022-10-02",
      author: "Zawya Press Release",
      category: "Awards & Recognition",
      image: "/assets/img/news/20.jpg",
      url: "https://shabiba.com/article/162472",
      excerpt: "GES recognized at the prestigious Alam Al-Iktisaad Awards for pioneering contributions to private educational infrastructure in the Sultanate.",
      fullBody: [
        "MUSCAT: Global Education Services was honored at the annual Alam Al-Iktisaad Awards ceremony for its outstanding leadership and sustainable growth in the private education sector.",
        "The award acknowledged the group's visionary investments in modern educational facilities, adoption of early childhood frameworks, and focus on national capacity building."
      ]
    },
    {
      id: 5,
      title: "NCSI Receives Students from Al Shomoukh International School",
      date: "November 14, 2022",
      dateIso: "2022-11-14",
      author: "NCSI Oman",
      category: "Community & Fieldwork",
      image: "/assets/img/news/13.jpg",
      url: "https://timesofoman.com/",
      excerpt: "The National Centre for Statistics and Information welcomes students from SIPS for an immersive exploration of data science and national planning.",
      fullBody: [
        "MUSCAT: The National Centre for Statistics and Information (NCSI) hosted a delegation of senior students from Al Shomoukh International Private School (SIPS).",
        "Students attended interactive presentations on statistical analysis, economic indicators, and the digital tools used to support Oman Vision 2040 strategic planning."
      ]
    },
    {
      id: 6,
      title: "Al Shomoukh International School Holds a Lecture on Ethics and Manners",
      date: "December 5, 2022",
      dateIso: "2022-12-05",
      author: "SIPS Press",
      category: "Academics & Values",
      image: "/assets/img/news/15.jpg",
      url: "https://alshomoukh.com/",
      excerpt: "Interactive symposium emphasizing moral character, cultural heritage, and ethical leadership in contemporary youth development.",
      fullBody: [
        "SIPS organized a specialized moral education lecture focusing on the foundational values of respect, ethical citizenship, and Islamic traditions.",
        "The session brought together educators, parents, and community leaders to discuss character education in a digital era."
      ]
    },
    {
      id: 7,
      title: "The National Museum of Oman - School Visit",
      date: "January 18, 2023",
      dateIso: "2023-01-18",
      author: "GES Media",
      category: "Cultural Heritage",
      image: "/assets/img/news/8.jpg",
      url: "https://alshomoukh.com/",
      excerpt: "Students delve into Oman's rich maritime, architectural, and civilizational history on an experiential visit to the National Museum.",
      fullBody: [
        "As part of the experiential learning curriculum, students explored Oman's historical galleries, maritime heritage, and archaeological treasures at the National Museum in Muscat.",
        "Hands-on workshops were conducted by museum curators, connecting historical milestones with academic historical inquiries."
      ]
    },
    {
      id: 8,
      title: "Arab Child Conferences & Curriculum Development",
      date: "March 22, 2023",
      dateIso: "2023-03-22",
      author: "GES Editorial",
      category: "Pedagogy",
      image: "/assets/img/news/banner.png",
      url: "https://ges.om/news",
      excerpt: "GES academic specialists present research on early childhood development and modern pedagogical frameworks at regional education summits.",
      fullBody: [
        "Specialists from Shomoukh Early Childhood Education Centers presented research on Reggio Emilia pedagogical adaptation in the Gulf region.",
        "The conference commended GES for blending nature-inspired child inquiry with local language acquisition and emotional resilience."
      ]
    }
  ] as NewsArticle[],
  stories: [
    {
      id: "grad-2024",
      title: "Ceremony Class of 2024 SIPS",
      subtitle: "Graduation Ceremony Celebrating the Class of 2024",
      thumb: "/assets/img/video-thumb-1.jpg",
      embedUrl: "https://www.youtube.com/embed/GDsGSM-k0Yg",
      category: "Graduation"
    },
    {
      id: "ece-ceremony",
      title: "Shomoukh Early Childhood Education Ceremony",
      subtitle: "Annual Childhood Education Celebration & Milestones",
      thumb: "/assets/img/video-thumb-2.jpg",
      embedUrl: "https://www.youtube.com/embed/X8Yx03ZguBY",
      category: "Early Years"
    },
    {
      id: "sports-day-2024",
      title: "Sports Day 2024 SIPS",
      subtitle: "Athletic Excellence, Teamwork & Sportsmanship",
      thumb: "/assets/img/video-thumb-3.jpg",
      embedUrl: "https://www.youtube.com/embed/IFpNJ7AsHWc",
      category: "Athletics"
    },
    {
      id: "national-day",
      title: "The 48th Oman National Day Celebration",
      subtitle: "Honoring the Sultanate's Heritage & Vision",
      thumb: "/assets/img/video-thumb-4.jpg",
      embedUrl: "https://www.youtube.com/embed/GDsGSM-k0Yg",
      category: "Heritage"
    },
    {
      id: "art-exhibition",
      title: "SIPS Student Art Exhibition",
      subtitle: "Showcasing Creative Expression & Visual Arts",
      thumb: "/assets/img/video-thumb-7.jpg",
      embedUrl: "https://www.youtube.com/embed/X8Yx03ZguBY",
      category: "Arts"
    },
    {
      id: "student-stories",
      title: "Inside GES Student Stories",
      subtitle: "Personal Journeys of Growth and Discovery",
      thumb: "/assets/img/video-thumb-6.jpg",
      embedUrl: "https://www.youtube.com/embed/IFpNJ7AsHWc",
      category: "Community"
    }
  ] as VideoStory[],
  contact: {
    organization: "Global Education Services L.L.C. (GES Quality Education)",
    address: "Airport Heights, Muscat, Sultanate of Oman",
    poBox: "P.O. Box 1756, Postal Code 111, Airport Heights, Muscat",
    phone: "+968 24554422",
    phoneClean: "+96824554422",
    email: "info@ges.om",
    workingHours: "Sunday – Thursday: 7:30 AM – 3:30 PM (Closed Friday & Saturday)",
    geo: {
      lat: 23.6302,
      lng: 58.1937
    },
    socials: {
      facebook: "https://www.facebook.com/GES-Global-Education-Services-109478385115626",
      instagram: "https://www.instagram.com/ges.education/",
      twitter: "https://twitter.com/GES_education",
      linkedin: "https://www.linkedin.com"
    }
  },
  downloads: [
    {
      title: "GES Corporate Brochure",
      subtitle: "Complete institutional overview, leadership, operational models, and school network profile.",
      path: "/assets/downloads/GES Corporate Broucher.pdf",
      format: "PDF",
      size: "Official Brochure"
    },
    {
      title: "Empowering Minds Through Excellence - Awards & Impact",
      subtitle: "Recognitions, academic benchmarks, and international quality assurances.",
      path: "/assets/downloads/awards.pdf",
      format: "PDF",
      size: "Awards Folio"
    }
  ]
};

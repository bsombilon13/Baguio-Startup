

import { Organization, Startup, Event, Opportunity, Resource, NewsItem } from './types';

export const ecosystemOrgs: Organization[] = [
  {
    id: '19hundred',
    name: '19Hundred Work Space',
    description: 'A conducive coworking space and study hub in Baguio City.',
    logoUrl: 'https://graph.facebook.com/19hundredwork.space/picture?type=large',
    facebookUrl: 'https://www.facebook.com/19hundredwork.space/',
    types: ['Workspace', 'MSME']
  },
  {
    id: 'adsg',
    name: 'ADSG Baguio',
    description: 'A dedicated group fostering growth and design in the Baguio region.',
    logoUrl: 'https://graph.facebook.com/adsgbaguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/adsgbaguio',
    types: ['Community']
  },
  {
    id: 'awma',
    name: 'AWMA SLU-SC',
    description: 'Academic and student organization focusing on management and accountancy at SLU.',
    logoUrl: 'https://graph.facebook.com/AWMA.SLUSC/picture?type=large',
    facebookUrl: 'https://www.facebook.com/AWMA.SLUSC',
    websiteUrl: 'https://www.slu.edu.ph',
    types: ['Academe']
  },
  {
    id: 'bsn',
    name: 'Baguio Startup Network',
    description: 'The central hub for the mountain region\'s startup ecosystem.',
    logoUrl: 'https://graph.facebook.com/baguiostartup/picture?type=large',
    facebookUrl: 'https://www.facebook.com/baguiostartup/',
    types: ['Community']
  },
  {
    id: 'beesnest',
    name: "Bee's Nest",
    description: 'A collaborative workspace for freelancers, students, and startups.',
    logoUrl: 'https://graph.facebook.com/beesnest.bgo/picture?type=large',
    facebookUrl: 'https://www.facebook.com/beesnest.bgo/',
    types: ['Workspace', 'MSME']
  },
  {
    id: 'boslay',
    name: 'Boslay Arts & Crafts',
    description: 'Showcasing local artistry and traditional crafts from the mountains.',
    logoUrl: 'https://graph.facebook.com/boslayartsandcrafts/picture?type=large',
    facebookUrl: 'https://www.facebook.com/boslayartsandcrafts',
    types: ['MSME']
  },
  {
    id: 'car-iidb',
    name: 'CAR IIDB DICT',
    description: 'ICT Industry Development Bureau - Cordillera.',
    logoUrl: 'https://graph.facebook.com/car.iidb.dict/picture?type=large',
    facebookUrl: 'https://www.facebook.com/car.iidb.dict',
    websiteUrl: 'https://dict.gov.ph',
    types: ['Government']
  },
  {
    id: 'cegp',
    name: 'CEGP Cordillera',
    description: 'College Editors Guild of the Philippines - Cordillera Chapter.',
    logoUrl: 'https://graph.facebook.com/cegpcordi/picture?type=large',
    facebookUrl: 'https://www.facebook.com/cegpcordi',
    types: ['Non-Profit']
  },
  {
    id: 'cmo',
    name: 'CMO Baguio MITD',
    description: 'City Mayor’s Office - Management Information & Technology Division.',
    logoUrl: 'https://graph.facebook.com/cmobaguio.mitd/picture?type=large',
    facebookUrl: 'https://www.facebook.com/cmobaguio.mitd',
    websiteUrl: 'https://www.baguio.gov.ph',
    types: ['Government']
  },
  {
    id: 'csda',
    name: 'Cordillera School of Digital Arts',
    description: 'A specialized institution dedicated to digital arts, animation, and multimedia education.',
    logoUrl: 'https://graph.facebook.com/CordilleraSchoolofDigitalArts/picture?type=large',
    facebookUrl: 'https://www.facebook.com/CordilleraSchoolofDigitalArts',
    types: ['Creatives', 'Academe']
  },
  {
    id: 'csc',
    name: 'Cordillera Studies Center',
    description: 'Research center dedicated to the preservation and study of Cordilleran culture and history.',
    logoUrl: 'https://graph.facebook.com/cordistudiescenter/picture?type=large',
    facebookUrl: 'https://www.facebook.com/cordistudiescenter',
    websiteUrl: 'https://csc.upb.edu.ph',
    types: ['Academe']
  },
  {
    id: 'cyc',
    name: 'Cordillera Youth Center',
    description: 'A youth-led organization advocating for indigenous peoples’ rights and welfare.',
    logoUrl: 'https://graph.facebook.com/cordilleranyouthcenter/picture?type=large',
    facebookUrl: 'https://www.facebook.com/cordilleranyouthcenter',
    types: ['Non-Profit']
  },
  {
    id: 'dict-car',
    name: 'DICT CAR',
    description: 'Department of Information and Communications Technology - Cordillera Administrative Region.',
    logoUrl: 'https://graph.facebook.com/dict.car/picture?type=large',
    facebookUrl: 'https://www.facebook.com/dict.car',
    websiteUrl: 'https://dict.gov.ph',
    types: ['Government']
  },
  {
    id: 'dict-ilcdb',
    name: 'DICT Cordillera ILCDB',
    description: 'ICT Literacy and Competency Development Bureau.',
    logoUrl: 'https://graph.facebook.com/dict.cordillera.ilcdb/picture?type=large',
    facebookUrl: 'https://www.facebook.com/dict.cordillera.ilcdb',
    websiteUrl: 'https://dict.gov.ph',
    types: ['Government']
  },
  {
    id: 'dost',
    name: 'DOST CAR',
    description: 'Department of Science and Technology - Cordillera Administrative Region.',
    logoUrl: 'https://graph.facebook.com/dostcar.gov.ph/picture?type=large',
    facebookUrl: 'https://www.facebook.com/dostcar.gov.ph',
    websiteUrl: 'https://car.dost.gov.ph',
    types: ['Government']
  },
  {
    id: 'dti',
    name: 'DTI Cordillera Administrative Region',
    description: 'Department of Trade and Industry - Cordillera Administrative Region.',
    logoUrl: 'https://graph.facebook.com/DTI.CordilleraAdministrativeRegion/picture?type=large',
    facebookUrl: 'https://www.facebook.com/DTI.CordilleraAdministrativeRegion',
    websiteUrl: 'https://www.dti.gov.ph',
    types: ['Government']
  },
  {
    id: 'gdg',
    name: 'GDG Baguio',
    description: 'Google Developer Group Baguio - A community of developers and tech enthusiasts.',
    logoUrl: 'https://graph.facebook.com/gdgbaguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/gdgbaguio',
    websiteUrl: 'https://gdg.community.dev/gdg-baguio/',
    types: ['Community']
  },
  {
    id: 'gen96',
    name: 'Gen 96 Coworking',
    description: 'Modern coworking space offering flexible desks and meeting rooms.',
    logoUrl: 'https://graph.facebook.com/gen96coworking/picture?type=large',
    facebookUrl: 'https://www.facebook.com/gen96coworking/',
    types: ['Workspace', 'MSME']
  },
  {
    id: 'jbecp',
    name: 'JBECP UPB',
    description: 'Jardine Bloch Entrepreneurship Center Philippines - UP Baguio.',
    logoUrl: 'https://graph.facebook.com/jbecp.upb/picture?type=large',
    facebookUrl: 'https://www.facebook.com/jbecp.upb',
    types: ['Academe', 'Incubator', 'Workspace']
  },
  {
    id: 'kasiyana',
    name: 'Kasiyana Tulong Kabataan',
    description: 'Youth organization focused on community service and assistance.',
    logoUrl: 'https://graph.facebook.com/KasiyanaTulongKabataan/picture?type=large',
    facebookUrl: 'https://www.facebook.com/KasiyanaTulongKabataan',
    types: ['Non-Profit']
  },
  {
    id: 'kitkituy',
    name: 'Kitkituy Handicrafts',
    description: 'Local handicrafts and artisanal products.',
    logoUrl: 'https://graph.facebook.com/kitkituyhandicrafts/picture?type=large',
    facebookUrl: 'https://www.facebook.com/kitkituyhandicrafts',
    types: ['MSME']
  },
  {
    id: 'layad',
    name: 'Layad Di Kordilyera',
    description: 'Promoting Cordilleran culture and heritage.',
    logoUrl: 'https://graph.facebook.com/layaddikordilyera/picture?type=large',
    facebookUrl: 'https://www.facebook.com/layaddikordilyera',
    types: ['MSME']
  },
  {
    id: 'rise',
    name: 'Rise Benguet Project',
    description: 'Community initiatives for the development of Benguet province.',
    logoUrl: 'https://graph.facebook.com/risebenguetproject/picture?type=large',
    facebookUrl: 'https://www.facebook.com/risebenguetproject',
    types: ['Community']
  },
  {
    id: 'siglat',
    name: 'Siglat',
    description: 'Incubator program fostering innovation and startup growth.',
    logoUrl: 'https://graph.facebook.com/siglat/picture?type=large',
    facebookUrl: 'https://www.facebook.com/siglat',
    types: ['Incubator', 'Workspace']
  },
  {
    id: 'sirib',
    name: 'Sirib Center',
    description: 'Innovation and incubation center.',
    logoUrl: 'https://graph.facebook.com/siribcenter/picture?type=large',
    facebookUrl: 'https://www.facebook.com/siribcenter',
    types: ['Incubator', 'Workspace']
  },
  {
    id: 'tamawan',
    name: 'Tamawan Official',
    description: 'A venue for art and culture lovers in Baguio City.',
    logoUrl: 'https://graph.facebook.com/TamawanOfficial/picture?type=large',
    facebookUrl: 'https://www.facebook.com/TamawanOfficial',
    websiteUrl: 'https://www.tamawanvillage.com',
    types: ['MSME', 'Workspace', 'Creatives']
  },
  {
    id: 'taraki',
    name: 'Taraki CAR',
    description: 'Technology incubator and accelerator in CAR.',
    logoUrl: 'https://graph.facebook.com/tarakicar/picture?type=large',
    facebookUrl: 'https://www.facebook.com/tarakicar',
    types: ['Incubator', 'Workspace']
  },
  {
    id: 'tech4ed',
    name: 'Tech4ED DTC CAR',
    description: 'Technology for Education, Employment, Entrepreneurs, and Economic Development.',
    logoUrl: 'https://graph.facebook.com/tech4eddtc.car/picture?type=large',
    facebookUrl: 'https://www.facebook.com/tech4eddtc.car',
    websiteUrl: 'https://dict.gov.ph/tech4ed/',
    types: ['Government', 'Workspace']
  },
  {
    id: 'workhub',
    name: 'The Work Hub',
    description: 'Coworking space designed for productivity and collaboration.',
    logoUrl: 'https://graph.facebook.com/Theworkhubcoworkingspace/picture?type=large',
    facebookUrl: 'https://www.facebook.com/Theworkhubcoworkingspace/',
    types: ['Workspace', 'MSME']
  },
  {
    id: 'ucintto',
    name: 'UC InTTO',
    description: 'University of the Cordilleras Innovation and Technology Transfer Office.',
    logoUrl: 'https://graph.facebook.com/UCInTTO/picture?type=large',
    facebookUrl: 'https://www.facebook.com/UCInTTO',
    websiteUrl: 'https://www.uc-bcf.edu.ph',
    types: ['Incubator', 'Academe', 'Workspace']
  },
  {
    id: 'upbsilbi',
    name: 'UPB Silbi TBI',
    description: 'UP Baguio Technology Business Incubator.',
    logoUrl: 'https://graph.facebook.com/upbsilbitbi/picture?type=large',
    facebookUrl: 'https://www.facebook.com/upbsilbitbi',
    websiteUrl: 'https://upb.edu.ph',
    types: ['Incubator', 'Academe', 'Workspace']
  },
  {
    id: 'vivistop',
    name: 'Vivistop Baguio',
    description: 'Creative space and makerspace for youth and innovators.',
    logoUrl: 'https://graph.facebook.com/vivistop.baguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/vivistop.baguio',
    websiteUrl: 'https://www.vivistop.jp/baguio',
    types: ['Community', 'Workspace', 'Creatives']
  },
  {
    id: 'wtm',
    name: 'WTM Baguio',
    description: 'Women Techmakers Baguio.',
    logoUrl: 'https://graph.facebook.com/WTMBaguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/WTMBaguio',
    websiteUrl: 'https://developers.google.com/womentechmakers',
    types: ['Community']
  },
  {
    id: 'yesdes',
    name: 'YES DES CNS BSU',
    description: 'Young Entrepreneurs Society - Benguet State University.',
    logoUrl: 'https://graph.facebook.com/yes.des.cns.bsu/picture?type=large',
    facebookUrl: 'https://www.facebook.com/yes.des.cns.bsu',
    websiteUrl: 'http://www.bsu.edu.ph',
    types: ['Academe']
  },
  {
    id: 'yuman',
    name: 'Yuman Kaili',
    description: 'Community enterprise supporting local products.',
    logoUrl: 'https://graph.facebook.com/YumanKaili/picture?type=large',
    facebookUrl: 'https://www.facebook.com/YumanKaili',
    types: ['MSME']
  },
  {
    id: 'zwb',
    name: 'ZW Baguio',
    description: 'Advocating for a sustainable and zero-waste city.',
    logoUrl: 'https://graph.facebook.com/zwbaguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/zwbaguio',
    types: ['Non-Profit']
  }
];

export const activeStartups: Startup[] = [
  {
    id: 'heysuccess',
    name: 'Hey Success PH',
    description: 'Empowering students and young professionals with global opportunities.',
    logoUrl: 'https://graph.facebook.com/heysuccessph/picture?type=large',
    facebookUrl: 'https://www.facebook.com/heysuccessph',
    websiteUrl: 'https://heysuccess.com.ph',
    industry: 'Service',
    stage: 'Pre-Seed'
  },
  {
    id: 'parapo',
    name: 'Official Para Po',
    description: 'Innovative transport solutions for the modern commuter.',
    logoUrl: 'https://graph.facebook.com/officialparapo/picture?type=large',
    facebookUrl: 'https://www.facebook.com/officialparapo',
    industry: 'Tech',
    stage: 'Pre-Seed'
  },
  {
    id: 'srv',
    name: 'SRV Pinoy',
    description: 'Service-oriented community for Filipinos.',
    logoUrl: 'https://graph.facebook.com/srvpinoy/picture?type=large',
    facebookUrl: 'https://www.facebook.com/srvpinoy',
    websiteUrl: 'https://srvpinoy.com',
    industry: 'Service',
    stage: 'Pre-Seed'
  },
  {
    id: 'tarana',
    name: 'Tarana AI',
    description: 'AI solutions for modern problems.',
    logoUrl: 'https://graph.facebook.com/TaranaAI/picture?type=large',
    facebookUrl: 'https://www.facebook.com/TaranaAI',
    websiteUrl: 'https://www.tarana-ai.com/',
    industry: 'Tech',
    stage: 'Pre-Seed'
  },
  {
    id: 'tingi',
    name: 'Tingi Station',
    description: 'Refill station promoting zero-waste lifestyle.',
    logoUrl: 'https://graph.facebook.com/tingistation/picture?type=large',
    facebookUrl: 'https://www.facebook.com/tingistation',
    industry: 'E-commerce',
    stage: 'Pre-Seed'
  }
];

export const events: Event[] = [
  {
    id: 'evt-cloud-devops-basics',
    title: 'Cloud and DevOps Basics',
    date: new Date('2025-12-10T13:00:00'),
    location: 'Zoom',
    description: "This short course provides an introductory overview of cloud computing and DevOps principles. Participants will learn about service models (IaaS, PaaS, SaaS), the advantages of cloud adoption, and the collaborative practices that define DevOps. The session supports DICT's Cloud First Policy and aims to build foundational awareness of cloud infrastructure and deployment workflows relevant to government, business, and startups.",
    imageUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/587213315_872894341978383_6161694301616584039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHxtQjMgZxlEc9du-DDOCu7eDeTBQyd0xJ4N5MFDJ3TEqIrc0d5JZc94yhB-f_FeODohzjSDDuHGJbYf0PUvN5s&_nc_ohc=Yh7OUvhI9SkQ7kNvwEllq0w&_nc_oc=Adm5dsXPof2IcVDImQtCQ-cpEfWYwDsq0vfSoSti4YQOpocyrgcgR1hjMPt_bwrKnKk&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=4RKTUIxbBmiN-jfooC7a5w&oh=00_AfiBPjakYwG62qEhWxMMEJzQgQPvbH6zuTVbCY7tJfU8cg&oe=693395A4',
    tags: ['Workshop', 'Cloud', 'DevOps'],
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeInZn9y284wxk-tLtqMqyjl9gn4Hxl8nqLLwApRtzj6J2UGg/viewform',
    learnMoreLink: 'https://www.facebook.com/share/p/1DiWAXjLaw/'
  },
  {
    id: 'evt-data-analytics',
    title: 'Data Analytics & Visualization Essentials',
    date: new Date('2025-12-11T13:00:00'),
    location: 'Zoom',
    description: "This short course introduces participants to data analytics and visualization concepts used in decision-making, monitoring, and reporting. Participants will learn how to collect, interpret, and present data using accessible tools such as Excel or Google Sheets. The course aims to promote a culture of evidence-based decision-making in both public and private sectors.",
    imageUrl: 'https://scontent.fmnl42-1.fna.fbcdn.net/v/t39.30808-6/591137402_872940378640446_4885674274388250125_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7gLW7g8118UQ7kNvwGdlQtf&_nc_oc=Adlzz-2Ph6MI-rywT8ZKlijaf8TNnfeogIMl8gYZ8Fn-heuTAxfxFLf1kTOwRcyfLEo&_nc_zt=23&_nc_ht=scontent.fmnl42-1.fna&_nc_gid=Kl-5IabudQFAEKGjSZ8lMA&oh=00_AfnyQq0q33Yu_SDHwpzkRyIwSOdHi8GU-tTiOuAGNk3ZJw&oe=69356554',
    tags: ['Workshop', 'Data', 'Analytics'],
    link: 'https://bit.ly/DAVE-Register',
    learnMoreLink: 'https://www.facebook.com/share/p/17fFd7Kq9Q/'
  }
];

export const communityNews: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Cordillera Representative Ausculate, Set for National Spotlight at PSC10',
    date: 'Dec 03, 2025',
    excerpt: 'Team Auscultate is set to represent the Cordillera Administrative Region at the Philippine Startup Challenge 10, bringing with them courage, creativity, and an unshakable innovative spirit on December 3-4, 2025 at Clark, Pampanga. As The Last Seven steps onto the national spotlight, we send you off with pride, love, and confidence. To the mentors, colleagues, startup community, and supporters who gathered to cheer them, your energy fuels their drive to showcase what Cordilleran ingenuity can achieve this PSC10. Best of luck, Team Cordillera! May your ideas resonate, your confidence shine, and your passion lead the way. Go out there, stand tall! We are proud of you!',
    imageUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/591610947_873609975240153_4085509653829870516_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFUhRuLrgSz2yxSXuWeOwAu51izX57cBAHnWLNfntwEAdoiYWyU7ozMtN6abbX4SU-f_3NDyFLMkSqJnOTrNEpP&_nc_ohc=yChRa48amrgQ7kNvwFNvT-3&_nc_oc=AdmZHBF3t0y46f3RZg_s9igYB9auSuw12bkkIebMDSqbnDnKP2XeZ4GmV8jlj9mRkUY&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=lvk6KqrUwOxz5twPOJx8pg&oh=00_AfmlEYGWRgS8HFu604m0QYcPfxPG4OYdsNRBhlRxrSFK0A&oe=69343A68',
    link: 'https://www.facebook.com/photo/?fbid=873609971906820&set=a.131590669442091',
    source: 'Facebook'
  }
];

export const opportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Innovation Grant 2024',
    organization: 'Dept of Science & Tech',
    amount: '₱500,000',
    deadline: 'Oct 30, 2024',
    type: 'Grant',
    description: 'Equity-free funding for hardware startups focusing on agriculture.',
  },
  {
    id: '2',
    title: 'Seed Round Open Call',
    organization: 'North Star VC',
    amount: '$50,000 - $100,000',
    deadline: 'Rolling',
    type: 'Investment',
    description: 'Looking for early-stage SaaS platforms with traction.',
  },
  {
    id: '3',
    title: 'Baguio Incubation Program',
    organization: 'Baguio Startup',
    amount: 'Mentorship',
    deadline: 'Nov 15, 2024',
    type: 'Accelerator',
    description: 'A 3-month intensive program to get your idea to MVP.',
  }
];

export const resources: Resource[] = [
  {
    id: 'r1',
    title: 'CAR Ecosystem Mapping Report 2022-2025',
    type: 'Report',
    description: 'A comprehensive mapping of the startup ecosystem in the Cordillera Administrative Region.',
    format: 'WEB',
    size: 'N/A',
    url: 'https://heyzine.com/flip-book/7acb10b7ce.html#page/1'
  },
  {
    id: 'r2',
    title: 'Research and Innovation Ordinance of the City of Baguio',
    type: 'Government',
    description: 'Ordinance providing incentives and support for research, innovation, and creative endeavors in the City of Baguio.',
    format: 'WEB',
    size: 'N/A',
    url: 'https://citycouncil.baguio.gov.ph/ordinances/j4w5Dgzx'
  },
  {
    id: 'r3',
    title: 'Philippine Startup Ecosystem Report 2025 by Gobi Partners',
    type: 'Report',
    description: 'Gobi Partners launches Philippine Startup Ecosystem Report 2025: The Next Wave of Innovation.',
    format: 'WEB',
    size: 'N/A',
    url: 'https://gobicore.vc/gobi-partners-launches-philippine-startup-ecosystem-report-2025-the-next-wave-of-innovation/?fbclid=IwY2xjawOaz6FleHRuA2FlbQIxMABicmlkETFUSEFMUXZUT2dOanpFM2Mxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHj9p06uUVAyV9q_9Kpj3U-3e_aZYcL_SQKFsyyZrU9rK4QDkbBjdrLUIdyAk_aem_RDT5QMOuiKoF_EVRa14IEw'
  },
  // Websites
  {
    id: 'web-luma',
    title: 'Luma',
    type: 'Website',
    description: 'Delightful event pages and community management tools.',
    format: 'Event Mgmt',
    size: 'N/A',
    url: 'https://luma.com/'
  },
  {
    id: 'web-trello',
    title: 'Trello',
    type: 'Website',
    description: 'Visual project management and collaboration tool.',
    format: 'Project Mgmt',
    size: 'N/A',
    url: 'https://trello.com/'
  },
  {
    id: 'web-monday',
    title: 'Monday.com',
    type: 'Website',
    description: 'Work operating system to manage projects and workflows.',
    format: 'Project Mgmt',
    size: 'N/A',
    url: 'https://monday.com/'
  },
  {
    id: 'web-clickup',
    title: 'ClickUp',
    type: 'Website',
    description: 'All-in-one productivity platform for tasks, docs, and goals.',
    format: 'Project Mgmt',
    size: 'N/A',
    url: 'https://clickup.com/'
  },
  {
    id: 'web-ilovepdf',
    title: 'iLovePDF',
    type: 'Website',
    description: 'Free online tools to merge, split, compress, and convert PDFs.',
    format: 'Utilities',
    size: 'N/A',
    url: 'https://www.ilovepdf.com/'
  },
  {
    id: 'web-notebooklm',
    title: 'NotebookLM',
    type: 'Website',
    description: 'AI-powered research assistant and note-taking tool by Google.',
    format: 'AI Research',
    size: 'N/A',
    url: 'http://notebooklm.google.com/'
  },
  {
    id: 'web-canva',
    title: 'Canva',
    type: 'Website',
    description: 'Graphic design platform for social media, presentations, and more.',
    format: 'Design',
    size: 'N/A',
    url: 'https://www.canva.com/'
  },
  {
    id: 'web-toools',
    title: 'Toools.design',
    type: 'Website',
    description: 'Archive of top-notch design resources and tools.',
    format: 'Design',
    size: 'N/A',
    url: 'https://www.toools.design/'
  },
  {
    id: 'web-freepik',
    title: 'Freepik',
    type: 'Website',
    description: 'High-quality photos, vectors, videos, and PSD files.',
    format: 'Stock Assets',
    size: 'N/A',
    url: 'https://www.freepik.com/'
  },
  {
    id: 'web-figma',
    title: 'Figma',
    type: 'Website',
    description: 'Collaborative interface design tool.',
    format: 'UI/UX Design',
    size: 'N/A',
    url: 'https://www.figma.com/'
  },
  {
    id: 'web-github',
    title: 'GitHub',
    type: 'Website',
    description: 'Platform for hosting, collaboration, and version control.',
    format: 'Development',
    size: 'N/A',
    url: 'https://github.com/'
  }
];
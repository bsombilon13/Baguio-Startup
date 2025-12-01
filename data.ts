
import { Organization, Startup, Event, Opportunity, Resource } from './types';

export const ecosystemOrgs: Organization[] = [
  {
    id: 'adsg',
    name: 'ADSG Baguio',
    description: 'A dedicated group fostering growth and design in the Baguio region.',
    logoUrl: 'https://graph.facebook.com/adsgbaguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/adsgbaguio',
    type: 'Community'
  },
  {
    id: 'awma',
    name: 'AWMA SLU-SC',
    description: 'Academic and student organization focusing on management and accountancy at SLU.',
    logoUrl: 'https://graph.facebook.com/AWMA.SLUSC/picture?type=large',
    facebookUrl: 'https://www.facebook.com/AWMA.SLUSC',
    websiteUrl: 'https://www.slu.edu.ph',
    type: 'Academe'
  },
  {
    id: 'boslay',
    name: 'Boslay Arts & Crafts',
    description: 'Showcasing local artistry and traditional crafts from the mountains.',
    logoUrl: 'https://graph.facebook.com/boslayartsandcrafts/picture?type=large',
    facebookUrl: 'https://www.facebook.com/boslayartsandcrafts',
    type: 'MSME'
  },
  {
    id: 'car-iidb',
    name: 'CAR IIDB DICT',
    description: 'ICT Industry Development Bureau - Cordillera.',
    logoUrl: 'https://graph.facebook.com/car.iidb.dict/picture?type=large',
    facebookUrl: 'https://www.facebook.com/car.iidb.dict',
    websiteUrl: 'https://dict.gov.ph',
    type: 'Government'
  },
  {
    id: 'cegp',
    name: 'CEGP Cordillera',
    description: 'College Editors Guild of the Philippines - Cordillera Chapter.',
    logoUrl: 'https://graph.facebook.com/cegpcordi/picture?type=large',
    facebookUrl: 'https://www.facebook.com/cegpcordi',
    type: 'Non-Profit'
  },
  {
    id: 'cmo',
    name: 'CMO Baguio MITD',
    description: 'City Mayor’s Office - Management Information & Technology Division.',
    logoUrl: 'https://graph.facebook.com/cmobaguio.mitd/picture?type=large',
    facebookUrl: 'https://www.facebook.com/cmobaguio.mitd',
    websiteUrl: 'https://www.baguio.gov.ph',
    type: 'Government'
  },
  {
    id: 'csc',
    name: 'Cordillera Studies Center',
    description: 'Research center dedicated to the preservation and study of Cordilleran culture and history.',
    logoUrl: 'https://graph.facebook.com/cordistudiescenter/picture?type=large',
    facebookUrl: 'https://www.facebook.com/cordistudiescenter',
    websiteUrl: 'https://csc.upb.edu.ph',
    type: 'Academe'
  },
  {
    id: 'cyc',
    name: 'Cordillera Youth Center',
    description: 'A youth-led organization advocating for indigenous peoples’ rights and welfare.',
    logoUrl: 'https://graph.facebook.com/cordilleranyouthcenter/picture?type=large',
    facebookUrl: 'https://www.facebook.com/cordilleranyouthcenter',
    type: 'Non-Profit'
  },
  {
    id: 'dict-car',
    name: 'DICT CAR',
    description: 'Department of Information and Communications Technology - Cordillera Administrative Region.',
    logoUrl: 'https://graph.facebook.com/dict.car/picture?type=large',
    facebookUrl: 'https://www.facebook.com/dict.car',
    websiteUrl: 'https://dict.gov.ph',
    type: 'Government'
  },
  {
    id: 'dict-ilcdb',
    name: 'DICT Cordillera ILCDB',
    description: 'ICT Literacy and Competency Development Bureau.',
    logoUrl: 'https://graph.facebook.com/dict.cordillera.ilcdb/picture?type=large',
    facebookUrl: 'https://www.facebook.com/dict.cordillera.ilcdb',
    websiteUrl: 'https://dict.gov.ph',
    type: 'Government'
  },
  {
    id: 'dost',
    name: 'DOST CAR',
    description: 'Department of Science and Technology - Cordillera Administrative Region.',
    logoUrl: 'https://graph.facebook.com/dostcar.gov.ph/picture?type=large',
    facebookUrl: 'https://www.facebook.com/dostcar.gov.ph',
    websiteUrl: 'https://car.dost.gov.ph',
    type: 'Government'
  },
  {
    id: 'dti',
    name: 'DTI Cordillera Administrative Region',
    description: 'Department of Trade and Industry - Cordillera Administrative Region.',
    logoUrl: 'https://graph.facebook.com/DTI.CordilleraAdministrativeRegion/picture?type=large',
    facebookUrl: 'https://www.facebook.com/DTI.CordilleraAdministrativeRegion',
    websiteUrl: 'https://www.dti.gov.ph',
    type: 'Government'
  },
  {
    id: 'gdg',
    name: 'GDG Baguio',
    description: 'Google Developer Group Baguio - A community of developers and tech enthusiasts.',
    logoUrl: 'https://graph.facebook.com/gdgbaguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/gdgbaguio',
    websiteUrl: 'https://gdg.community.dev/gdg-baguio/',
    type: 'Community'
  },
  {
    id: 'jbecp',
    name: 'JBECP UPB',
    description: 'Jardine Bloch Entrepreneurship Center Philippines - UP Baguio.',
    logoUrl: 'https://graph.facebook.com/jbecp.upb/picture?type=large',
    facebookUrl: 'https://www.facebook.com/jbecp.upb',
    type: 'Academe'
  },
  {
    id: 'kasiyana',
    name: 'Kasiyana Tulong Kabataan',
    description: 'Youth organization focused on community service and assistance.',
    logoUrl: 'https://graph.facebook.com/KasiyanaTulongKabataan/picture?type=large',
    facebookUrl: 'https://www.facebook.com/KasiyanaTulongKabataan',
    type: 'Non-Profit'
  },
  {
    id: 'kitkituy',
    name: 'Kitkituy Handicrafts',
    description: 'Local handicrafts and artisanal products.',
    logoUrl: 'https://graph.facebook.com/kitkituyhandicrafts/picture?type=large',
    facebookUrl: 'https://www.facebook.com/kitkituyhandicrafts',
    type: 'MSME'
  },
  {
    id: 'layad',
    name: 'Layad Di Kordilyera',
    description: 'Promoting Cordilleran culture and heritage.',
    logoUrl: 'https://graph.facebook.com/layaddikordilyera/picture?type=large',
    facebookUrl: 'https://www.facebook.com/layaddikordilyera',
    type: 'MSME'
  },
  {
    id: 'rise',
    name: 'Rise Benguet Project',
    description: 'Community initiatives for the development of Benguet province.',
    logoUrl: 'https://graph.facebook.com/risebenguetproject/picture?type=large',
    facebookUrl: 'https://www.facebook.com/risebenguetproject',
    type: 'Community'
  },
  {
    id: 'siglat',
    name: 'Siglat',
    description: 'Incubator program fostering innovation and startup growth.',
    logoUrl: 'https://graph.facebook.com/siglat/picture?type=large',
    facebookUrl: 'https://www.facebook.com/siglat',
    type: 'Incubator'
  },
  {
    id: 'sirib',
    name: 'Sirib Center',
    description: 'Innovation and incubation center.',
    logoUrl: 'https://graph.facebook.com/siribcenter/picture?type=large',
    facebookUrl: 'https://www.facebook.com/siribcenter',
    type: 'Incubator'
  },
  {
    id: 'tamawan',
    name: 'Tamawan Official',
    description: 'A venue for art and culture lovers in Baguio City.',
    logoUrl: 'https://graph.facebook.com/TamawanOfficial/picture?type=large',
    facebookUrl: 'https://www.facebook.com/TamawanOfficial',
    websiteUrl: 'https://www.tamawanvillage.com',
    type: 'MSME'
  },
  {
    id: 'taraki',
    name: 'Taraki CAR',
    description: 'Technology incubator and accelerator in CAR.',
    logoUrl: 'https://graph.facebook.com/tarakicar/picture?type=large',
    facebookUrl: 'https://www.facebook.com/tarakicar',
    type: 'Incubator'
  },
  {
    id: 'tech4ed',
    name: 'Tech4ED DTC CAR',
    description: 'Technology for Education, Employment, Entrepreneurs, and Economic Development.',
    logoUrl: 'https://graph.facebook.com/tech4eddtc.car/picture?type=large',
    facebookUrl: 'https://www.facebook.com/tech4eddtc.car',
    websiteUrl: 'https://dict.gov.ph/tech4ed/',
    type: 'Government'
  },
  {
    id: 'ucintto',
    name: 'UC InTTO',
    description: 'University of the Cordilleras Innovation and Technology Transfer Office.',
    logoUrl: 'https://graph.facebook.com/UCInTTO/picture?type=large',
    facebookUrl: 'https://www.facebook.com/UCInTTO',
    websiteUrl: 'https://www.uc-bcf.edu.ph',
    type: 'Incubator'
  },
  {
    id: 'upbsilbi',
    name: 'UPB Silbi TBI',
    description: 'UP Baguio Technology Business Incubator.',
    logoUrl: 'https://graph.facebook.com/upbsilbitbi/picture?type=large',
    facebookUrl: 'https://www.facebook.com/upbsilbitbi',
    websiteUrl: 'https://upb.edu.ph',
    type: 'Incubator'
  },
  {
    id: 'vivistop',
    name: 'Vivistop Baguio',
    description: 'Creative space and makerspace for youth and innovators.',
    logoUrl: 'https://graph.facebook.com/vivistop.baguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/vivistop.baguio',
    websiteUrl: 'https://www.vivistop.jp/baguio',
    type: 'Community'
  },
  {
    id: 'wtm',
    name: 'WTM Baguio',
    description: 'Women Techmakers Baguio.',
    logoUrl: 'https://graph.facebook.com/WTMBaguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/WTMBaguio',
    websiteUrl: 'https://developers.google.com/womentechmakers',
    type: 'Community'
  },
  {
    id: 'yesdes',
    name: 'YES DES CNS BSU',
    description: 'Young Entrepreneurs Society - Benguet State University.',
    logoUrl: 'https://graph.facebook.com/yes.des.cns.bsu/picture?type=large',
    facebookUrl: 'https://www.facebook.com/yes.des.cns.bsu',
    websiteUrl: 'http://www.bsu.edu.ph',
    type: 'Academe'
  },
  {
    id: 'yuman',
    name: 'Yuman Kaili',
    description: 'Community enterprise supporting local products.',
    logoUrl: 'https://graph.facebook.com/YumanKaili/picture?type=large',
    facebookUrl: 'https://www.facebook.com/YumanKaili',
    type: 'MSME'
  },
  {
    id: 'zwb',
    name: 'ZW Baguio',
    description: 'Advocating for a sustainable and zero-waste city.',
    logoUrl: 'https://graph.facebook.com/zwbaguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/zwbaguio',
    type: 'Non-Profit'
  }
];

export const activeStartups: Startup[] = [
  {
    id: 'heysuccess',
    name: 'Hey Success PH',
    description: 'Empowering students and young professionals with global opportunities.',
    logoUrl: 'https://graph.facebook.com/heysuccessph/picture?type=large',
    facebookUrl: 'https://www.facebook.com/heysuccessph',
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
    industry: 'Service',
    stage: 'Pre-Seed'
  },
  {
    id: 'tarana',
    name: 'Tarana AI',
    description: 'AI solutions for modern problems.',
    logoUrl: 'https://graph.facebook.com/TaranaAI/picture?type=large',
    facebookUrl: 'https://www.facebook.com/TaranaAI',
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
    link: 'https://bit.ly/CDOBasics-Register'
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
  }
];

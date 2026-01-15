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
    id: 'cpdso',
    name: 'Baguio CPDSO',
    description: 'City Planning, Development and Sustainability Office of Baguio City.',
    logoUrl: 'https://graph.facebook.com/BaguioCPDSO/picture?type=large',
    facebookUrl: 'https://www.facebook.com/BaguioCPDSO',
    websiteUrl: 'https://www.baguio.gov.ph',
    types: ['Government']
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
    id: 'geeks-on-a-beach',
    name: 'Geeks On A Beach',
    description: 'An international conference and community for startups, technology, and design.',
    logoUrl: 'https://graph.facebook.com/GeeksOnABeach/picture?type=large',
    facebookUrl: 'https://www.facebook.com/GeeksOnABeach',
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
    websiteUrl: 'https://intto.uc-bcf.edu.ph/ucolab/project-detail.html?id=CyNjOWMz8l0q93hGCpus',
    types: ['Incubator', 'Academe', 'Workspace']
  },
  {
    id: 'upbsilbi',
    name: 'UPB SILBI TBI',
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
  },
  {
    id: 'psto-baguio-benguet',
    name: 'DOST PSTO Baguio-Benguet',
    description: 'Provincial Science and Technology Office for Baguio and Benguet.',
    logoUrl: 'https://graph.facebook.com/pstobaguiobenguet/picture?type=large',
    facebookUrl: 'https://www.facebook.com/pstobaguiobenguet',
    types: ['Government']
  },
  {
    id: 'pia-benguet',
    name: 'PIA Benguet',
    description: 'Philippine Information Agency - Benguet Information Center.',
    logoUrl: 'https://graph.facebook.com/PIABenguetInfocen/picture?type=large',
    facebookUrl: 'https://www.facebook.com/PIABenguetInfocen',
    types: ['Government']
  },
  {
    id: 'pia-car',
    name: 'PIA Cordillera',
    description: 'Philippine Information Agency - Cordillera Administrative Region.',
    logoUrl: 'https://graph.facebook.com/PIACordilleraAdministrativeRegion/picture?type=large',
    facebookUrl: 'https://www.facebook.com/PIACordilleraAdministrativeRegion',
    types: ['Government']
  },
  {
    id: 'dost-apayao',
    name: 'DOST Apayao',
    description: 'Provincial Science and Technology Office - Apayao.',
    logoUrl: 'https://graph.facebook.com/dostapayaofb/picture?type=large',
    facebookUrl: 'https://www.facebook.com/dostapayaofb',
    types: ['Government']
  },
  {
    id: 'dost-mt-prov',
    name: 'DOST Mountain Province',
    description: 'Provincial Science and Technology Office - Mountain Province.',
    logoUrl: 'https://graph.facebook.com/DostCarMountainProvince/picture?type=large',
    facebookUrl: 'https://www.facebook.com/DostCarMountainProvince',
    types: ['Government']
  },
  {
    id: 'dost-abra',
    name: 'DOST Abra',
    description: 'Provincial Science and Technology Office - Abra.',
    logoUrl: 'https://graph.facebook.com/DOST.Abra.Official/picture?type=large',
    facebookUrl: 'https://www.facebook.com/DOST.Abra.Official',
    types: ['Government']
  },
  {
    id: 'dost-ifugao',
    name: 'DOST Ifugao',
    description: 'Provincial Science and Technology Office - Ifugao.',
    logoUrl: 'https://graph.facebook.com/DOSTIfugao/picture?type=large',
    facebookUrl: 'https://www.facebook.com/DOSTIfugao',
    types: ['Government']
  },
  {
    id: 'pisay-car',
    name: 'PSHS - CAR Campus',
    description: 'Philippine Science High School - Cordillera Administrative Region Campus.',
    logoUrl: 'https://graph.facebook.com/pisaycarc/picture?type=large',
    facebookUrl: 'https://www.facebook.com/pisaycarc',
    types: ['Academe', 'Government']
  },
  {
    id: 'dot-car',
    name: 'DOT Cordillera',
    description: 'Department of Tourism - Cordillera Administrative Region.',
    logoUrl: 'https://graph.facebook.com/DOTCordillera/picture?type=large',
    facebookUrl: 'https://www.facebook.com/DOTCordillera',
    types: ['Government']
  },
  {
    id: 'dole-car',
    name: 'DOLE Cordillera',
    description: 'Department of Labor and Employment - Cordillera.',
    logoUrl: 'https://graph.facebook.com/DOLEROCAR/picture?type=large',
    facebookUrl: 'https://www.facebook.com/DOLEROCAR',
    types: ['Government']
  },
  {
    id: 'baguio-hso',
    name: 'Baguio Health Services Office',
    description: 'City Health Services Office of Baguio.',
    logoUrl: 'https://graph.facebook.com/BaguioHSO/picture?type=large',
    facebookUrl: 'https://www.facebook.com/BaguioHSO',
    types: ['Government']
  },
  {
    id: 'baguio-cpo',
    name: 'Baguio City Police Office',
    description: 'Ensuring peace and order in the City of Baguio.',
    logoUrl: 'https://graph.facebook.com/PNPBaguioCPO/picture?type=large',
    facebookUrl: 'https://www.facebook.com/PNPBaguioCPO',
    types: ['Government']
  },
  {
    id: 'bghmc',
    name: 'Baguio General Hospital',
    description: 'Premier government hospital and medical center in the Cordilleras.',
    logoUrl: 'https://graph.facebook.com/officialbghmcbaguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/officialbghmcbaguio',
    types: ['Government']
  },
  {
    id: 'mandeko-kito',
    name: 'Mandeko Kito',
    description: 'An artisanal market and community of Baguio\'s creative entrepreneurs.',
    logoUrl: 'https://graph.facebook.com/mandekofficial/picture?type=large',
    facebookUrl: 'https://www.facebook.com/mandekofficial',
    types: ['Community', 'Creatives', 'MSME']
  },
  {
    id: 'pio-baguio',
    name: 'Baguio City PIO',
    description: 'Public Information Office - City of Baguio.',
    logoUrl: 'https://graph.facebook.com/pio.baguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/pio.baguio',
    types: ['Government']
  },
  {
    id: 'univ-baguio',
    name: 'University of Baguio',
    description: 'A private, multidisciplinary university in Baguio City.',
    logoUrl: 'https://graph.facebook.com/universityofbaguio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/universityofbaguio',
    websiteUrl: 'https://www.ubaguio.edu',
    types: ['Academe']
  },
  {
    id: 'slu-main',
    name: 'Saint Louis University',
    description: 'A private Catholic research university in Baguio City.',
    logoUrl: 'https://graph.facebook.com/slu.edu.ph/picture?type=large',
    facebookUrl: 'https://www.facebook.com/slu.edu.ph',
    websiteUrl: 'https://www.slu.edu.ph',
    types: ['Academe']
  },
  {
    id: 'up-baguio',
    name: 'UP Baguio',
    description: 'The University of the Philippines Baguio.',
    logoUrl: 'https://graph.facebook.com/OfficialUPB/picture?type=large',
    facebookUrl: 'https://www.facebook.com/OfficialUPB',
    websiteUrl: 'https://upb.edu.ph',
    types: ['Academe']
  },
  {
    id: 'bcu',
    name: 'Baguio Central University',
    description: 'Committed to providing quality education in the highlands.',
    logoUrl: 'https://graph.facebook.com/BaguioCentralUniversity/picture?type=large',
    facebookUrl: 'https://www.facebook.com/BaguioCentralUniversity/',
    websiteUrl: 'https://bcu.edu.ph',
    types: ['Academe']
  },
  {
    id: 'uc-main',
    name: 'University of the Cordilleras',
    description: 'A premier higher education institution in the Cordilleras.',
    logoUrl: 'https://graph.facebook.com/UCjaguars/picture?type=large',
    facebookUrl: 'https://www.facebook.com/UCjaguars',
    websiteUrl: 'https://www.uc-bcf.edu.ph',
    types: ['Academe']
  },
  {
    id: 'bsu-main',
    name: 'Benguet State University',
    description: 'A state university in La Trinidad, Benguet.',
    logoUrl: 'https://graph.facebook.com/BenguetStateUniversity/picture?type=large',
    facebookUrl: 'https://www.facebook.com/BenguetStateUniversity/',
    websiteUrl: 'http://www.bsu.edu.ph',
    types: ['Academe']
  },
  {
    id: 'ati-rtc-car',
    name: 'ATI-RTC CAR',
    description: 'Agricultural Training Institute - Regional Training Center CAR.',
    logoUrl: 'https://graph.facebook.com/ATIRTCCAR/picture?type=large',
    facebookUrl: 'https://www.facebook.com/ATIRTCCAR',
    types: ['Government', 'Academe']
  },
  {
    id: 'la-trinidad-tourism',
    name: 'La Trinidad Tourism',
    description: 'Promoting tourism in the capital town of Benguet.',
    logoUrl: 'https://graph.facebook.com/LaTrinidadTourism/picture?type=large',
    facebookUrl: 'https://www.facebook.com/LaTrinidadTourism',
    types: ['Government']
  },
  {
    id: 'pma',
    name: 'Philippine Military academy',
    description: 'The premier military academy of the Philippines.',
    logoUrl: 'https://graph.facebook.com/philippinemilitaryacademypublicaffairs/picture?type=large',
    facebookUrl: 'https://www.facebook.com/philippinemilitaryacademypublicaffairs',
    websiteUrl: 'https://www.pma.edu.ph',
    types: ['Academe', 'Government']
  },
  {
    id: 'easter-college',
    name: 'Easter College',
    description: 'One of the pioneer schools in the Cordilleras.',
    logoUrl: 'https://graph.facebook.com/eastercollege/picture?type=large',
    facebookUrl: 'https://www.facebook.com/eastercollege',
    websiteUrl: 'https://www.eastercollege.edu.ph',
    types: ['Academe']
  },
  {
    id: 'deped-car',
    name: 'DepEd Cordillera',
    description: 'Department of Education - Cordillera Administrative Region.',
    logoUrl: 'https://graph.facebook.com/DepEdTayoCordillera/picture?type=large',
    facebookUrl: 'https://www.facebook.com/DepEdTayoCordillera',
    websiteUrl: 'https://depedcar.ph',
    types: ['Government']
  },
  {
    id: 'rdc-car',
    name: 'RDC Cordillera',
    description: 'Regional Development Council - Cordillera Administrative Region.',
    logoUrl: 'https://graph.facebook.com/RDCsaCordi/picture?type=large',
    facebookUrl: 'https://www.facebook.com/RDCsaCordi',
    websiteUrl: 'https://car.neda.gov.ph',
    types: ['Government']
  }
];

export const activeStartups: Startup[] = [
  {
    id: 'oxilia',
    name: 'O-Xilia',
    description: 'A unified workspace where planning and collaboration happen together. It merges structured project management with real-time team communication, keeping ideas, tasks, and progress in one clear flow, simple, focused, and built for momentum.',
    logoUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/519066249_122106148976946209_8079689239304703533_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OchwX7fGXYAQ7kNvwH4j6WG&_nc_oc=Adk2WuLYyImPNHJZz0rfiZy_EHDlH0VsZPaLNrCeczuqbzU3utnQJKhGf-uZvY97M-k&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=I0YX3ztW6DvKmtXXRKKVrw&oh=00_Afp0Cz1qnZnwU4t2Rp3ZUp4XAik2RpUZwZ3LQl8BTZVDFg&oe=696E2675',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61578386291081',
    industry: ['Tech'],
    stage: 'Pre-Seed'
  },
  {
    id: 'aeroaid',
    name: 'AeroAid',
    description: 'A smart, drone delivery system designed to get life-saving medicines in far-flung areas.',
    logoUrl: 'https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/509604516_122112222692894214_1925413050427955989_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=nV1t8xSV5WoQ7kNvwHOaks5&_nc_oc=AdlvNnCOW66JR8syWS1sk96-suWNLteP7ybM8z7Dg0yoXZziRT7YcwIK7BwFQW6mtow&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=Wasp3U7QEa3szLuSzqVsqA&oh=00_AfqLaalgt7YzOuAc8BAs7axcjZMM-K1Rs8edL6wjNgKf1g&oe=696D9F7C',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61576826433382',
    industry: ['Tech', 'Health'],
    stage: 'Idea'
  },
  {
    id: 'aicore',
    name: 'AiCore',
    description: 'A computer vision and 3D simulation toolset for bloodstain pattern analysis and crime scene reconstruction',
    logoUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/517176255_122098415258940538_4103039227065415630_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Xy7WLI_mnLAQ7kNvwFIl9sJ&_nc_oc=Adkspwo34waN--nfKSfMa2nG7pUgo3JyYNaTh_xIQ2CW-HdW28D3NWYtOHHUirwoHNA&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=EyEJ8ev4kFw5OrOgg3iIIA&oh=00_Afru8wK8nwj7tUWWj5f8As-8KGQTelh6EdaD0FToNWDZ1Q&oe=696D8BC0',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61578216141652',
    websiteUrl: 'https://augnina.github.io/capstone/',
    industry: ['Tech'],
    stage: 'MVP'
  },
  {
    id: 'bosblocks',
    name: 'BOS Blocks',
    description: 'B.O.S BLOCKS is a cleantech startup transforming the Philippine hollow block industry through a proprietary blend of bamboo biochar and pulverized oyster shells.',
    logoUrl: 'https://ui-avatars.com/api/?name=BOS+Blocks&background=random&size=128',
    facebookUrl: '',
    websiteUrl: 'https://intto.uc-bcf.edu.ph/ucolab/project-detail.html?id=CyNjOWMz8l0q93hGCpus',
    industry: ['Tech', 'CleanTech', 'Material Science'],
    stage: 'Pre-Seed'
  },
  {
    id: 'bighani',
    name: 'Bighani RPG',
    description: 'BIGHANI RPG is a 2D pixel-art, turn-based strategy role-playing game that showcases Filipino culture and mythology.',
    logoUrl: 'https://graph.facebook.com/BighaniProject/picture?type=large',
    facebookUrl: 'https://www.facebook.com/BighaniProject',
    websiteUrl: 'https://merchant-shade.itch.io/bighani',
    industry: ['Tech', 'Creative'],
    stage: 'MVP'
  },
  {
    id: 'heysuccess',
    name: 'Hey Success PH',
    description: 'Empowering students and young professionals with global opportunities.',
    logoUrl: 'https://graph.facebook.com/heysuccessph/picture?type=large',
    facebookUrl: 'https://www.facebook.com/heysuccessph',
    websiteUrl: 'https://heysuccess.com.ph',
    industry: ['Service'],
    stage: 'Seed'
  },
  {
    id: 'inv8studio',
    name: 'Inv8 Studio',
    description: 'Creative studio delivering innovative digital solutions.',
    logoUrl: 'https://graph.facebook.com/inv8studio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/inv8studio',
    websiteUrl: 'https://inv8.io/',
    industry: ['Creative'],
    stage: 'Scaling'
  },
  {
    id: 'parapo',
    name: 'Official Para Po',
    description: 'Innovative transport solutions for the modern commuter.',
    logoUrl: 'https://graph.facebook.com/officialparapo/picture?type=large',
    facebookUrl: 'https://www.facebook.com/officialparapo',
    industry: ['Tech'],
    stage: 'Pre-Seed'
  },
  {
    id: 'srv',
    name: 'SRV Pinoy',
    description: 'Service-oriented community for Filipinos.',
    logoUrl: 'https://graph.facebook.com/srvpinoy/picture?type=large',
    facebookUrl: 'https://www.facebook.com/srvpinoy',
    websiteUrl: 'https://srvpinoy.com',
    industry: ['Service'],
    stage: 'Growth'
  },
  {
    id: 'sunshare',
    name: 'Sunshare',
    description: 'A blockchain-enabled marketplace for real-time, peer-to-peer solar energy trading.',
    logoUrl: 'https://graph.facebook.com/sunshare.ph/picture?type=large',
    facebookUrl: 'https://www.facebook.com/sunshare.ph',
    industry: ['Tech'],
    stage: 'MVP'
  },
  {
    id: 'tarana',
    name: 'Tarana-ai',
    description: 'Empowering travelers and cities with real-time, intelligent guidance for sustainable exploration.',
    logoUrl: 'https://graph.facebook.com/TaranaAI/picture?type=large',
    facebookUrl: 'https://www.facebook.com/TaranaAI',
    websiteUrl: 'https://www.tarana-ai.com/',
    industry: ['Tech'],
    stage: 'Seed'
  },
  {
    id: 'tingi',
    name: 'Tingi Station',
    description: 'Refill station promoting zero-waste lifestyle.',
    logoUrl: 'https://graph.facebook.com/tingistation/picture?type=large',
    facebookUrl: 'https://www.facebook.com/tingistation',
    industry: ['E-commerce'],
    stage: 'Pre-Seed'
  }
];

export const events: Event[] = [
  {
    id: 'event-cybersecurity-dict-2026',
    title: 'Foundations of Cybersecurity: Data Privacy Concepts and Information Integrity',
    date: new Date('2026-01-16T08:00:00'),
    endDate: new Date('2026-01-16T12:00:00'),
    location: 'Zoom',
    description: 'This session aims to increase awareness and understanding of data privacy protection and information integrity, highlighting responsible and secure practices in today’s digital environment.',
    imageUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/615750934_904128462188304_1635720629188889200_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4JoWxYCwZAEm22FNQExlcYgDAJBfoIBhiAMAkF-ggGFeCceW_qcEcfpll4KxpGFxM9Y9OAcRFLlsTUiMGjLoN&_nc_ohc=4Jkw4EX2nQMQ7kNvwF3j_M1&_nc_oc=AdmpFcj8T50MkHkU_emPfirsJ_BfvinHDNvccnZUFI_R532nL660Z5Hq5IacGq6cM1k&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=fk3xnIEHpSBvsi31_bVi8Q&oh=00_Afr-v-DDdvMqNp4zTkUZD2Vk2ovkett3avyxkug2-Y7ynQ&oe=696D8BE7',
    tags: ['Workshop', 'Webinar'],
    link: 'https://bit.ly/DPCII-011626',
    learnMoreLink: 'https://www.facebook.com/photo/?fbid=904128458854971&set=a.131590669442091',
    organizerId: 'dict-car',
    price: 'Free'
  }
];

export const communityNews: NewsItem[] = [
  {
    id: 'news-4',
    title: 'CAR Universities in the UI GreenMetric 2025 Rankings',
    date: 'Dec 16, 2025',
    excerpt: 'The Cordillera Administrative Region (CAR) celebrates a major milestone as several of its universities earn spots in the UI GreenMetric World University Rankings 2025.',
    imageUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/615733495_1472872924843637_7192797874157003595_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=6ZXWDsAKK6YQ7kNvwHEYlJ2&_nc_oc=AdlS_D1WB4F--F0un09_-LNpK9YfdE7TXaNTAcaSS8G32BaFAw4NmU_anVvrIAaZGWs&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=9ROKS3qbtYw-nGuJHJv59A&oh=00_Afq2GfpdiQ6pCXXhpRktXjMtlxGk7UYyn9PZLgdV9uzIMg&oe=696D7202',
    link: 'https://greenmetric.ui.ac.id/rankings/overall-rankings-2025',
    source: 'Website'
  },
  {
    id: 'news-3',
    title: 'Congratulations to the Champions of the Baguio Smart City Convergence 2025',
    date: 'Dec 12, 2025',
    excerpt: 'As we continue building a smarter, more resilient, and more people-centered Baguio City, we proudly celebrate the outstanding students and innovators.',
    imageUrl: 'https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/593866385_1194754472440128_8684342725486940305_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QRzJmp16VeMQ7kNvwGkvf8v&_nc_oc=AdkmKUzCM5LIlcWtYCUY1_MCo14evI4KguLQICHCDJC8jawyyJWAj5ccho0Uhza3bLc&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=8QyX8vQnTsOQlaqEoAX_7g&oh=00_Afr8f581L5oVATGTDTQLq_ngvvMSHqLjgTqXwN0o7r7JqA&oe=696D7E85',
    link: 'https://www.facebook.com/share/p/1AXJ2Sq43P/',
    source: 'Facebook'
  },
  {
    id: 'news-2',
    title: 'Auscultate Wins 1st Runner Up in PSC10!',
    date: 'Dec 05, 2025',
    excerpt: 'Warmest congratulations to Auscultate from the Cordillera Administrative Region for achieving 1st Runner Up in the Philippine Startup Challenge 10!',
    imageUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/594904505_875149501752867_2697425006317580049_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0pqqmrJv2D0Q7kNvwHcatuc&_nc_oc=AdmGGTpOIL-EuAeTEAXD3o6yepRCMnGG2isAvQsSeNqh_PR3aJtyAW4H8j3mQVlQDzw&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=1Eb29hXC05W-R2Utye3dVg&oh=00_AfrZiOR4VtMh9mFh91qCv21JjZcQhGTJZkeczJDCAZUmrw&oe=696D7194',
    link: 'https://www.facebook.com/photo/?fbid=875149498419534&set=a.131590669442091',
    source: 'Facebook'
  },
  {
    id: 'news-1',
    title: 'Cordillera Representative Ausculate, Set for National Spotlight at PSC10',
    date: 'Dec 03, 2025',
    excerpt: 'Team Auscultate is set to represent the Cordillera Administrative Region at the Philippine Startup Challenge 10 on December 3-4, 2025.',
    imageUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/591610947_873609975240153_4085509653829870516_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hEbGNchmZ-0Q7kNvwFn5Itm&_nc_oc=Adka3B1vtydRApf_pMj9HjyiPNguI7hsxZZjqkmRUjGrOJjPs4u4gkso1tkCM2-hQ_g&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=RKy7GOkdAuNWtZYrfe6Ikw&oh=00_AfoJl2isx0XFosO89n_E9kh3-Vqdz-yJr4ubu679pXht6g&oe=696D93A8',
    link: 'https://www.facebook.com/photo/?fbid=873609971906820&set=a.131590669442091',
    source: 'Facebook'
  }
];

export const opportunities: Opportunity[] = [
  {
    id: 'opp-dost-tapi-technicom',
    title: 'TECHNiCOM | Technology Innovation for Commercialization',
    organization: 'Technology Application and Promotion Institute (DOST-TAPI)',
    amount: 'Not Specified',
    deadline: 'January 30, 2026',
    type: 'Grant',
    description: "The Technology Innovation for Commercialization Program (TECHNiCOM) aims to fast-track the transfer, utilization, and commercialization of R&D outputs to contribute to the country’s sustainable development through relevant technological platforms. Through TECHNiCOM, we provide technopreneurs with an easily accessible multimillion pre-commercialization grant and linkage to DOST-TAPI’s technology and innovation support programs.",
    link: 'http://tapi.dost.gov.ph/call-for-proposals/technicom',
    moreDetailsLink: 'http://tapi.dost.gov.ph/call-for-proposals/technicom',
    bannerUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/598539969_1307515604747819_5880741053725815788_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vXnKXZYZhOYQ7kNvwEJDXoI&_nc_oc=AdnDMyeabuOPFdXt4KXgPMfiKkK_Oe4neYPB2Q77wIXDreyzaJi9VxzWlvlWx1bHdCE&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=7i673L1yknBjeMmz59jl4A&oh=00_AfpqbQMs03AgRKEZdQOTOy2c36MfPMgSd_2953oqpgdsKA&oe=696E2DB7'
  },
  {
    id: 'opp-dost-tapi-galing',
    title: 'GALING | Grants and Assistance to Leverage Innovations for National Growth',
    organization: 'Technology Application and Promotion Institute (DOST-TAPI)',
    amount: 'Not Specified',
    deadline: 'January 30, 2026',
    type: 'Grant',
    description: "The Grants And Assistance To Leverage Innovations For National Growth (GALING) Program has a holistic approach of packaged assistance that will harmonize the pre-commercialization programs of DOST-TAPI's Invention Development Division (IDD), in particular the Testing and Analyses Program, Industry-Based Invention Development (IBID) Program, and Invention-Based Enterprise Development (IBED) Program. It will also provide financial assistance for iterative prototyping.",
    link: 'http://tapi.dost.gov.ph/call-for-proposals/galing',
    moreDetailsLink: 'http://tapi.dost.gov.ph/call-for-proposals/galing',
    bannerUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/598539969_1307515604747819_5880741053725815788_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vXnKXZYZhOYQ7kNvwEJDXoI&_nc_oc=AdnDMyeabuOPFdXt4KXgPMfiKkK_Oe4neYPB2Q77wIXDreyzaJi9VxzWlvlWx1bHdCE&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=7i673L1yknBjeMmz59jl4A&oh=00_AfpqbQMs03AgRKEZdQOTOy2c36MfPMgSd_2953oqpgdsKA&oe=696E2DB7'
  },
  {
    id: 'opp-ipmc-2026',
    title: 'IP Management Clinic (IPMC)',
    organization: 'Intellectual Property Office of the Philippines',
    amount: 'Expert Strategy',
    deadline: 'May 30, 2026',
    type: 'Call for Experts',
    description: 'The IP Management Clinic is your opportunity to strengthen your IP strategy with guidance, expert insights, and global best practices. Learn how to turn your innovations and ideas into valuable IP assets that support sustainable business growth.',
    link: 'https://ipophlgov-my.sharepoint.com/:w:/g/personal/webmaster_ipophl_gov_ph/IQBhdBovcF9YQJkmTlmKsZUsAU_jPJoNqflu4sLd8hWbGjo?rtime=NPvJj4lT3kg',
    moreDetailsLink: 'https://www.ipophil.gov.ph/ip-management-clinic/?fbclid=IwY2xjawPUoO5leHRuA2FlbQIxMABicmlkETF3MkRLMXV6bFZ6NjdJSzJnc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjapg1DJwpwoGd2IqKUBL0f87tJ_q17PTN0TqpCP6cr9W_s2hu1nzW-YEgAI_aem_ba0xVP6x-OK7bRzEke9myA',
    bannerUrl: 'https://www.ipophil.gov.ph/wp-content/uploads/2025/12/viber_image_2025-12-12_14-02-05-967.jpg'
  },
  {
    id: 'opp-amazon-climate-tech',
    title: 'Amazon Devices Climate Tech Accelerator',
    organization: 'Amazon',
    amount: 'Accelerator',
    deadline: 'February 24, 2026',
    type: 'Incubation',
    description: 'A uniquely designed program for companies at any stage to accelerate the integration of their technologies that can help reduce the carbon impact of Amazon devices.',
    link: 'https://applications.pnptc.com/amazon-devices-climate-tech-accelerator',
    moreDetailsLink: 'https://sustainability.aboutamazon.com/products-services/amazon-devices-climate-tech-accelerator',
    bannerUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/615452051_1402942291872351_123754039280221254_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFr2zOrdKteeFEXxFuBcADZ3K7e0kLuu1Hcrt7SQu67UUD3jdzvEO1BlzmTHDD4CSjW7rY6Y_AY5zT3fVXKUgp5&_nc_ohc=uyzzUhFpNr8Q7kNvwFo_DHk&_nc_oc=AdmZfSoGIN53wV_xMhF_KzWjaadQF5jTF0jzBWQXA4euAoscrhgVApPAH7s9Wqfk4LM&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=LjGaGDnwdj6RV5s0cWYZkg&oh=00_Afrv19op03KS9VPNcUPfDeSaLvgWACUPHwNfZ_eSpUSOmA&oe=696D99F3'
  },
  {
    id: 'opp-uc-cohort-9',
    title: 'COHORT 9 for UCIAN Innovators',
    organization: 'UC Innovation And Technology Transfer Office',
    amount: 'Free Mentorship',
    deadline: 'January 28, 2026',
    type: 'Incubation',
    description: 'Join our community and get access to free expert mentorship, specialized workshops, and a collaborative environment. We provide co-working spaces and specialized equipment to help you refine your idea, develop a product, and prepare for market entry.',
    link: 'https://forms.gle/jVJymemBp9az5En87',
    moreDetailsLink: 'https://www.facebook.com/UCInTTO/posts/pfbid0hFr6wxtLUTJ66HkJh5oXZR27QJGVkwKdboyrHhEP5zALRFePr6sZwUN2bDaTDpJNl?rdid=2Bs81daZrhbjr2S2#',
    bannerUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/615396181_1360715146066150_2584322211358351719_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7lOH_yFYkk8Q7kNvwGHKCjQ&_nc_oc=AdkoT0galooJDC1nEeQuTl-ZjDCG-CUWDvIO-X5HXPFQcEioubw22etUtjTHtkplUIU&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=OrVZ-a_NruDFoQAgVwQGpQ&oh=00_Afr-njwXlkEB5l6gsJIoYb_48ynLrHw_FOjR0x2nbT-lJA&oe=696D945A'
  },
  {
    id: 'opp-ntf-2026',
    title: 'Call for Baguio & Benguet Exhibitors for the National Trade Fair',
    organization: 'DTI / Government',
    amount: 'Market Access',
    deadline: 'January 23, 2026',
    type: 'Call for Experts',
    description: 'Showcase the 𝕓𝕖𝕤𝕥 𝕠𝕗 𝕥𝕙𝕖 ℂ𝕠𝕣𝕕𝕚𝕝𝕝𝕖𝕣𝕒𝕤 on a national stage. Be part of the 2026 𝓓𝓣𝓘 𝓑𝓪𝓰𝓸𝓷𝓰 𝓟𝓲𝓵𝓲𝓹𝓲𝓷𝓪𝓼 𝓝𝓪𝓽𝓲𝓸𝓷𝓪𝓵 𝓣𝓻𝓪𝓭𝓮 𝓕𝓪𝓲𝓻 and bring your proudly local products to thousands of buyers and visitors! 📅 February 18–22, 2026 ⏰ 10:00 a.m. – 9:00 p.m. 📍 Megatrade Halls 1–3, SM Megamall, Mandaluyong City. This is your chance to: ✅ Expand your market ✅ Connect with national buyers ✅ Elevate your brand under Bagong Pilipinas.',
    link: 'https://tinyurl.com/join2026NTF',
    moreDetailsLink: 'https://www.facebook.com/photo/?fbid=1203308168583111&set=a.190674703179801',
    bannerUrl: 'https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/615074911_1203308171916444_5063032536415042023_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ink9cmknEJcQ7kNvwGG7uKe&_nc_oc=Adljoe-JIQFhPlvefpVHSrGkykaJ4WnahLBoDpviX7Fq98dPcQcAVefTM51Cf3yRGZM&_nc_zt=23&_nc_ht=scontent.fcrk1-2.fna&_nc_gid=B2Y1oUeumGKsEd7RZ80JEQ&oh=00_AfoShs7nXGH5jNcoskB9-KPh-qdpXtq3_37oTVRE-GYoFA&oe=696D937E'
  },
  {
    id: 'eyaa-cohort-6',
    title: 'eYAA: Cohort 6 is Calling',
    organization: 'ASEAN Foundation with Maybank Foundation',
    amount: 'USD 25,000',
    deadline: 'Jan 25, 2026',
    type: 'Grant',
    description: 'CSOs and SEs committed to community empowerment and youth engagement are invited to implement impactful projects.',
    link: 'https://form.jotform.com/253384883336467',
    moreDetailsLink: 'https://bit.ly/eYAA6_CSO',
    bannerUrl: 'https://aseanfoundation.org/wp-content/uploads/2025/12/CFA-CSOSE-eYAA6-Slide-1.jpg'
  },
  {
    id: 'award-1',
    title: '1st Negosyong Matatag: MSME Disaster Resilience Awards',
    organization: 'DTI / Government',
    amount: 'Recognition',
    deadline: 'February 27, 2026',
    type: 'Awards',
    description: 'Nomination for MSME Disaster Resilience awards for 2026.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd1ATsVvUabmc5mB8noqGrY8wFH7aiNmKoDxdlVU4SgPa5OUQ/viewform',
    moreDetailsLink: 'https://www.facebook.com/photo?fbid=1202977625352919&set=a.163867532597272',
    bannerUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/614766928_1202977632019585_4535625032574069490_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uQld2zKbe0kQ7kNvwGMQu6d&_nc_oc=Adm_yxPVXPYL8EdLjIugKn3xtUw4gmlZb6wGLBgyLdXNqgc_dgsgpYP5KTm8emHOwYs&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=8ypQia0reyRdMimR2uK_HQ&oh=00_Afpa0W-A9JI0kPlhAtpTyRqMDVa5a0W0FoJ5UKVkbdQ3yQ&oe=696D7BDE'
  }
];

export const resources: Resource[] = [
  {
    id: 'web-google-ai-studio',
    title: 'Google AI Studio',
    type: 'Website',
    description: 'A web-based tool for prototyping with Gemini models and building AI applications fast.',
    format: 'AI Prototyping',
    size: 'N/A',
    url: 'https://aistudio.google.com/'
  },
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
    description: 'Ordinance providing incentives and support for research, innovation, and creative endeavors.',
    format: 'WEB',
    size: 'N/A',
    url: 'https://citycouncil.baguio.gov.ph/ordinances/j4w5Dgzx'
  },
  {
    id: 'r3',
    title: 'Philippine Startup Ecosystem Report 2025',
    type: 'Report',
    description: 'Gobi Partners launches Philippine Startup Ecosystem Report 2025: The Next Wave of Innovation.',
    format: 'WEB',
    size: 'N/A',
    url: 'https://gobicore.vc/gobi-partners-launches-philippine-startup-ecosystem-report-2025-the-next-wave-of-innovation/'
  },
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
    description: 'Graphic design platform for social media and presentations.',
    format: 'Design',
    size: 'N/A',
    url: 'https://www.canva.com/'
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
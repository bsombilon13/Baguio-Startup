
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
    websiteUrl: 'https://intto.uc-bcf.edu.ph/index.html',
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
    name: 'Philippine Military Academy',
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
    id: 'aeroaid',
    name: 'AeroAid',
    description: 'A smart, drone delivery system designed to get life-saving medicines in far-flung areas.',
    logoUrl: 'https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/509604516_122112222692894214_1925413050427955989_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH3or8YoXluRbi1y92eqnTqK_Zq44NMPH0r9mrjg0w8ff6bmHSzHAW48nm3_M5h9RixYBFHLY5QkQxk4gW4Ix6B&_nc_ohc=_WIInK1BXHIQ7kNvwEcJ_9z&_nc_oc=AdlV8nWy3ZFS19vwCoyLN5T5dNx1EWxgthGx_C5Npo717rPY-Klx0c5BTJN8UugIbf4&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=XOnSt6URRHy0ocXtqa-J0A&oh=00_AfkHObAPPAPv1bUHnITnuMGLCmLmiLaDA8AlDS0rH3Kblw&oe=694B203C',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61576826433382',
    industry: ['Tech', 'Health'],
    stage: 'Idea'
  },
  {
    id: 'aicore',
    name: 'AiCore',
    description: 'A computer vision and 3D simulation toolset for bloodstain pattern analysis and crime scene reconstruction',
    logoUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/517176255_122098415258940538_4103039227065415630_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHiRIlmZIBDUcYXIovHo8IwIIOpEdbsi6wgg6kR1uyLrMWuf8Qif1AA5soSI9OS6sgvPk7lmdax-6K4rMToDFVE&_nc_ohc=f3cuUXYjrioQ7kNvwEoB66p&_nc_oc=AdnMLzaS_KpyovMAE9Bsbk8TEZtue5xS5sDpO-MeN0RTyW0iPGRlonB0EpC4iKU9D5w&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=YmCFaaJxUgB8JqeSatUYpw&oh=00_AflbdmF7slal7GgXYIPm9YOn50lQUM1ku2uWqGV4IhWl1A&oe=694B44C0',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61578216141652',
    websiteUrl: 'https://augnina.github.io/capstone/?fbclid=IwY2xjawOeXx1leHRuA2FlbQIxMABicmlkETFBeERkUDYzNXJiYjJZdUtrc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlkDgrOnUOVbvKonphvm7A7i4e_fGw_5UVXDpz5wQxiSnDA-LDGCgpGQZgRH_aem_C_VHOmzO05lsBNS4p4zYqg',
    industry: ['Tech'],
    stage: 'Pre-Seed'
  },
  {
    id: 'heysuccess',
    name: 'Hey Success PH',
    description: 'Empowering students and young professionals with global opportunities.',
    logoUrl: 'https://graph.facebook.com/heysuccessph/picture?type=large',
    facebookUrl: 'https://www.facebook.com/heysuccessph',
    websiteUrl: 'https://heysuccess.com.ph',
    industry: ['Service'],
    stage: 'Pre-Seed'
  },
  {
    id: 'inv8studio',
    name: 'Inv8 Studio',
    description: 'Creative studio delivering innovative digital solutions.',
    logoUrl: 'https://graph.facebook.com/inv8studio/picture?type=large',
    facebookUrl: 'https://www.facebook.com/inv8studio',
    websiteUrl: 'https://inv8.io/',
    industry: ['Creative'],
    stage: 'Pre-Seed'
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
    stage: 'Pre-Seed'
  },
  {
    id: 'sunshare',
    name: 'Sunshare',
    description: 'A blockchain-enabled marketplace for real-time, peer-to-peer solar energy trading.',
    logoUrl: 'https://graph.facebook.com/sunshare.ph/picture?type=large',
    facebookUrl: 'https://www.facebook.com/sunshare.ph',
    industry: ['Tech'],
    stage: 'Pre-Seed'
  },
  {
    id: 'tarana',
    name: 'Tarana-ai',
    description: 'Empowering travelers and cities with real-time, intelligent guidance for sustainable exploration.',
    logoUrl: 'https://graph.facebook.com/TaranaAI/picture?type=large',
    facebookUrl: 'https://www.facebook.com/TaranaAI',
    websiteUrl: 'https://www.tarana-ai.com/',
    industry: ['Tech'],
    stage: 'Pre-Seed'
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
    id: 'evt-mandeko-kito',
    title: 'Mandëko Kito',
    date: new Date('2025-12-05T08:00:00'),
    endDate: new Date('2025-12-22T17:00:00'),
    location: 'Scout Hill, Camp John Hay, Baguio City',
    description: 'Our local artisans and creative advocates are here to preserve traditional skills, pass them on across generations, and inspire creativity and learning, especially among children!',
    imageUrl: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2000&auto=format&fit=crop',
    tags: ['Fair', 'Creative', 'Community'],
    learnMoreLink: 'https://www.facebook.com/mandekofficial',
    organizerId: 'mandeko-kito'
  }
];

export const communityNews: NewsItem[] = [
  {
    id: 'news-4',
    title: 'CAR Universities in the UI GreenMetric 2025 Rankings',
    date: 'Dec 16, 2025',
    excerpt: 'The Cordillera Administrative Region (CAR) celebrates a major milestone as several of its universities earn spots in the UI GreenMetric World University Rankings 2025.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    link: 'https://greenmetric.ui.ac.id/rankings/overall-rankings-2025',
    source: 'Website'
  },
  {
    id: 'news-3',
    title: 'Congratulations to the Champions of the Baguio Smart City Convergence 2025',
    date: 'Dec 12, 2025',
    excerpt: 'As we continue building a smarter, more resilient, and more people-centered Baguio City, we proudly celebrate the outstanding students and innovators.',
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.facebook.com/share/p/1AXJ2Sq43P/',
    source: 'Facebook'
  },
  {
    id: 'news-2',
    title: 'Auscultate Wins 1st Runner Up in PSC10!',
    date: 'Dec 05, 2025',
    excerpt: 'Warmest congratulations to Auscultate from the Cordillera Administrative Region for achieving 1st Runner Up in the Philippine Startup Challenge 10!',
    imageUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.facebook.com/photo/?fbid=875149498419534&set=a.131590669442091',
    source: 'Facebook'
  },
  {
    id: 'news-1',
    title: 'Cordillera Representative Ausculate, Set for National Spotlight at PSC10',
    date: 'Dec 03, 2025',
    excerpt: 'Team Auscultate is set to represent the Cordillera Administrative Region at the Philippine Startup Challenge 10 on December 3-4, 2025.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    link: 'https://www.facebook.com/photo/?fbid=873609971906820&set=a.131590669442091',
    source: 'Facebook'
  }
];

export const opportunities: Opportunity[] = [
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
    bannerUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'award-1',
    title: '1st Negosyong Matatag: MSME Disaster Resilience Awards',
    organization: 'DTI / Government',
    amount: 'Recognition',
    deadline: 'Jan 14, 2026',
    type: 'Awards',
    description: 'Nomination for MSME Disaster Resilience awards for 2026.',
    link: 'https://bit.ly/MatatagAwards',
    moreDetailsLink: 'https://www.facebook.com/share/p/17jdMgFnyt/'
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

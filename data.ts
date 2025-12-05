
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
  },
  // New Additions
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

// Alphabetically sorted active startups
export const activeStartups: Startup[] = [
  {
    id: 'aeroaid',
    name: 'AeroAid',
    description: 'Bringing essential medicines faster, safer, and smarter. One flight at a time.',
    logoUrl: 'https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/509604516_122112222692894214_1925413050427955989_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH3or8YoXluRbi1y92eqnTqK_Zq44NMPH0r9mrjg0w8ff6bmHSzHAW48nm3_M5h9RixYBFHLY5QkQxk4gW4Ix6B&_nc_ohc=L4ixzEDF4WsQ7kNvwHUqyuE&_nc_oc=AdmQk7yef5dZTpVgUptHjeJ58_8GOa8QwVCfKoM-6UY35T05XiUfqwocPCypC3o-q90&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=2jFnnRW_jX9g-w4HsT16CQ&oh=00_Afn7NQraNDM5Xa2ugxuSvaEsa2WDRFCRlFX9KXwtpYaz-g&oe=69383ABC',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61576826433382',
    industry: ['Tech', 'Health'],
    stage: 'Idea'
  },
  {
    id: 'aicore',
    name: 'AiCore',
    description: 'A computer vision and 3D simulation toolset for bloodstain pattern analysis and crime scene reconstruction',
    logoUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/517176255_122098415258940538_4103039227065415630_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yWfoQ_Qqwt8Q7kNvwFXrW6l&_nc_oc=AdmrL9VqdSP8d0OAItzrRwIKOSvAYuVcZV0lT3GZq_wy08wKivmm_R4UFCwDn_BrW-E&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=RApEObO2S6B8sVOWH--43w&oh=00_AfnuPfwvpEj1iqQZC30ySdYBxZD76GLLVr9pBAM3O2IapA&oe=69374600',
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
    description: 'Our local artisans and creative advocates are here to preserve traditional skills, pass them on across generations, and inspire creativity and learning, especially among children! Through these workshops, Mandëko Kito supports the continuous growth of our local creative community and the future of Filipino craftsmanship.',
    imageUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/581946283_122158851776600138_5733691605446594206_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6OtYQf6Hwt4Q7kNvwEBRTy7&_nc_oc=AdnpxsHLmqcFfUTmUUU4AJl641Cdt1wC-Q-EVtvZbxY7y5bPKx6vJkLVDipQeS8rsr0&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=Gq1_TNpmvBn6PkVRWIer_Q&oh=00_AfmiR82mmiwDq1YCI9tPe-aiZVapEXl_xb2CrRLSnFf-5Q&oe=6937678E',
    tags: ['Fair', 'Creative', 'Community'],
    learnMoreLink: 'https://www.facebook.com/mandekofficial',
    organizerId: 'mandeko-kito'
  },
  {
    id: 'evt-yep-ap',
    title: 'Youth Entrepreneurship Accelerator Camp: Training of Master Trainers',
    date: new Date('2025-12-09T08:00:00'),
    endDate: new Date('2025-12-11T17:00:00'),
    location: 'Amber Hall, Ion Hotel, Legarda Road, Baguio City',
    description: "This FREE three-day workshop, delivered through UNDP’s Youth Empowerment Project in Asia and the Pacific (YEP-AP) and Youth Co:Lab, aims to invest in and empower young people across the region to accelerate the implementation of the Sustainable Development Goals (SDGs). It equips young entrepreneurs, coaches, mentors, and counselors with the skills to create impact-driven, needs-based, and innovative solutions that address today’s complex challenges.",
    imageUrl: 'https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/593738426_698896083292287_6095339606281164719_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8H9mIuC8cUkQ7kNvwGgaH6b&_nc_oc=AdmX-7AlOmybPqYTKd1ng21dJmn8luyKysHr-FU-aAZXTEJP6vrgzYwZal9HQSpat60&_nc_zt=23&_nc_ht=scontent.fcrk1-2.fna&_nc_gid=LApQi7PVs7GIuCtuNt69Zg&oh=00_Aflti_yTF35rt05Sdq76I3xhrAg3reG7rZh6fOwVP0QDtg&oe=69361042',
    tags: ['Training'],
    link: 'https://bit.ly/YouthToMT',
    learnMoreLink: 'https://www.facebook.com/share/p/17XWdjfeLk/',
    organizerId: 'cpdso'
  },
  {
    id: 'evt-cloud-devops-basics',
    title: 'Cloud and DevOps Basics',
    date: new Date('2025-12-10T13:00:00'),
    location: 'Zoom',
    description: "This short course provides an introductory overview of cloud computing and DevOps principles. Participants will learn about service models (IaaS, PaaS, SaaS), the advantages of cloud adoption, and the collaborative practices that define DevOps. The session supports DICT's Cloud First Policy and aims to build foundational awareness of cloud infrastructure and deployment workflows relevant to government, business, and startups.",
    imageUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/587213315_872894341978383_6161694301616584039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHxtQjMgZxlEc9du-DDOCu7eDeTBQyd0xJ4N5MFDJ3TEqIrc0d5JZc94yhB-f_FeODohzjSDDuHGJbYf0PUvN5s&_nc_ohc=Yh7OUvhI9SkQ7kNvwEllq0w&_nc_oc=Adm5dsXPof2IcVDImQtCQ-cpEfWYwDsq0vfSoSti4YQOpocyrgcgR1hjMPt_bwrKnKk&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=4RKTUIxbBmiN-jfooC7a5w&oh=00_AfiBPjakYwG62qEhWxMMEJzQgQPvbH6zuTVbCY7tJfU8cg&oe=693395A4',
    tags: ['Workshop', 'Cloud', 'DevOps'],
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeInZn9y284wxk-tLtqMqyjl9gn4Hxl8nqLLwApRtzj6J2UGg/viewform',
    learnMoreLink: 'https://www.facebook.com/share/p/1DiWAXjLaw/',
    organizerId: 'dict-car'
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
    learnMoreLink: 'https://www.facebook.com/share/p/17fFd7Kq9Q/',
    organizerId: 'dict-car'
  },
  {
    id: 'evt-creative-tech',
    title: 'Creative Tech Trends: Animation, Game Development d Digital Content Creation',
    date: new Date('2025-12-13T13:00:00'),
    location: 'Zoom',
    description: "This short course introduces participants to the growing creative technology sector, covering animation, game development, and digital content creation. It discusses career pathways, creative tools, and the global demand for Filipino creative professionals. The course aims to inspire learners to pursue opportunities in the creative digital economy and aligns with the Philippine Creative Industries Development Act (RA 11904).",
    imageUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/591731203_873748715226279_3291547514410931563_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF3AZwO0BlLsywylmF7y9ZBdEY4fv6fQEl0Rjh-_p9ASWIwto5p3rKMs_djGeAz7-N_1_1XYjk_9Su_yqMQJhHm&_nc_ohc=s0dQ2vxVkuAQ7kNvwGbuOJz&_nc_oc=AdkAeKzs1Js9U9R28hG2qEyIWNiW-W1sj_NFYg-ut8vn9wFYiyW3hgTjLcu8MEdJLB8&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=R1UT9XSkuwRUL4GQid6xgg&oh=00_Afk3NLhcn2I5Xbfh7oPAwoTcerxpyv1KGjqEQI86nYPk2Q&oe=69373E6A',
    tags: ['Training', 'Creative', 'GameDev'],
    link: 'https://bit.ly/CTT-Register',
    learnMoreLink: 'https://www.facebook.com/share/p/1YWW6DYhyq/',
    organizerId: 'dict-car'
  },
  {
    id: 'evt-blockchain-govt',
    title: 'Blockchain Technology in Government (Potential and Application)',
    date: new Date('2025-12-15T13:00:00'),
    location: 'Zoom',
    description: "This training aims to equip government employees, policymakers, and IT professionals with the foundational knowledge of blockchain technology, its use cases in governance, and how it can enhance public sector services.",
    imageUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/593885931_875167355084415_5917444070216356359_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HYwV5tT1mzEQ7kNvwEx5mky&_nc_oc=AdkA2JirIVw6vePbx8A973YuAVrf3N4-I7MZSj7DuhUu-S-WBdj5EOpHiNMIUgzI-2s&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=DXGW3U9VMNuQd-M5uyOGvg&oh=00_AfmATuBSfN8paYHPyV7e3f423M_9aPu94QD8KGH2ibTeCg&oe=69374208',
    tags: ['Workshop', 'Blockchain', 'GovTech'],
    link: 'https://forms.gle/vMuuE5yAfpUKx8ra8',
    learnMoreLink: 'https://www.facebook.com/photo/?fbid=875167351751082&set=a.131590669442091',
    organizerId: 'dict-car'
  },
  {
    id: 'evt-ai-show-tell',
    title: 'AI Show and Tell (For The Tech Startup Community)',
    date: new Date('2025-12-11T20:00:00'),
    endDate: new Date('2025-12-11T21:00:00'),
    location: 'Baguio City',
    description: 'A demo-first event where builders and pros show off working AI products and creative, hands-on workflows.',
    imageUrl: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/594074759_1433066438826568_1602336775394415177_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nu_3t1OYRlkQ7kNvwG0QhfM&_nc_oc=AdmI3vnIwy-r1PyZE8PuOyAG8u5XmuuIpm1oWPaeJtYU-8utFwimiMonSVtqaC7k0C0&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=ax73YSRxkfDtQp_wcNWpCw&oh=00_AfmI5Vd6McmK0puZ3P8V201Hl_5eXF45zstXl21_Oc4ZVQ&oe=6938A54B',
    tags: ['Workshop', 'Tech', 'AI'],
    link: 'https://luma.com/S8-AI-ShowAndTell',
    learnMoreLink: 'https://www.facebook.com/share/p/1QB6rFDCtH/',
    organizerId: 'geeks-on-a-beach'
  }
];

export const communityNews: NewsItem[] = [
  {
    id: 'news-3',
    title: 'Congratulations to the Champions of the Baguio Smart City Convergence 2025',
    date: 'Dec 12, 2025',
    excerpt: 'As we continue building a smarter, more resilient, and more people-centered Baguio City, we proudly celebrate the outstanding students and innovators who showcased brilliance, creativity, and purpose-driven innovation.',
    imageUrl: 'https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/593866385_1194754472440128_8684342725486940305_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fBG0SJYY7eEQ7kNvwE7upr7&_nc_oc=AdnN5XA-Yg0uQREeyTIp8RifdaB1P1yBGsCn4gsF3phjBw_gjUVa8YR1gENY25gEiso&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=1JeXtCGJWEN2rNdNqsdbcA&oh=00_AflnWr7diND7v0__Wj728vfpfbcROX0kwMXgMm2MHnfSAw&oe=69385205',
    link: 'https://www.facebook.com/share/p/1AXJ2Sq43P/',
    source: 'Facebook'
  },
  {
    id: 'news-2',
    title: 'Auscultate Wins 1st Runner Up in PSC10!',
    date: 'Dec 05, 2025',
    excerpt: 'Warmest congratulations to Auscultate from the Cordillera Administrative Region for achieving 1st Runner Up in the Philippine Startup Challenge 10! ✨👏🏻🥳 Your innovation, dedication, and passion for creating impactful solutions truly shine. This achievement is a testament to your hard work, creativity, and commitment to making a difference in the startup ecosystem. 🫶🏻🥳✨ The Cordillera region and the entire Philippine startup community are proud of your success. Keep pushing boundaries, keep innovating, and continue inspiring others with your vision. Well done, Auscultate this is only the beginning! 🚀🥳',
    imageUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/594904505_875149501752867_2697425006317580049_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHTc-lRB91bWOFGtGystWM9rgUUukEnby2uBRS6QSdvLXHb1CF1PTfU7Wq_vTJhIGFAN8Alumqxd7zPPdXs5KDs&_nc_ohc=KYp2uAbNK5UQ7kNvwHzrtbn&_nc_oc=Adm7VSI3EvjwcyeNFUx1z0qxCLZf9jPaOTlyWsBJ4U_jhsBlYdj4U2Se_YiTzc9_Bww&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=m8usIRKO_yjqxfSmQbHepw&oh=00_Afmidx4ogcJwDO_g5KSlxJYd8d5fF7ajwCm38VXkGPu29A&oe=69376414',
    link: 'https://www.facebook.com/photo/?fbid=875149498419534&set=a.131590669442091',
    source: 'Facebook'
  },
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
    id: 'circular-economy-experts',
    title: 'Call for Experts to Support the Development of the Circular Economy Taxonomy',
    organization: 'EU-PH Green Economy Partnership',
    amount: 'N/A',
    deadline: 'Dec 10, 2025',
    type: 'Call for Experts',
    description: 'Help shape the Philippines’ Sustainable Finance Taxonomy Guidelines Phase 2 #CircularEconomy objective by joining the Technical Expert Groups.',
    link: 'https://forms.gle/JZ6GRMGE5s2FujtD6',
    moreDetailsLink: 'https://www.greeneconomy.ph/event/call-for-sector-experts-join-the-technical-expert-groups-for-the-philippines-sustainable-finance-taxonomy-circular-economy-objective',
    bannerUrl: 'https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/590797299_122157486026653773_3356632794202583350_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YoPnenmtsjcQ7kNvwF6FrEE&_nc_oc=AdmUEnC6x7y3rLV_oe6mnN4OeZXUrHWhNip4F_XrnyWA-SrvNw6Pn0Umy0-JPLxCtUQ&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=a1Jr8QUQDJVAmPB6kAOSRw&oh=00_AfkDhCl6RSBNGphJ0C81_75t_VaqWJrd8msJlpGpEzH8DA&oe=69387EA7'
  },
  {
    id: 'award-1',
    title: '1st Negosyong Matatag: MSME Disaster Resilience Awards',
    organization: 'DTI / Government',
    amount: 'Recognition',
    deadline: 'Jan 14, 2026',
    type: 'Awards',
    description: 'Nomination for MSME Disaster Resilience.',
    link: 'https://bit.ly/MatatagAwards',
    moreDetailsLink: 'https://www.facebook.com/share/p/17jdMgFnyt/'
  },
  {
    id: 'sea-europe-jfs-10',
    title: '10th SEA-Europe JFS Call',
    organization: 'SEA-Europe JFS',
    amount: 'Research Grant',
    deadline: 'See Link',
    type: 'Grant',
    description: 'Call for proposals for the 10th SEA-Europe Joint Funding Scheme (JFS) for Research and Innovation.',
    link: 'https://www.sea-europe-jfs.eu/news/call-topics-10th-sea-europe-call-have-been-decided',
    moreDetailsLink: 'https://www.sea-europe-jfs.eu/news/call-topics-10th-sea-europe-call-have-been-decided',
    bannerUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/594006707_1291506866354883_4364297823398538100_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=867WxeU1UNkQ7kNvwGQbXSg&_nc_oc=Adlm5utQ5dio4LE9skXpGzkdTedYy-UTUdb42Is1f9a3Wr4Jw6JdZZLVemOn_Wj-Jd4&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=23tbitLJtjrU63MhJjUO9g&oh=00_Afnj1URkG1QHF9jil-ffVKzvuPfoVAmAiprbJbbFbn4H5A&oe=6938014C'
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

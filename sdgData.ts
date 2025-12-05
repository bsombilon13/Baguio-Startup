
export interface SDG {
  id: number;
  title: string;
  description: string;
  color: string;
  iconUrl: string;
  bannerKeyword: string;
  globalData: {
    stat: string;
    text: string;
  };
  targets: string[];
}

export const sdgs: SDG[] = [
  {
    id: 1,
    title: "No Poverty",
    description: "End poverty in all its forms everywhere.",
    color: "#E5243B",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-01-1024x1024.png",
    bannerKeyword: "poverty",
    globalData: {
      stat: "700M+",
      text: "People still live in extreme poverty, surviving on less than $2.15 a day."
    },
    targets: [
      "Eradicate extreme poverty for all people everywhere.",
      "Reduce at least by half the proportion of men, women and children living in poverty.",
      "Implement nationally appropriate social protection systems."
    ]
  },
  {
    id: 2,
    title: "Zero Hunger",
    description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
    color: "#DDA63A",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-02-1024x1024.png",
    bannerKeyword: "agriculture",
    globalData: {
      stat: "735M",
      text: "People face chronic hunger globally, a number that has risen since 2019."
    },
    targets: [
      "End hunger and ensure access by all people to safe, nutritious and sufficient food.",
      "End all forms of malnutrition.",
      "Double the agricultural productivity and incomes of small-scale food producers."
    ]
  },
  {
    id: 3,
    title: "Good Health and Well-being",
    description: "Ensure healthy lives and promote well-being for all at all ages.",
    color: "#4C9F38",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-03-1024x1024.png",
    bannerKeyword: "health",
    globalData: {
      stat: "400M",
      text: "People lack access to essential health services."
    },
    targets: [
      "Reduce the global maternal mortality ratio.",
      "End preventable deaths of newborns and children under 5 years of age.",
      "End the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases."
    ]
  },
  {
    id: 4,
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
    color: "#C5192D",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-04-1024x1024.png",
    bannerKeyword: "education",
    globalData: {
      stat: "244M",
      text: "Children and youth are out of school globally."
    },
    targets: [
      "Ensure that all girls and boys complete free, equitable and quality primary and secondary education.",
      "Ensure equal access for all women and men to affordable and quality technical education.",
      "Substantially increase the number of youth and adults who have relevant skills for employment."
    ]
  },
  {
    id: 5,
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls.",
    color: "#FF3A21",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-05-1024x1024.png",
    bannerKeyword: "women empowerment",
    globalData: {
      stat: "300",
      text: "Years away from achieving full gender equality at the current rate of progress."
    },
    targets: [
      "End all forms of discrimination against all women and girls everywhere.",
      "Eliminate all forms of violence against all women and girls in the public and private spheres.",
      "Ensure women’s full and effective participation and equal opportunities for leadership."
    ]
  },
  {
    id: 6,
    title: "Clean Water and Sanitation",
    description: "Ensure availability and sustainable management of water and sanitation for all.",
    color: "#26BDE2",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-06-1024x1024.png",
    bannerKeyword: "water",
    globalData: {
      stat: "2.2B",
      text: "People still lack access to safely managed drinking water services."
    },
    targets: [
      "Achieve universal and equitable access to safe and affordable drinking water for all.",
      "Achieve access to adequate and equitable sanitation and hygiene for all.",
      "Improve water quality by reducing pollution and minimizing release of hazardous chemicals."
    ]
  },
  {
    id: 7,
    title: "Affordable and Clean Energy",
    description: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
    color: "#FCC30B",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-07-1024x1024.png",
    bannerKeyword: "solar energy",
    globalData: {
      stat: "675M",
      text: "People live without electricity, mostly in sub-Saharan Africa."
    },
    targets: [
      "Ensure universal access to affordable, reliable and modern energy services.",
      "Increase substantially the share of renewable energy in the global energy mix.",
      "Double the global rate of improvement in energy efficiency."
    ]
  },
  {
    id: 8,
    title: "Decent Work and Economic Growth",
    description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
    color: "#A21942",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-08-1024x1024.png",
    bannerKeyword: "work",
    globalData: {
      stat: "5.8%",
      text: "Global unemployment rate projected for 2024."
    },
    targets: [
      "Sustain per capita economic growth in accordance with national circumstances.",
      "Achieve higher levels of economic productivity through diversification and innovation.",
      "Promote development-oriented policies that support productive activities."
    ]
  },
  {
    id: 9,
    title: "Industry, Innovation and Infrastructure",
    description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
    color: "#FD6925",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-09-1024x1024.png",
    bannerKeyword: "innovation technology",
    globalData: {
      stat: "3.7B",
      text: "People have no access to the internet, limiting their economic potential."
    },
    targets: [
      "Develop quality, reliable, sustainable and resilient infrastructure.",
      "Promote inclusive and sustainable industrialization.",
      "Increase the access of small-scale industrial and other enterprises to financial services."
    ]
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries.",
    color: "#DD1367",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-10-1024x1024.png",
    bannerKeyword: "equality",
    globalData: {
      stat: "10%",
      text: "Of global earners take home 52% of total global pay."
    },
    targets: [
      "Achieve and sustain income growth of the bottom 40 per cent of the population.",
      "Empower and promote the social, economic and political inclusion of all.",
      "Ensure equal opportunity and reduce inequalities of outcome."
    ]
  },
  {
    id: 11,
    title: "Sustainable Cities and Communities",
    description: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
    color: "#FD9D24",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-11-1024x1024.png",
    bannerKeyword: "city",
    globalData: {
      stat: "1B+",
      text: "People live in slums or informal settlements."
    },
    targets: [
      "Ensure access for all to adequate, safe and affordable housing and basic services.",
      "Provide access to safe, affordable, accessible and sustainable transport systems.",
      "Enhance inclusive and sustainable urbanization."
    ]
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns.",
    color: "#BF8B2E",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-12-1024x1024.png",
    bannerKeyword: "recycling",
    globalData: {
      stat: "1.3B",
      text: "Tonnes of food is wasted every year while millions go hungry."
    },
    targets: [
      "Implement the 10-year framework of programmes on sustainable consumption and production.",
      "Achieve the sustainable management and efficient use of natural resources.",
      "Halve per capita global food waste at the retail and consumer levels."
    ]
  },
  {
    id: 13,
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts.",
    color: "#3F7E44",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-13-1024x1024.png",
    bannerKeyword: "climate change",
    globalData: {
      stat: "1.1°C",
      text: "The amount global temperatures have already warmed above pre-industrial levels."
    },
    targets: [
      "Strengthen resilience and adaptive capacity to climate-related hazards.",
      "Integrate climate change measures into national policies, strategies and planning.",
      "Improve education, awareness-raising and human and institutional capacity."
    ]
  },
  {
    id: 14,
    title: "Life Below Water",
    description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
    color: "#0A97D9",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-14-1024x1024.png",
    bannerKeyword: "ocean",
    globalData: {
      stat: "17M",
      text: "Metric tons of plastic enter the ocean each year."
    },
    targets: [
      "Prevent and significantly reduce marine pollution of all kinds.",
      "Sustainably manage and protect marine and coastal ecosystems.",
      "Minimize and address the impacts of ocean acidification."
    ]
  },
  {
    id: 15,
    title: "Life on Land",
    description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
    color: "#56C02B",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-15-1024x1024.png",
    bannerKeyword: "forest",
    globalData: {
      stat: "10M",
      text: "Hectares of forest are destroyed every year."
    },
    targets: [
      "Ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems.",
      "Promote the implementation of sustainable management of all types of forests.",
      "Combat desertification, restore degraded land and soil."
    ]
  },
  {
    id: 16,
    title: "Peace, Justice and Strong Institutions",
    description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
    color: "#00689D",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-16-1024x1024.png",
    bannerKeyword: "justice",
    globalData: {
      stat: "108M",
      text: "People were forcibly displaced worldwide by the end of 2022."
    },
    targets: [
      "Significantly reduce all forms of violence and related death rates everywhere.",
      "End abuse, exploitation, trafficking and all forms of violence against and torture of children.",
      "Promote the rule of law at the national and international levels."
    ]
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    description: "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.",
    color: "#19486A",
    iconUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-17-1024x1024.png",
    bannerKeyword: "handshake",
    globalData: {
      stat: "$180B",
      text: "Official Development Assistance (ODA) reached an all-time high in 2022."
    },
    targets: [
      "Strengthen domestic resource mobilization.",
      "Developed countries to implement fully their official development assistance commitments.",
      "Mobilize additional financial resources for developing countries."
    ]
  }
];

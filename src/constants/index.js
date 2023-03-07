import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  tensor,
  figma,
  docker,
  cpp,
  python,
  bash,
  latex,
  meta,
  starbucks,
  revivn,
  baylight,
  csueb,
  tdk,
  amazon,
  chase,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  reddit_prj,
  drone,
  thinksoft,
  lstm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Robotics",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensor",
    icon: tensor,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "Latex",
    icon: latex,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Tech I",
    company_name: "Revivn Inc.",
    icon: revivn,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Diagnose and perform proper restoration to computer hardware.",
      "Configure and set up computer hardware and software.",
      "Assess and record configuration and restorations performed into the Revivn system.",
    ],
  },
  {
    title: "Research Student",
    company_name: "California State University - East Bay",
    icon: csueb,
    iconBg: "#383E56",
    date: "Aug 2022 - Present",
    points: [
      "Developing a Python application that analyzes reddit sentiment using VaderSentiment package.",
      "Analyze data pulled from reddit using ARIMA model which utilizes Tensorflow and Keras.",
    ],
  },
  {
    title: "Computer Tech",
    company_name: "Baylight Baptist Church",
    icon: baylight,
    iconBg: "#1F2C4D",
    date: "Dec 2021 - Present",
    points: [
      "Perform and setup event livestreams using streamLabs and ProPresenter.",
      "Quickly diagnose technical issues with the audio and video setup.",
      "Create visual arts for certain events.",
      "Create short videos/films for certain events and edit videos using Final Cut Pro.",
    ],
  },
  {
    title: "Covid Test Proctor",
    company_name: "Headway Technologies Inc.",
    icon: tdk,
    iconBg: "#383E56",
    date: "Jan 2022 - March 2022",
    points: [
      "Proctor testing of employees and staff at the site.",
      "Assure the testing protocol is implemented with fidelity.",
      "Perform, monitor, and track employee and staff antigen COVID-19 testing.",
    ],
  },
  {
    title: "Warehouse Associate",
    company_name: "Amazon OAK5",
    icon: amazon,
    iconBg: "#FFFFFF",
    date: "Dec 2019 - June 2020",
    points: [
      "Receive and prepare inventory for delivery.",
      "Use technology like smartphones and handheld devices to sort, scan, and prepare orders.",
      "Build, wrap, sort, and transport pallets and packages.",

    ],
  },
  {
    title: "Front Desk Associate",
    company_name: "Chase Suite Hotel - Newark",
    icon: chase,
    iconBg: "#FFFFFF",
    date: "May 2019 - Dec 2019",
    points: [
      "Managed 4-line phone system to answer, screen, and forward calls.",
      "Provided customer service excellence by answering questions, resolving issues, and scheduling bookings.",
      "Managed the front desk, greeted 20+ daily guests, and responded to requests for information and bookings.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "some words to say",
    name: "Name of commentor",
    designation: "position of commentor",
    company: "their company",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Stocks Reddit Sentiment",
    description:
      "Built a Python program that can analyze Reddit sentiment on stocks using Sentiment Intensity Analyzer from Vader package and project trends of top stocks for predicting future price action.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "vaderSentiment",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: reddit_prj,
    source_code_link: "https://github.com/mrsamsonn/Stocks_Reddit_Sentiment_Analysis",
  },
  {
    name: "Beaglebone Drone",
    description:
      "Built a drone by configuring a Beaglebone Blue as a Flight Control Unit using Ardupilot and added FPV function by utilizing OpenCV and open source packages.",
    tags: [
      {
        name: "beaglebone",
        color: "blue-text-gradient",
      },
      {
        name: "ardupilot",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: drone,
    source_code_link: "https://github.com/mrsamsonn/Beaglebone_Drone_Documentation",
  },
  {
    name: "ThinkSoft",
    description:
      "Built a Bash Script that can collect, retrieve, and send device hardware attributes into a server via API for inventory bookkeeping.",
    tags: [
      {
        name: "bash-shell",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: thinksoft,
    source_code_link: "https://github.com/mrsamsonn/ThinkSoft-no-API-",
  },
  {
    name: "LSTM",
    description:
      "A python program that uses the LSTM (Long Short Term Memory Networks) model to create crypto/stock price prediction using price action history.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: lstm,
    source_code_link: "https://github.com/mrsamsonn/LTSM_Crypto",
  },
];

export { services, technologies, experiences, testimonials, projects };

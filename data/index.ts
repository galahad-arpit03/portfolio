import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I keen on building beautiful and functional websites",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/developer.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an online banking  platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Website - Next.Js",
    des: "A modern portfolio website built with Next.js, Tailwind CSS and Typescript",
    img: "/Portfolio.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "E-commerce Website with Next.Js",
    des: "A modern e-commerce website built with Next.js, Tailwind CSS , Typescript and Clerk",
    img: "/ecommerce.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Attendance Management System with Next.Js",
    des: "A modern attendance management system built with Next.js, Tailwind CSS and MongoDB",
    img: "/AMS.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Alumni Management System with PHP and MySQL",
    des: "A modern alumni management system built with PHP, MySQL and Bootstrap",
    img: "/Alumni.jpeg",
    iconLists: [],
    link: "/ui.apple.com",
  },
  {
    id: 5,
    title: "Learning Management System with React",
    des: "Learning Management System built with React, Tailwind CSS and Firebase",
    img: "/LMS.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 6,
    title: "Facebook Clone ",
    des: "Facebook Clone built with React",
    img: "/face.jpeg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 7,
    title: "Instagram Clone",
    des: "Instagram Clone Frontend build with HTML, CSS and JS",
    img: "/instagram.jpeg",
    iconLists: [],
    link: "/ui.apple.com",
  },
  {
    id: 8,
    title: "Spotify Clone",
    des: "a Spotify Clone built with React, Tailwind CSS and Spotify API",
    img: "/spotify.jpeg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "I achieved the 3rd highest rank in my 5th semester, reflecting my dedication and consistent hard work. This accomplishment highlights my commitment to academic excellence and my ability to excel in a competitive environment.",
    name: "",
    title: "",
  },
  {
    quote:
      "I proudly represented our college in the state selection tournament for basketball, showcasing my athletic skills, teamwork, and determination. This experience demonstrated my ability to excel in sports and my commitment to representing my college at a high level.",
    name: "",
    title: "",
  },
  {
    quote:
      "I coordinated various events at a national level fest, demonstrating my organizational abilities, leadership skills, and commitment to extracurricular activities. This experience allowed me to effectively manage teams, handle logistics, and ensure the successful execution of multiple events.",
    name: "",
    title: "",
  },
  {
    quote:
      "I am a Google Certified UI and UX Designer, having completed comprehensive training that underscores my proficiency in creating user-friendly and visually appealing interfaces. This certification demonstrates my expertise in user experience principles, design thinking, and my commitment to maintaining high standards in digital design.",
    name: "",
    title: "",
  },
  {
    quote:
      "I have completed numerous certifications in my key skills, training under various instructors from renowned colleges and companies, including IBM. These certifications highlight my dedication to continuous learning and proficiency in diverse areas, ensuring I stay updated with industry standards and best practices.",
    name: "",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/galahad-arpit03",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/_galahad03",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/galahad-arpit/",
  },
];

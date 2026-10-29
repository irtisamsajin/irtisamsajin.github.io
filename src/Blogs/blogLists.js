/* 
  With link

  {
      title: "",
      date: "",
      description: "",
      topics: [],
      link: "",
      website: ""
  }
*/

/*
    With slug
    
  {
      title: "",
      date: "",
      description: "",
      topics: [],
      slug: ""
  }

*/

const topics=["Embedded Systems","C Programming","Software Development","Medium article","LinkedIn article"];

const blogLists=[
  {
      title: "Build and Flash your Bare-Metal Firmware",
      date: "October 28, 2026",
      description: "Understanding how you can build and flash your bare-metal firmware on an STM32 microcontroller using the ARM GNU Toolchain and OpenOCD, while also exploring the different stages of the development cycle.",
      topics: ["Medium article","Embedded Systems","C Programming",],
      link: "https://medium.com/@irtisamsajin/build-and-flash-your-bare-metal-firmware-cccc32a780bf",
      website: "Medium"
  },
  {
      title: "Deploying your MERN project on Vercel and Render",
      date: "December 24, 2023",
      description: "",
      topics: ["Software Development","LinkedIn article"],
      link: "https://www.linkedin.com/pulse/deploying-your-mern-project-vercel-render-mohammed-irtisam-sajin-xajmc/",
      website: "LinkedIn"
  }
];



export {blogLists,topics}
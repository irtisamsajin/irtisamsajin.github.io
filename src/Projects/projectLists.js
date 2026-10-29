
  /* {
      title: "",
      date: "",
      description: ``,
      topics: [],
      slug: ""
  } */

const topics=["Machine Learning","Software Development","Microcontroller","Embedded","FPGA","Open Source Contribution","Chrome Extension","Full-Stack","Verilog","Electronics","MATLAB"];

const projectList=[
  {
    title: "PATHOK: A Bangla Handwritten and Scene Text Recognition Model using Grapheme Tokenization",
    date: "June 2026",
    description: `Our undergraduate thesis where we worked on building a Bangla text recognition model that could capture texts from Handwritten images and Scene texts.`,
    topics: ["Machine Learning"],
    slug: "pathok"
  },
  {
      title: "Open Source Contribution to Zulip",
      date: "",
      description: `Reported and fixed an issue on the main Zulip server that was causing errors when forwarding missed
messages to user's emails.`,
      topics: ["Software Development","Open Source Contribution"],
      slug: "fix-forwarding-emails-missed-messages"
  },
  {
      title: "Multitask learning for segmentation and classification of breast tumors from ultrasound images",
      date: "",
      description: `A unified machine learning model that can simultaneously handle segmentation of Breast tumors from an Ultrasound image and also classify the tumor as Normal, Benign or Malignant.`,
      topics: ["Machine Learning"],
      slug: "multitask-segmentation-classification-breast-tumor"
  },
  {
      title: "Currency Converter Chrome Extension",
      date: "",
      description: `A real-time currency converter chrome extension with 200+ active users. Supports 170+ currencies for conversion. `,
      topics: ["Software Development","Chrome Extension"],
      slug: "currency-converter"
  },
  {
      title: "Electronic Voting Machine with Fingerprint Authentication",
      date: "",
      description: `A fingerprint-authenticated electronic voting machine (EVM), which leverages Arduino-based microcontrollers for secure vote casting and live vote count tracking. `,
      topics: ["Microcontroller","Embedded"],
      slug: "evm"
  },
  {
      title: "Mechanical Braille Cell using FPGA Board",
      date: "",
      description: `A low-cost refreshable 6-pin Braille cell, built using servo motors and logic circuits.
      Prototype was tested using FPGA board by programming in Verilog, to control the motors and integrated circuits.`,
      topics: ["FPGA","Verilog"],
      slug: "mechanical-braille-cell"
  },
  {
      title: "Thoughts - A quick and simple tool to save your thoughts",
      date: "",
      description: `A full-stack (MERN) Web application to quickly save your thoughts.`,
      topics: ["Software Development","Full-Stack"],
      slug: "thoughts"
  },
  {
      title: "Analog Signal Encoding using Delta Modulation and Demodulation",
      date: "",
      description: `Simulation and hardware implementation of Delta Modulation and Demodulation, designed using integrated circuits.`,
      topics: ["Electronics"],
      slug: "delta-modulation"
  },
  {
      title: "Three-Body Dynamics: Modeling the Interactions of Point Particles",
      date: "",
      description: `2-D & 3-D motion and energy simulations of three gravitational objects, based on user-defined initial
3D positions and velocities.`,
      topics: ["MATLAB"],
      slug: "three-body-simulation"
  }
  
];



export {projectList,topics}
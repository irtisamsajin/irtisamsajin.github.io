const topics=["Embedded","Programming","Software","Misc","Life","C","C++","Medium"];

/* const projectList=[

]; */

const projectList=[
    {
    title: "Writing Cleaner JavaScript",
    date: "January 2025",
    description: `Readable code is easier to debug, review, and maintain over time.
This article covers simple techniques for reducing duplication and organizing JavaScript more clearly.
It also looks at naming, function design, and small structural improvements that make code easier to understand.`,
    topics: ["Programming", "Software"],
    slug: "writing-cleaner-javascript"
  },
  {
    title: "A Practical Guide to Git Branching",
    description: `Git branches make it possible to develop features without constantly changing the main codebase.
This article explains how to create branches, merge work, resolve conflicts, and keep history manageable.
The examples focus on workflows that work well for both individual and team projects.`,
    topics: ["Software", "Programming"],
    slug: "practical-guide-to-git-branching"
  },
  {
    title: "Pointers Without the Confusion",
    description: `Pointers are powerful, but they can feel confusing when first learning C.
This article explains addresses, dereferencing, pointer variables, and pointer arithmetic in simple terms.
It also shows how pointers relate to arrays, functions, and dynamic memory.`,
    topics: ["C", "Programming"],
    slug: "pointers-without-the-confusion"
  },
  {
    title: "Building a Simple Device Driver",
    description: `Device drivers provide a clean interface between application code and hardware.
This article walks through the basic structure of a small embedded driver and explains its main responsibilities.
It also discusses initialization, configuration, data transfer, and hardware abstraction.`,
    topics: ["Embedded", "C", "Software"],
    slug: "building-a-simple-device-driver"
  },
  {
    title: "Why Software Architecture Matters",
    description: `Software architecture becomes increasingly important as a project grows in size and complexity.
This article looks at how good architectural decisions can improve maintainability, testing, and scalability.
It also explains why structure matters even when the individual pieces of code are relatively simple.`,
    topics: ["Software", "Programming"],
    slug: "why-software-architecture-matters"
  },
  {
    title: "RAII Explained in C++",
    description: `RAII is one of the most important resource-management techniques in C++.
This article explains how object lifetime can be used to manage memory, files, locks, and other resources automatically.
It also shows why RAII helps reduce leaks and makes exception-safe code easier to write.`,
    topics: ["C++", "Programming"],
    slug: "raii-explained-in-cpp"
  }
]

export {projectList,topics}
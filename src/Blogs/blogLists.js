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

const topics=["Embedded Systems","Programming","Software","Misc","Life","C Programming","C++","Medium article"];

const blogLists=[
  {
      title: "Build and Flash your Bare-Metal Firmware",
      date: "28 October, 2026",
      description: "Understand how bare-metal firmware are built and flashed using the ARM GNU Toolchain and OpenOCD, while exploring the different stages of the development cycle.",
      topics: ["Medium article","Embedded Systems","C Programming",],
      link: "https://medium.com/@irtisamsajin/build-and-flash-your-bare-metal-firmware-cccc32a780bf",
      website: "Medium"
  }
];

//temporary
/* const blogLists = [
  {
    title: "Getting Started with Embedded Systems",
    date: "January 5, 2026",
    description: `Embedded systems are all around us, from household appliances to industrial machines.
This article introduces the basic ideas behind microcontrollers, peripherals, and firmware development.
It also looks at the common tools and workflows used when building embedded applications.`,
    topics: ["Embedded", "Programming"],
    slug: "getting-started-with-embedded-systems"
  },
  {
    title: "Understanding Memory in C",
    date: "2026-01-12",
    topics: ["C", "Programming"],
    slug: "understanding-memory-in-c"
  },
  {
    title: "Modern C++ Features Worth Using",
    date: "2026-01-19",
    description: `Modern C++ provides many features that make programs safer and easier to maintain.
This article explores useful language features such as type inference, smart pointers, range-based loops, and move semantics.
The focus is on practical features that can improve everyday C++ development.`,
    topics: ["C++", "Programming", "Software"],
    website: "Medium.com",
    link: "https://github.com/irtisamsajin"
  },
  {
    title: "How Interrupts Work in Microcontrollers",
    date: "2026-01-26",
    description: `Interrupts allow a microcontroller to respond quickly when important events occur.
This article explains how interrupt handlers work and how hardware can temporarily interrupt normal program execution.
It also discusses common situations where interrupts are useful in embedded applications.`,
    topics: ["Embedded", "C"],
    slug: "how-interrupts-work-in-microcontrollers"
  },
  {
    title: "Writing Cleaner JavaScript",
    date: "2026-02-02",
    description: `Readable code is easier to debug, review, and maintain over time.
This article covers simple techniques for reducing duplication and organizing JavaScript more clearly.
It also looks at naming, function design, and small structural improvements that make code easier to understand.`,
    topics: ["Programming", "Software"],
    slug: "writing-cleaner-javascript"
  },
  {
    title: "A Practical Guide to Git Branching",
    date: "2026-02-09",
    description: `Git branches make it possible to develop features without constantly changing the main codebase.
This article explains how to create branches, merge work, resolve conflicts, and keep history manageable.
The examples focus on workflows that work well for both individual and team projects.`,
    topics: ["Software", "Programming"],
    slug: "practical-guide-to-git-branching"
  },
  {
    title: "Pointers Without the Confusion",
    date: "2026-02-16",
    description: `Pointers are powerful, but they can feel confusing when first learning C.
This article explains addresses, dereferencing, pointer variables, and pointer arithmetic in simple terms.
It also shows how pointers relate to arrays, functions, and dynamic memory.`,
    topics: ["C", "Programming"],
    slug: "pointers-without-the-confusion"
  },
  {
    title: "Building a Simple Device Driver",
    date: "2026-02-23",
    description: `Device drivers provide a clean interface between application code and hardware.
This article walks through the basic structure of a small embedded driver and explains its main responsibilities.
It also discusses initialization, configuration, data transfer, and hardware abstraction.`,
    topics: ["Embedded", "C", "Software"],
    slug: "building-a-simple-device-driver"
  },
  {
    title: "Why Software Architecture Matters",
    date: "2026-03-02",
    description: `Software architecture becomes increasingly important as a project grows in size and complexity.
This article looks at how good architectural decisions can improve maintainability, testing, and scalability.
It also explains why structure matters even when the individual pieces of code are relatively simple.`,
    topics: ["Software", "Programming"],
    slug: "why-software-architecture-matters"
  },
  {
    title: "RAII Explained in C++",
    date: "2026-03-09",
    description: `RAII is one of the most important resource-management techniques in C++.
This article explains how object lifetime can be used to manage memory, files, locks, and other resources automatically.
It also shows why RAII helps reduce leaks and makes exception-safe code easier to write.`,
    topics: ["C++", "Programming"],
    slug: "raii-explained-in-cpp"
  },
  {
    title: "My Favorite Programming Habits",
    date: "2026-03-16",
    description: `Small habits can have a surprisingly large effect on programming quality.
This article collects several practices that help me write clearer code and spend less time debugging.
The focus is on simple habits that can be applied consistently without adding unnecessary complexity.`,
    topics: ["Life", "Programming"],
    slug: "my-favorite-programming-habits"
  },
  {
    title: "Understanding Bitwise Operations",
    date: "2026-03-23",
    description: `Bitwise operations make it possible to manipulate individual bits inside integer values.
This article explains AND, OR, XOR, shifts, and masks using practical examples.
It also shows why these operations are especially useful in systems and embedded programming.`,
    topics: ["Programming", "C", "Embedded"],
    slug: "understanding-bitwise-operations"
  },
  {
    title: "UART Communication from Scratch",
    date: "2026-03-30",
    description: `UART is one of the simplest and most widely used serial communication protocols.
This article explains baud rates, start and stop bits, framing, and transmitting bytes between devices.
It also shows how UART is commonly used for debugging and communication in embedded projects.`,
    topics: ["Embedded", "C"],
    slug: "uart-communication-from-scratch"
  },
  {
    title: "Structs and Unions in C",
    date: "2026-04-06",
    description: `Structs and unions both allow related data to be grouped together in C.
This article explains how they differ in memory layout and behavior.
It also discusses practical situations where each type is useful, especially in low-level programming.`,
    topics: ["C", "Programming"],
    slug: "structs-and-unions-in-c"
  },
  {
    title: "Debugging C++ Programs Effectively",
    date: "2026-04-13",
    description: `Debugging C++ programs often requires understanding both program logic and memory behavior.
This article explores techniques for finding crashes, memory errors, and incorrect program state.
It also discusses tools and habits that can make debugging faster and more systematic.`,
    topics: ["C++", "Programming", "Software"],
    slug: "debugging-cpp-programs-effectively"
  },
  {
    title: "What Makes an API Good",
    date: "2026-04-20",
    description: `A good API should be easy to understand and difficult to misuse.
This article discusses naming, consistency, documentation, error handling, and interface stability.
It also looks at how thoughtful API design can reduce complexity for everyone using the software.`,
    topics: ["Software", "Programming"],
    slug: "what-makes-an-api-good"
  },
  {
    title: "Learning Through Small Projects",
    date: "2026-04-27",
    description: `Small projects are a useful way to turn theoretical knowledge into practical experience.
This article explains why focused projects can teach programming concepts more effectively than passive study alone.
It also discusses how to choose projects that are challenging without becoming overwhelming.`,
    topics: ["Life", "Programming"],
    slug: "learning-through-small-projects"
  },
  {
    title: "Timers in Embedded Systems",
    date: "2026-05-04",
    description: `Hardware timers are an essential part of most microcontrollers.
This article explains how timers can generate delays, measure events, schedule tasks, and produce PWM signals.
It also introduces common timer concepts such as counters, prescalers, and compare registers.`,
    topics: ["Embedded", "C"],
    slug: "timers-in-embedded-systems"
  },
  {
    title: "Dynamic Memory Allocation in C",
    date: "2026-05-11",
    description: `Dynamic memory allows a program to request storage while it is running.
This article explains malloc, calloc, realloc, and free, along with the responsibilities that come with using them.
It also discusses memory leaks, dangling pointers, and other common allocation mistakes.`,
    topics: ["C", "Programming"],
    slug: "dynamic-memory-allocation-in-c"
  },
  {
    title: "Templates in C++ Made Simple",
    date: "2026-05-18",
    description: `Templates allow C++ code to work with many different types without duplicating implementation.
This article introduces function templates and class templates through simple examples.
It also explains how templates form the foundation of generic programming and much of the standard library.`,
    topics: ["C++", "Programming"],
    slug: "templates-in-cpp-made-simple"
  },
  {
    title: "How I Organize Programming Notes",
    date: "2026-05-25",
    description: `Programming notes are most useful when they are easy to find and revisit later.
This article describes how I organize explanations, code snippets, references, and debugging discoveries.
The goal is to keep useful information accessible without turning note-taking into a complicated system.`,
    topics: ["Misc", "Life"],
    slug: "how-i-organize-programming-notes"
  },
  {
    title: "SPI Communication Explained",
    date: "2026-06-01",
    description: `SPI is a fast synchronous communication protocol commonly used between microcontrollers and peripherals.
This article explains clock signals, data lines, chip select, and the relationship between controllers and devices.
It also discusses some practical advantages and limitations of SPI.`,
    topics: ["Embedded", "C"],
    slug: "spi-communication-explained"
  },
  {
    title: "Common C Programming Mistakes",
    date: "2026-06-08",
    description: `C gives programmers a great deal of control, but that control also makes certain mistakes easy to make.
This article covers common issues involving arrays, pointers, memory, and undefined behavior.
It also explains how careful coding practices can prevent many of these problems.`,
    topics: ["C", "Programming"],
    slug: "common-c-programming-mistakes"
  },
  {
    title: "Composition Over Inheritance",
    date: "2026-06-15",
    description: `Inheritance can be useful, but it can also create strong dependencies between classes.
This article explains why composition is often a more flexible way to reuse behavior.
It also compares the two approaches and discusses situations where each design makes sense.`,
    topics: ["Software", "C++", "Programming"],
    slug: "composition-over-inheritance"
  },
  {
    title: "Smart Pointers in Modern C++",
    date: "2026-06-22",
    description: `Smart pointers provide automatic resource management while still preserving clear ownership semantics.
This article explains unique_ptr, shared_ptr, and weak_ptr and how they differ from raw pointers.
It also discusses when each smart pointer should and should not be used.`,
    topics: ["C++", "Programming"],
    slug: "smart-pointers-in-modern-cpp"
  },
  {
    title: "Publishing My First Medium Article",
    date: "2026-06-29",
    description: `Publishing technical writing requires a different mindset from simply writing notes for yourself.
This article reflects on the process of choosing a topic, organizing ideas, editing the draft, and finally publishing it.
It also covers a few lessons I learned from sharing technical content publicly.`,
    topics: ["Medium", "Life"],
    slug: "publishing-my-first-medium-article"
  },
  {
    title: "I2C Communication for Beginners",
    date: "2026-07-06",
    description: `I2C allows multiple devices to communicate using only two main signal lines.
This article explains addressing, clock and data signals, acknowledgements, and basic transactions.
It also discusses why I2C is commonly used for sensors and other low-speed peripherals.`,
    topics: ["Embedded", "C"],
    slug: "i2c-communication-for-beginners"
  },
  {
    title: "Function Pointers in C",
    date: "2026-07-13",
    description: `Function pointers allow functions to be treated as values that can be stored and passed around.
This article explains their syntax and demonstrates callbacks, dispatch tables, and configurable behavior.
It also shows why function pointers are especially useful in low-level and embedded software.`,
    topics: ["C", "Programming", "Embedded"],
    slug: "function-pointers-in-c"
  },
  {
    title: "Writing Maintainable Software",
    date: "2026-07-20",
    description: `Maintainable software is easier to understand, modify, and debug as requirements change.
This article discusses naming, modularity, duplication, dependencies, and keeping responsibilities clear.
The goal is to make future changes less risky and less expensive.`,
    topics: ["Software", "Programming"],
    slug: "writing-maintainable-software"
  },
  {
    title: "Move Semantics in C++",
    date: "2026-07-27",
    description: `Move semantics allow C++ programs to transfer resources instead of unnecessarily copying them.
This article introduces rvalue references, move constructors, and move assignment operators.
It also explains when moving improves performance and how it fits into modern C++ design.`,
    topics: ["C++", "Programming"],
    slug: "move-semantics-in-cpp"
  },
  {
    title: "The Value of Reading Source Code",
    date: "2026-08-03",
    description: `Reading well-written source code provides a different kind of learning experience from tutorials.
This article discusses how studying real projects can improve style, debugging skills, and architectural thinking.
It also suggests ways to approach unfamiliar codebases without becoming lost.`,
    topics: ["Programming", "Software", "Life"],
    slug: "the-value-of-reading-source-code"
  },
  {
    title: "GPIO Fundamentals",
    date: "2026-08-10",
    description: `GPIO pins provide one of the simplest ways for a microcontroller to interact with the physical world.
This article explains digital input, digital output, pull-up resistors, and basic pin configuration.
It also looks at common use cases such as buttons, LEDs, and control signals.`,
    topics: ["Embedded"],
    slug: "gpio-fundamentals"
  },
  {
    title: "Preprocessor Macros in C",
    date: "2026-08-17",
    description: `The C preprocessor performs text processing before the compiler sees the final source code.
This article explains macros, conditional compilation, header guards, and include directives.
It also discusses situations where macros are useful and cases where safer alternatives are preferable.`,
    topics: ["C", "Programming"],
    slug: "preprocessor-macros-in-c"
  },
  {
    title: "Understanding Undefined Behavior",
    date: "2026-08-24",
    description: `Undefined behavior is one of the more surprising aspects of C and C++.
This article explains what it means and why code that appears reasonable can behave unpredictably.
It also looks at common sources of undefined behavior and techniques for avoiding them.`,
    topics: ["C", "C++", "Programming"],
    slug: "understanding-undefined-behavior"
  },
  {
    title: "Lessons from Refactoring Old Code",
    date: "2026-08-31",
    description: `Refactoring existing software often reveals problems that were difficult to notice when the code was first written.
This article discusses lessons learned while simplifying structure and reducing duplication.
It also looks at how to make gradual improvements without accidentally changing program behavior.`,
    topics: ["Software", "Programming"],
    slug: "lessons-from-refactoring-old-code"
  },
  {
    title: "Why I Keep a Technical Journal",
    date: "2026-09-07",
    description: `A technical journal creates a personal history of problems, experiments, and discoveries.
This article explains how I use one to record debugging sessions, ideas, useful commands, and project decisions.
Over time, those small notes become a useful reference for future work.`,
    topics: ["Life", "Misc"],
    slug: "why-i-keep-a-technical-journal"
  },
  {
    title: "Watchdog Timers Explained",
    date: "2026-09-14",
    description: `A watchdog timer can help an embedded system recover when software becomes stuck.
This article explains how watchdogs work, how software periodically resets them, and what happens when it fails to do so.
It also discusses how watchdogs contribute to more reliable embedded products.`,
    topics: ["Embedded", "Software"],
    slug: "watchdog-timers-explained"
  },
  {
    title: "Const Correctness in C and C++",
    date: "2026-09-21",
    description: `The const keyword communicates that certain values should not be modified.
This article explains how const applies to variables, pointers, function parameters, and member functions.
It also shows how consistent const usage can make interfaces safer and easier to understand.`,
    topics: ["C", "C++", "Programming"],
    slug: "const-correctness-in-c-and-cpp"
  },
  {
    title: "Building Better Command Line Tools",
    date: "2026-09-28",
    description: `Command-line tools are most useful when their behavior is predictable and easy to automate.
This article discusses arguments, error messages, exit codes, output formatting, and sensible defaults.
It also looks at small design choices that make tools more pleasant to use in scripts and terminals.`,
    topics: ["Programming", "Software"],
    slug: "building-better-command-line-tools"
  },
  {
    title: "Writing About Technical Topics",
    date: "2026-10-05",
    description: `Technical writing is about making difficult ideas understandable without removing the important details.
This article discusses structure, examples, terminology, and how to explain concepts in a logical order.
It also looks at ways to make technical articles useful for readers with different levels of experience.`,
    topics: ["Medium", "Programming", "Life"],
    slug: "writing-about-technical-topics"
  },
  {
    title: "Finite State Machines in Embedded Software",
    date: "2026-10-12",
    description: `Finite state machines provide a structured way to represent systems with several operating modes.
This article explains states, transitions, events, and how state machines can simplify control logic.
It also includes examples of where this pattern works especially well in embedded software.`,
    topics: ["Embedded", "Software", "C"],
    slug: "finite-state-machines-in-embedded-software"
  },
  {
    title: "Static Analysis for Safer Code",
    date: "2026-10-19",
    description: `Static analysis examines source code without needing to execute the program.
This article explains how these tools can detect suspicious constructs, incorrect assumptions, and potential defects.
It also discusses how static analysis can complement compilers, testing, and code review.`,
    topics: ["Software", "C", "C++"],
    slug: "static-analysis-for-safer-code"
  },
  {
    title: "Things I Wish I Knew Before Learning C",
    date: "2026-10-26",
    description: `Learning C becomes much easier once a few fundamental ideas start to connect together.
This article looks at concepts I wish I had understood earlier, including memory, pointers, compilation, and debugging.
It also covers habits that can make the learning process less frustrating and more productive.`,
    topics: [],
    slug: "things-i-wish-i-knew-before-learning-c"
  }
]; */

export {blogLists,topics}
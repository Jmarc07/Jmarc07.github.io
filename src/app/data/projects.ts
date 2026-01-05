export type ProjectDomain = 'AI' | 'Web' | 'Backend' | 'Frontend' | 'Mobile' | 'System' | 'Game' | 'Network' | 'Security' | 'Game Development' | 'Automation' | 'Functional Programming' | 'DevOps' | 'CI/CD' | 'Concurrency' | 'Parsing' | 'OOP' | 'Electronics' | 'Simulation' | 'Algorithms' | 'Automata' | 'Assembly' | 'Graphics' | 'Design Patterns' | 'Optimization' | 'Shell' | 'Virtual Machine' | 'UI';
export type ProjectContext = 'Personal' | 'Academic' | 'Freelance';

export interface Project {
  id: string;
  slug: string;
  name: string;
  domains: ProjectDomain[];
  context: ProjectContext;
  stack: string[];
  image: string;
  description: string;
  problem: string;
  solution: string;
  myRole: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'zappy-network-game',
    name: 'Zappy',
    domains: ['Network', 'System', 'Game', 'AI'],
    context: 'Academic',
    stack: ['C', 'Sockets', 'Networking', 'AI'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080',
    description: 'Multiplayer network game based on a client-server architecture with AI clients.',
    problem: 'Design a real-time multiplayer game requiring efficient network communication and synchronization between multiple AI clients.',
    solution: 'Implemented a server handling multiple AI clients using sockets, managing game logic, synchronization, and communication protocols.',
    myRole: 'Developer responsible for network communication, server logic, protocol handling, and AI client implementation.',
    featured: true
  },
  {
    id: '2',
    slug: 'myftp',
    name: 'MyFTP',
    domains: ['Network'],
    context: 'Academic',
    stack: ['C++', 'TCP/IP', 'Sockets'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080',
    description: 'FTP server implementation following the FTP protocol.',
    problem: 'Understand low-level network communication and protocol implementation.',
    solution: 'Implemented an FTP server handling multiple clients, commands parsing, authentication, and file transfers.',
    myRole: 'Developer responsible for server implementation and protocol handling.',
    featured: false
  },
  {
    id: '3',
    slug: 'mysudo',
    name: 'MySudo',
    domains: ['System', 'Security'],
    context: 'Academic',
    stack: ['C', 'Linux', 'System Calls'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1080',
    description: 'Reimplementation of the sudo command with permission management.',
    problem: 'Understand and replicate privilege escalation mechanisms in Unix System.',
    solution: 'Built a simplified sudo-like program handling user permissions, environment variables, and secure execution.',
    myRole: 'Developer responsible for system calls, permission checks, and security logic.',
    featured: false
  },
  {
    id: '4',
    slug: 'arcade-engine',
    name: 'Arcade',
    domains: ['Game', 'Game Development'],
    context: 'Academic',
    stack: ['C++', 'OOP', 'Ncurses', 'SFML', 'Dynamic Libraries'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1080',
    description: 'Modular arcade game engine supporting multiple games and graphics libraries.',
    problem: 'Create a flexible game engine capable of loading games and renderers dynamically.',
    solution: 'Designed a plugin-based architecture using dynamic libraries, allowing runtime switching of games and graphic engines.',
    myRole: 'Developer focused on engine architecture, interfaces, and game logic.',
    featured: true
  },
  {
    id: '5',
    slug: 'area-automation-platform',
    name: 'AREA',
    domains: ['Web', 'Automation', 'Mobile', 'Backend', 'Frontend'],
    context: 'Academic',
    stack: ['TypeScript', 'ReactNative', 'MYSQL', 'TailWind', 'Angular', 'Node.js', 'REST API'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080',
    description: 'Automation platform inspired by IFTTT, connecting services via triggers and actions.',
    problem: 'Create a scalable web platform allowing users to automate actions between multiple services.',
    solution: 'Developed a web application with service integrations, trigger/action logic, and API-based communication.',
    myRole: 'Front-end and API integration developer, focused on UI logic and service communication.',
    featured: true
  },
  {
    id: '6',
    slug: 'glados-functional-language',
    name: 'Glados',
    domains: ['Functional Programming'],
    context: 'Academic',
    stack: ['Haskell', 'Bytecode', 'Assembly'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080',
    description: 'Custom programming language implementation with bytecode compilation and assembly generation.',
    problem: 'Design and implement a complete programming language from scratch, including compiler and runtime.',
    solution: 'Built a compiler using Haskell that generates bytecode and assembly, implementing lexical analysis, parsing, and code generation.',
    myRole: 'Developer responsible for language design, compiler implementation, bytecode generation, and assembly output.',
    featured: false
  },
  {
    id: '7',
    slug: 'whanos-devops',
    name: 'Whanos',
    domains: ['DevOps'],
    context: 'Academic',
    stack: ['Shell', 'Docker', 'CI/CD'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1080',
    description: 'Automated build and deployment tool inspired by CI/CD pipelines.',
    problem: 'Automate application building, testing, and deployment.',
    solution: 'Built shell scripts to automate containerization and deployment workflows.',
    myRole: 'Developer responsible for automation scripts and pipeline logic.',
    featured: true
  },
  {
    id: '8',
    slug: 'professional-mobile-app',
    name: 'Professional Work',
    domains: ['Mobile'],
    context: 'Academic',
    stack: ['Dart', 'Flutter'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1080',
    description: 'Cross-platform mobile application developed with Flutter.',
    problem: 'Build a professional-grade mobile application with a clean UI and maintainable codebase.',
    solution: 'Implemented a responsive Flutter application with structured navigation and reusable components.',
    myRole: 'Mobile developer responsible for UI implementation and application structure.',
    featured: true
  },
  {
    id: '9',
    slug: 'mymarvin',
    name: 'MyMarvin',
    domains: ['DevOps', 'CI/CD'],
    context: 'Academic',
    stack: ['Groovy', 'Jenkins', 'Pipeline'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1080',
    description: 'CI/CD pipeline implementation using Groovy and Jenkins.',
    problem: 'Automate testing and deployment workflows for complex projects.',
    solution: 'Built a Jenkins pipeline with automated testing, build stages, and deployment automation.',
    myRole: 'DevOps developer responsible for pipeline design and automation scripts.',
    featured: false
  },
  {
    id: '10',
    slug: 'jetpack',
    name: 'Jetpack',
    domains: ['Network', 'System'],
    context: 'Academic',
    stack: ['C++', 'Sockets', 'TCP/IP'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080',
    description: 'Network programming project with advanced socket communication.',
    problem: 'Implement robust network communication with error handling and protocol management.',
    solution: 'Developed a client-server application using C++ sockets with custom protocol implementation.',
    myRole: 'Network developer responsible for protocol design and implementation.',
    featured: false
  },
  {
    id: '11',
    slug: 'theplazza',
    name: 'The Plazza',
    domains: ['System', 'Concurrency'],
    context: 'Academic',
    stack: ['C++', 'Multithreading', 'IPC'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080',
    description: 'Restaurant simulation with process and thread management.',
    problem: 'Handle concurrent pizza orders across multiple kitchens using inter-process communication.',
    solution: 'Implemented a multi-process/multi-threaded system with shared resources management and synchronization.',
    myRole: 'Developer focused on concurrency, IPC mechanisms, and resource management.',
    featured: true
  },
  {
    id: '12',
    slug: 'hydra',
    name: 'Hydra',
    domains: ['Security', 'Network'],
    context: 'Academic',
    stack: ['C', 'Cryptography', 'Network Security'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1080',
    description: 'Security-focused project exploring authentication and encryption.',
    problem: 'Understand network security vulnerabilities and implement secure communication.',
    solution: 'Developed tools for security analysis with encryption and authentication mechanisms.',
    myRole: 'Security developer responsible for cryptographic implementation.',
    featured: false
  },
  {
    id: '13',
    slug: 'panoramix',
    name: 'Panoramix',
    domains: ['System', 'Concurrency'],
    context: 'Academic',
    stack: ['C', 'Threads', 'Semaphores'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080',
    description: 'Multithreading simulation of a village of Gauls brewing magic potion.',
    problem: 'Synchronize multiple threads with shared resources (villagers, druids, potion).',
    solution: 'Used semaphores and mutexes to ensure thread-safe operations and avoid race conditions.',
    myRole: 'Developer responsible for thread synchronization and resource management.',
    featured: false
  },
  {
    id: '14',
    slug: 'mypandoc',
    name: 'MyPandoc',
    domains: ['Functional Programming', 'Parsing'],
    context: 'Academic',
    stack: ['Haskell', 'Parser', 'AST'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080',
    description: 'Document converter similar to Pandoc, supporting multiple markup formats.',
    problem: 'Parse and convert between different document formats (Markdown, XML, JSON).',
    solution: 'Implemented parsers and AST transformations in Haskell for document conversion.',
    myRole: 'Developer responsible for parser implementation and format conversion logic.',
    featured: false
  },
  {
    id: '15',
    slug: 'octopus',
    name: 'Octopus',
    domains: ['DevOps', 'Automation'],
    context: 'Academic',
    stack: ['Shell', 'Docker', 'Automation'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1080',
    description: 'DevOps automation tool for managing multiple services.',
    problem: 'Orchestrate deployment and management of multiple containerized services.',
    solution: 'Created automation scripts for service orchestration and deployment.',
    myRole: 'DevOps engineer responsible for automation and orchestration logic.',
    featured: false
  },
  {
    id: '16',
    slug: 'tekspice',
    name: 'Tekspice',
    domains: ['OOP', 'Electronics', 'Simulation'],
    context: 'Academic',
    stack: ['C++', 'OOP', 'Design Patterns'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080',
    description: 'Digital circuit simulator with logic gates and components.',
    problem: 'Simulate electronic circuits with various logic gates and components.',
    solution: 'Designed an OOP architecture with component abstraction, signal propagation, and circuit evaluation.',
    myRole: 'Developer focused on object-oriented design and simulation logic.',
    featured: true
  },
  {
    id: '17',
    slug: 'compressor',
    name: 'Compressor',
    domains: ['Functional Programming', 'Algorithms'],
    context: 'Academic',
    stack: ['Haskell', 'Compression', 'Huffman'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080',
    description: 'File compression tool using Huffman coding algorithm.',
    problem: 'Implement efficient file compression and decompression.',
    solution: 'Built a Huffman coding implementation in Haskell for lossless compression.',
    myRole: 'Developer responsible for algorithm implementation and file handling.',
    featured: false
  },
  {
    id: '18',
    slug: 'wolfram',
    name: 'Wolfram',
    domains: ['Functional Programming', 'Automata'],
    context: 'Academic',
    stack: ['Haskell', 'Cellular Automata'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080',
    description: 'Elementary cellular automaton generator (Wolfram rules).',
    problem: 'Generate and visualize elementary cellular automata based on Wolfram rules.',
    solution: 'Implemented cellular automaton simulation with configurable rules in Haskell.',
    myRole: 'Developer responsible for automaton logic and rule implementation.',
    featured: false
  },
  {
    id: '19',
    slug: 'asmminilibc',
    name: 'ASM MiniLibC',
    domains: ['System', 'Assembly'],
    context: 'Academic',
    stack: ['Assembly', 'x86-64', 'System Calls'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1080',
    description: 'Reimplementation of standard C library functions in x86-64 Assembly.',
    problem: 'Understand low-level system operations and assembly programming.',
    solution: 'Wrote core libc functions (strlen, strcpy, memcpy, etc.) in pure assembly.',
    myRole: 'Developer responsible for assembly implementation and optimization.',
    featured: false
  },
  {
    id: '20',
    slug: 'myrpg',
    name: 'MyRPG',
    domains: ['Game', 'Graphics'],
    context: 'Academic',
    stack: ['C', 'CSFML', 'Game Development'],
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1080',
    description: 'Role-playing game with inventory, combat, and quest systems.',
    problem: 'Create a complete RPG with game mechanics, UI, and save system.',
    solution: 'Developed a 2D RPG using CSFML with character progression, combat mechanics, and inventory management.',
    myRole: 'Game developer responsible for game logic, UI, and systems integration.',
    featured: true
  },
  {
    id: '21',
    slug: 'robotfactory',
    name: 'Robot Factory',
    domains: ['OOP', 'Design Patterns'],
    context: 'Academic',
    stack: ['C', 'OOP in C', 'Design Patterns'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1080',
    description: 'Robot assembly simulation using object-oriented programming in C.',
    problem: 'Implement OOP concepts and design patterns in C language.',
    solution: 'Created a factory pattern implementation for assembling robots with different parts.',
    myRole: 'Developer focused on OOP design and pattern implementation in C.',
    featured: false
  },
  {
    id: '22',
    slug: 'amazed',
    name: 'Amazed',
    domains: ['Algorithms', 'Optimization'],
    context: 'Academic',
    stack: ['C', 'Pathfinding', 'Graph Algorithms'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1080',
    description: 'Ant colony pathfinding simulation through a maze.',
    problem: 'Find optimal paths for multiple ants moving through a graph simultaneously.',
    solution: 'Implemented pathfinding algorithms with flow optimization to minimize total moves.',
    myRole: 'Developer responsible for algorithm implementation and optimization.',
    featured: false
  },
  {
    id: '23',
    slug: 'minishell2',
    name: 'Minishell 2',
    domains: ['System', 'Shell'],
    context: 'Academic',
    stack: ['C', 'Unix', 'Process Management'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1080',
    description: 'Advanced Unix shell with pipes, redirections, and built-in commands.',
    problem: 'Implement a fully functional shell with advanced features.',
    solution: 'Built a shell supporting pipes, redirections, environment variables, and job control.',
    myRole: 'Developer responsible for shell logic, parsing, and execution.',
    featured: true
  },
  {
    id: '24',
    slug: 'corewar',
    name: 'Corewar',
    domains: ['Virtual Machine', 'Assembly', 'AI'],
    context: 'Academic',
    stack: ['C', 'Virtual Machine', 'Assembly'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080',
    description: 'Virtual machine and assembler for a programming battle game.',
    problem: 'Create a VM executing programs that fight for memory control.',
    solution: 'Implemented a virtual machine, assembler, and champion AI for competitive programming.',
    myRole: 'Developer responsible for VM implementation and instruction execution.',
    featured: true
  },
  {
    id: '25',
    slug: '42sh',
    name: '42sh',
    domains: ['System', 'Shell'],
    context: 'Academic',
    stack: ['C', 'Unix', 'Advanced Shell'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1080',
    description: 'Advanced POSIX shell with scripting capabilities.',
    problem: 'Implement a complete POSIX-compliant shell with advanced features.',
    solution: 'Built a shell with control structures, functions, and advanced scripting support.',
    myRole: 'Developer responsible for parser, execution engine, and POSIX compliance.',
    featured: false
  },
  {
    id: '26',
    slug: 'mypaint',
    name: 'MyPaint',
    domains: ['Graphics', 'UI'],
    context: 'Academic',
    stack: ['C', 'CSFML', 'Image Processing'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080',
    description: 'Paint application with drawing tools and image manipulation.',
    problem: 'Create a graphical paint application with various tools and effects.',
    solution: 'Implemented a paint program with brushes, shapes, layers, and image filters.',
    myRole: 'Developer responsible for graphics rendering and tool implementation.',
    featured: false
  },
  {
    id: '27',
    slug: 'navy',
    name: 'Navy',
    domains: ['Game', 'Network'],
    context: 'Academic',
    stack: ['C', 'Signals', 'IPC'],
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1080',
    description: 'Battleship game using Unix signals for inter-process communication.',
    problem: 'Implement a two-player game communicating only through Unix signals.',
    solution: 'Built a battleship game where processes communicate via SIGUSR1 and SIGUSR2.',
    myRole: 'Developer responsible for signal handling and game logic.',
    featured: false
  },
  {
    id: '28',
    slug: 'myradar',
    name: 'MyRadar',
    domains: ['Graphics', 'Simulation'],
    context: 'Academic',
    stack: ['C', 'CSFML', 'Simulation'],
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1080',
    description: 'Air traffic control radar simulation with aircraft management.',
    problem: 'Simulate an air traffic control system with collision detection.',
    solution: 'Created a real-time simulation displaying aircraft trajectories and managing conflicts.',
    myRole: 'Developer responsible for simulation logic and graphics rendering.',
    featured: false
  },
  {
    id: '29',
    slug: 'myhunter',
    name: 'MyHunter',
    domains: ['Game', 'Graphics'],
    context: 'Academic',
    stack: ['C', 'CSFML', 'Game Development'],
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1080',
    description: 'Duck Hunt-style shooting game with score system.',
    problem: 'Create a complete game with sprites, animations, and event handling.',
    solution: 'Developed a shooting game with moving targets, scoring, and difficulty progression.',
    myRole: 'Game developer responsible for gameplay mechanics and graphics.',
    featured: false
  },
  {
    id: '30',
    slug: 'sokoban',
    name: 'Sokoban',
    domains: ['Game', 'Algorithms'],
    context: 'Academic',
    stack: ['C', 'Ncurses', 'Pathfinding'],
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1080',
    description: 'Terminal-based Sokoban puzzle game with level system.',
    problem: 'Implement the classic Sokoban puzzle game with map parsing and game logic.',
    solution: 'Built a complete Sokoban game using ncurses with move validation and win detection.',
    myRole: 'Game developer responsible for game logic and terminal interface.',
    featured: false
  }
];

export const getDomains = (): ProjectDomain[] => {
  return ['Web', 'Backend', 'Frontend', 'Mobile', 'System', 'Security', 'Game', 'Network', 'AI', 'DevOps'];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectsByDomain = (domain: ProjectDomain | 'All'): Project[] => {
  if (domain === 'All') return projects;
  return projects.filter(p => p.domains.includes(domain));
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

export type ProjectDomain = 'AI' | 'Web' | 'Backend' | 'Frontend' | 'Mobile' | 'System' | 'Game' | 'Network' | 'Systems' | 'Security' | 'Game Development' | 'Automation' | 'Functional Programming' | 'DevOps';
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
    domains: ['Network', 'Systems', 'Game', 'AI'],
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
    domains: ['Systems', 'Security'],
    context: 'Academic',
    stack: ['C', 'Linux', 'System Calls'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1080',
    description: 'Reimplementation of the sudo command with permission management.',
    problem: 'Understand and replicate privilege escalation mechanisms in Unix systems.',
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
  }
];

export const getDomains = (): ProjectDomain[] => {
  return ['Web', 'Backend', 'Frontend', 'Mobile', 'System','Security', 'Game', 'Network', 'AI', 'DevOps'];
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

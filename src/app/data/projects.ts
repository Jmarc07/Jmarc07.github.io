export type ProjectDomain = 'Web' | 'Backend' | 'Frontend' | 'Mobile' | 'System' | 'Game' | 'Network';
export type ProjectContext = 'Personal' | 'Academic' | 'Freelance';

export interface Project {
  id: string;
  slug: string;
  name: string;
  domain: ProjectDomain;
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
    slug: 'ecommerce-platform',
    name: 'E-Commerce Platform',
    domain: 'Web',
    context: 'Freelance',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY3MjE3OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
    problem: 'Client needed a scalable online store with inventory management and secure payment processing.',
    solution: 'Built a modern React frontend with Node.js backend, implementing JWT authentication, Stripe payment gateway, and real-time inventory updates using WebSockets.',
    myRole: 'Full-stack developer responsible for architecture design, API development, payment integration, and deployment on AWS.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    featured: true
  },
  {
    id: '2',
    slug: 'api-gateway-service',
    name: 'API Gateway Service',
    domain: 'Backend',
    context: 'Professional',
    stack: ['Go', 'Redis', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1641156803026-0b819059b04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjczMjY5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High-performance API gateway with rate limiting and caching',
    problem: 'Microservices architecture needed a centralized gateway for routing, authentication, and rate limiting.',
    solution: 'Developed a Go-based API gateway with Redis caching, JWT validation, and distributed rate limiting. Achieved 10,000+ requests/second throughput.',
    myRole: 'Backend engineer focused on performance optimization, implementing caching strategies, and writing comprehensive unit tests.',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '3',
    slug: 'fitness-tracking-app',
    name: 'Fitness Tracking App',
    domain: 'Mobile',
    context: 'Personal',
    stack: ['React Native', 'Firebase', 'Redux'],
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjcyMzcxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Cross-platform mobile app for tracking workouts and nutrition',
    problem: 'Wanted to create a user-friendly fitness app that works offline and syncs data when online.',
    solution: 'Built with React Native for cross-platform compatibility, integrated Firebase for backend services, and implemented offline-first architecture with local SQLite storage.',
    myRole: 'Solo developer handling all aspects: design, development, testing, and deployment to App Store and Play Store.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    featured: true
  },
  {
    id: '4',
    slug: 'real-time-chat-system',
    name: 'Real-Time Chat System',
    domain: 'Network',
    context: 'Academic',
    stack: ['WebSocket', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1758410473603-616660032c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBuZXR3b3JrfGVufDF8fHx8MTc2NzMyNjkxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Scalable chat application with real-time messaging and file sharing',
    problem: 'University project requiring implementation of a distributed chat system with low latency.',
    solution: 'Implemented WebSocket-based real-time communication with message queuing, horizontal scaling support, and end-to-end encryption for security.',
    myRole: 'Team lead coordinating 4 developers, focusing on WebSocket implementation, message routing, and system architecture.',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: '5',
    slug: 'operating-system-kernel',
    name: 'Operating System Kernel',
    domain: 'System',
    context: 'Academic',
    stack: ['C', 'Assembly', 'QEMU'],
    image: 'https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NjczMjY5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Custom OS kernel with process scheduling and memory management',
    problem: 'Final year project to design and implement a functional operating system kernel.',
    solution: 'Developed a microkernel architecture with preemptive multitasking, virtual memory management, and basic filesystem support using C and x86 Assembly.',
    myRole: 'Implemented process scheduler, memory allocator, and interrupt handling routines. Documented the entire system architecture.',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '6',
    slug: 'dashboard-ui-library',
    name: 'Dashboard UI Library',
    domain: 'Frontend',
    context: 'Personal',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY3MjE3OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Reusable component library for building admin dashboards',
    problem: 'Needed a consistent set of UI components for multiple dashboard projects.',
    solution: 'Created a comprehensive React component library with TypeScript, documented in Storybook, featuring charts, tables, forms, and layout components.',
    myRole: 'Sole developer responsible for component design, implementation, documentation, and publishing to NPM.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    featured: false
  }
];

export const getDomains = (): ProjectDomain[] => {
  return ['Web', 'Backend', 'Frontend', 'Mobile', 'System', 'Game', 'Network'];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectsByDomain = (domain: ProjectDomain | 'All'): Project[] => {
  if (domain === 'All') return projects;
  return projects.filter(p => p.domain === domain);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Smartphone, Server, Gamepad2, Network, Download } from 'lucide-react';
import { getFeaturedProjects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function HomePage() {
  const featuredProjects = getFeaturedProjects();

  const expertiseAreas = [
    { icon: Code2, title: 'Web Development', description: 'Applications web modernes et performantes' },
    { icon: Server, title: 'Backend', description: 'APIs robustes et scalables' },
    { icon: Code2, title: 'Frontend', description: 'Interfaces utilisateur réactives' },
    { icon: Smartphone, title: 'Mobile', description: 'Applications mobiles cross-platform' },
    { icon: Database, title: 'System', description: 'Programmation système et bas niveau' },
    { icon: Gamepad2, title: 'Game/Network', description: 'Développement de jeux et réseaux' }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl mb-6">
            Software Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Développement de solutions logicielles orientées performance pour le web, le mobile et les systèmes
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Voir mes projets
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl mb-6">À propos</h2>
          <div className="max-w-3xl text-gray-300 space-y-4">
            <p>
              Développeur étudiant avec une approche polyvalente du développement logiciel.
              J’interviens sur des projets front-end, back-end, mobile et jeux, avec une compréhension
              des systèmes et des bases réseau.
            </p>
            <p>
              Curieux et adaptable, je m’intéresse à différents domaines techniques et cherche à
              développer des solutions complètes, cohérentes et fonctionnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl mb-12">Domaines d'expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className="border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-colors"
              >
                <area.icon className="mb-4" size={32} />
                <h3 className="text-xl mb-2">{area.title}</h3>
                <p className="text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl">Projets en vedette</h2>
            <Link
              to="/projects"
              className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Voir tous les projets
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">
              Travaillons ensemble
            </h2>
            <p className="text-gray-400 mb-8">
              Je suis disponible pour des opportunités de stage et des missions freelance.
              N'hésitez pas à me contacter pour discuter de votre projet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Me contacter
              </Link>
            {/*   <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Download size={20} />
                Télécharger mon CV
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

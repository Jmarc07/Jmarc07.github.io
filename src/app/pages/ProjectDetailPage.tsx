import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Badge } from '../components/ui/badge';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Projet non trouvé</h1>
          <Link to="/projects" className="text-gray-400 hover:text-white inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Back Button */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/projects"
            className="text-gray-400 hover:text-white inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={20} />
            Retour aux projets
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl mb-4">{project.name}</h1>
                <div className="flex flex-wrap gap-2">
                  <Badge>{project.domain}</Badge>
                  <Badge variant="outline">{project.context}</Badge>
                </div>
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Démo
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/10 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Context */}
            <section>
              <h2 className="text-2xl mb-4">Contexte</h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-2">
                  <span className="text-white">Type de projet:</span> {project.context}
                </p>
                <p>{project.description}</p>
              </div>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-2xl mb-4">Problème</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl mb-4">Solution</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* My Role */}
            <section>
              <h2 className="text-2xl mb-4">Mon Rôle</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.myRole}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-white/10 rounded-lg p-6 bg-white/5">
              <h3 className="text-xl mb-4">Informations</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-400 text-sm mb-1">Domaine</dt>
                  <dd className="text-white">{project.domain}</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-sm mb-1">Contexte</dt>
                  <dd className="text-white">{project.context}</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-sm mb-1">Technologies</dt>
                  <dd className="text-white">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded bg-white/10 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Project } from '../data/projects';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-colors bg-white/5"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl group-hover:text-gray-300 transition-colors">
            {project.name}
          </h3>
          <Badge variant="outline" className="text-xs">
            {project.domain}
          </Badge>
        </div>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-xs px-2 py-1 text-gray-400">
              +{project.stack.length - 3} plus
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

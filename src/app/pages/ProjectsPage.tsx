import { useState } from 'react';
import { getProjectsByDomain, getDomains, ProjectDomain } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function ProjectsPage() {
  const [selectedDomain, setSelectedDomain] = useState<ProjectDomain | 'All'>('All');
  const projects = getProjectsByDomain(selectedDomain);
  const domains = ['All', ...getDomains()];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl mb-8">
          My Projects
        </h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Discover my work across different areas of software development.
        </p>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain as ProjectDomain | 'All')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDomain === domain
                    ? 'bg-white text-black'
                    : 'border border-white/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

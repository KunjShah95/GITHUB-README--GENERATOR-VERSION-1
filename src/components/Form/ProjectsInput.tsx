import React from 'react';
import { Project } from '../../types';

interface ProjectsInputProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

const ProjectsInput: React.FC<ProjectsInputProps> = ({ projects, onChange }) => {
  const [newProject, setNewProject] = React.useState<Project>({
    name: '',
    description: '',
    url: '',
    technologies: []
  });

  const handleAddProject = () => {
    if (newProject.name && newProject.description && newProject.url) {
      onChange([...projects, { ...newProject }]);
      setNewProject({
        name: '',
        description: '',
        url: '',
        technologies: []
      });
    }
  };

  const handleRemoveProject = (index: number) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  const handleTechnologyChange = (value: string) => {
    const technologies = value.split(',').map(tech => tech.trim());
    setNewProject({ ...newProject, technologies });
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Top Projects</label>
      
      <div className="space-y-3 border border-gray-200 rounded-md p-4">
        <input
          type="text"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          placeholder="Project Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          placeholder="Project Description"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="url"
          value={newProject.url}
          onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
          placeholder="Project URL"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={newProject.technologies.join(', ')}
          onChange={(e) => handleTechnologyChange(e.target.value)}
          placeholder="Technologies (comma-separated)"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="button"
          onClick={handleAddProject}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Add Project
        </button>
      </div>

      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-md p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{project.name}</h4>
                <p className="text-sm text-gray-600">{project.description}</p>
                <a href={project.url} className="text-sm text-blue-600" target="_blank" rel="noopener noreferrer">
                  {project.url}
                </a>
                <div className="mt-1 flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveProject(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsInput;
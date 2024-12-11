import React from 'react';
import { FormData } from '../../types';
import InputField from './InputField';
import SkillsInput from './SkillsInput';
import ProjectsInput from './ProjectsInput';
import SocialLinksInput from './SocialLinksInput';

interface ProfileFormProps {
  onSubmit: (data: FormData) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    fullName: '',
    title: '',
    location: '',
    skills: [],
    projects: [],
    socialLinks: [],
    bio: '',
    currentlyLearning: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Full Name"
        value={formData.fullName}
        onChange={(value) => setFormData({ ...formData, fullName: value })}
        required
      />
      <InputField
        label="Professional Title"
        value={formData.title}
        onChange={(value) => setFormData({ ...formData, title: value })}
        required
      />
      <InputField
        label="Location"
        value={formData.location}
        onChange={(value) => setFormData({ ...formData, location: value })}
        required
      />
      <SkillsInput
        skills={formData.skills}
        onChange={(skills) => setFormData({ ...formData, skills })}
      />
      <ProjectsInput
        projects={formData.projects}
        onChange={(projects) => setFormData({ ...formData, projects })}
      />
      <SocialLinksInput
        links={formData.socialLinks}
        onChange={(links) => setFormData({ ...formData, socialLinks: links })}
      />
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Generate README
      </button>
    </form>
  );
};

export default ProfileForm;
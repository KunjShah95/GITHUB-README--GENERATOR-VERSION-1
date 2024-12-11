import React from 'react';

interface SkillsInputProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

const SkillsInput: React.FC<SkillsInputProps> = ({ skills, onChange }) => {
  const [newSkill, setNewSkill] = React.useState('');

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      onChange([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index: number) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Technical Skills</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Add a skill"
        />
        <button
          type="button"
          onClick={handleAddSkill}
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 rounded-full flex items-center gap-2"
          >
            {skill}
            <button
              type="button"
              onClick={() => handleRemoveSkill(index)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsInput;
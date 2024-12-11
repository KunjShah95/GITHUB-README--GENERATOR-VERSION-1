import React from 'react';
import { SocialLink } from '../../types';

interface SocialLinksInputProps {
  links: SocialLink[];
  onChange: (links: SocialLink[]) => void;
}

const SocialLinksInput: React.FC<SocialLinksInputProps> = ({ links, onChange }) => {
  const [newLink, setNewLink] = React.useState<SocialLink>({
    platform: '',
    url: ''
  });

  const platforms = [
    'GitHub',
    'LinkedIn',
    'Twitter',
    'Instagram',
    'Medium',
    'Dev.to',
    'CodePen',
    'YouTube',
    'Portfolio'
  ];

  const handleAddLink = () => {
    if (newLink.platform && newLink.url) {
      onChange([...links, { ...newLink }]);
      setNewLink({
        platform: '',
        url: ''
      });
    }
  };

  const handleRemoveLink = (index: number) => {
    onChange(links.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Social Links</label>
      
      <div className="space-y-3 border border-gray-200 rounded-md p-4">
        <select
          value={newLink.platform}
          onChange={(e) => setNewLink({ ...newLink, platform: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Platform</option>
          {platforms.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
        <input
          type="url"
          value={newLink.url}
          onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
          placeholder="Profile URL"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="button"
          onClick={handleAddLink}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          disabled={!newLink.platform || !newLink.url}
        >
          Add Social Link
        </button>
      </div>

      <div className="space-y-3">
        {links.map((link, index) => (
          <div key={index} className="border border-gray-200 rounded-md p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{link.platform}</h4>
                <a 
                  href={link.url} 
                  className="text-sm text-blue-600" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {link.url}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveLink(index)}
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

export default SocialLinksInput;
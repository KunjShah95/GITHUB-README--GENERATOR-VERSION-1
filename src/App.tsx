import React, { useState } from 'react';
import ProfileForm from './components/Form/ProfileForm';
import ReadmePreview from './components/Preview/ReadmePreview';
import { FormData } from './types';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [generatedProfile, setGeneratedProfile] = useState<FormData | null>(null);

  const handleSubmit = (data: FormData) => {
    setGeneratedProfile(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            <TypeAnimation
              sequence={[
                'GitHub Profile README Generator',
                1000,
                'Create Your Professional GitHub Profile',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Profile Information</h2>
              <ProfileForm onSubmit={handleSubmit} />
            </div>
            
            {generatedProfile && (
              <div className="bg-white p-6 rounded-lg shadow">
                <ReadmePreview profile={generatedProfile} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
import { UserProfile } from '../types';

export const generateReadme = (profile: UserProfile): string => {
  const {
    fullName,
    title,
    location,
    skills,
    projects,
    socialLinks,
    bio,
    currentlyLearning
  } = profile;

  return `<h1 align="center">👋 Hi, I'm ${fullName}</h1>

<h3 align="center">${title} from ${location}</h3>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=${fullName.toLowerCase().replace(/\s+/g, '')}&label=Profile%20views&color=0e75b6&style=flat" alt="profile views" />
</p>

${bio}

### 🔭 Currently working on

${projects.map(project => `- [${project.name}](${project.url}) - ${project.description}`).join('\n')}

### 🌱 I'm currently learning

${currentlyLearning.map(item => `- ${item}`).join('\n')}

### 💻 Tech Stack

${skills.map(skill => `![${skill}](https://img.shields.io/badge/-${skill}-05122A?style=flat)`).join(' ')}

### 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${fullName.toLowerCase().replace(/\s+/g, '')}&show_icons=true&theme=radical" alt="GitHub Stats" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${fullName.toLowerCase().replace(/\s+/g, '')}&theme=radical" alt="GitHub Streak" />
</p>

### 🤝 Connect with me

${socialLinks.map(link => `[![${link.platform}](https://img.shields.io/badge/-${link.platform}-05122A?style=flat&logo=${link.platform.toLowerCase()})](${link.url})`).join(' ')}

---
<p align="center">
  <img src="https://github.com/${fullName.toLowerCase().replace(/\s+/g, '')}/${fullName.toLowerCase().replace(/\s+/g, '')}/blob/output/github-contribution-grid-snake.svg" alt="snake" />
</p>`;
};
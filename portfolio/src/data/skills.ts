export interface SkillCategory {
  id: string
  title: string
  description: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building fast, accessible interfaces',
    items: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router', 'Redux / Redux Toolkit'],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Designing reliable services & APIs',
    items: ['Node.js', 'Express.js', 'Java Spring Boot', 'REST APIs','PHP'],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Modeling and querying data at scale',
    items: ['MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Day-to-day development workflow',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'WordPress'],
  },
]

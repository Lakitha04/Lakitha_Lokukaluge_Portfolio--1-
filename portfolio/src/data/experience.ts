export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineering Intern',
    company: 'NCINGA (PVT) Ltd',
    period: 'Mar 2024 — Sep 2024',
    location: 'Colombo, Sri Lanka',
    points: [
      'Developed backend REST APIs using Spring Boot.',
      'Worked with MongoDB for data storage and management.',
      'Developed frontend features using React and Redux.',
      'Integrated frontend and backend services end-to-end.',
      'Worked with Git and modern development tools in an Agile team.',
    ],
  },
]

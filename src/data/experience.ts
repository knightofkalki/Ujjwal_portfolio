// Experience item interface
interface ExperienceItem {
  date: string;
  title: string;
  organization: string;
  description: string;
}

// Education item interface
interface EducationItem {
  date: string;
  degree: string;
  institution: string;
  description: string;
}

// Work experience data - Update with your professional experience
export const experienceData: ExperienceItem[] = [
  {
  date: "Apr 2025 - Jun 2025", // Update date range
  title: "SDE Intern", // Update job title
  organization: "ITJOBXS", // Update company name
  description: "Crafted a scalable job listing API using Node.js, React, and AWS Lambda, increasing system efficiency by 30%. Secured endpoints with AWS WAF and OAuth 2.0, eliminating 95% of unauthorized access attempts. Boosted frontend performance by 20% through Docker containerization. Mentored 5 developers, improving code review efficiency and reducing delivery time by 15%." // Update job description
},
{
  date: "Aug 2023 - Jun 2025", // Update date range
  title: "Lead Web Developer", // Update job title
  organization: "KalkiFI AI Solutions", // Update company name
  description: "Pioneered a violence and intrusion detection system using computer vision transformers on AWS SageMaker, reducing reliance on security personnel by 60%. Developed a YOLOv8-based attendance system on Google Cloud with Docker and MySQL, cutting wait times by 45%. Led knowledge-sharing sessions and mentored over 100 junior developers." // Update job description
}

  // Add more work experience entries here
];

// Education data - Update with your educational background
export const educationData: EducationItem[] = [
  {
    date: "2022 - 2026", // Update education dates
    degree: "Bachelor of Technology in Computer Science Engineering", // Update degree
    institution: "Vellore Institute of Technology, Vellore", // Update institution
    description: "CGPA: 8.54/10. Specialized in Web Development, Data Structures & Algorithms, and Software Engineering. Actively involved in coding clubs and technical events." // Update education details
  },
  {
    date: "2021", // Update education dates
    degree: "Class XII", // Update degree
    institution: "SD Public School,Muzaffarnagar", // Update institution
    description: "Percentage: 84.2" // Update education details
  },
  {
    date: "2018", // Update education dates
    degree: "Class X", // Update degree
    institution: "Modern Public School,Muzaffarnagar", // Update institution
    description: "Percentage: 80.6" // Update education details
  },
  // Add more education entries here
];
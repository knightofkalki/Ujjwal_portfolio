// Certification data interface
export interface CertificationData {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  description: string;
}

// Certifications array - Update with your certifications
export const certifications: CertificationData[] = [
  {
    id: 1,
    title: "Oracle Cloud Databases Services", // Update certification title
    issuer: "Oracle", // Update certification issuer
    date: "2025", // Update date
    credentialUrl: "https://drive.google.com/file/d/1a1N6cGg7eTmkj7T24llaxChrOfounlWS/view?trk=public_profile_certification-title", // Update with your credential URL
    description: "Demonstrated expertise in managing, configuring, and optimizing Oracle Cloud Infrastructure and autonomous databases" // Update description
  },
  {
    id: 2,
    title: "Azure AI Fundamentals", // Update certification title
    issuer: "Microsoft", // Update certification issuer
    date: "2024", // Update date
    credentialUrl: "https://drive.google.com/file/d/1bKcta5YTgVF2VdmGk2id51qD67Sz4Ddb/view", // Update with your credential URL
    description: "validating expertise in building and managing AI solutions using Azure Cognitive Services and Machine Learning" // Update description
  },{
    id: 3,
    title: "1st place in HackX 2.0", // Update certification title
    issuer: "IEEE-SPS VIT", // Update certification issuer
    date: "2023", // Update date
    credentialUrl: "https://drive.google.com/file/d/1RVRxr64qVMujh4CReb0CWKzEsxpL87uZ/view?pli=1", // Update with your credential URL
    description: "showcasing innovative problem-solving and technical excellence in a competitive hackathon environment." // Update description
  },
  {
    id: 4,
    title: "2nd place in GSEA Chennai for KalkiNI", // Update certification title
    issuer: "EO Chenni", // Update certification issuer
    date: "2025", // Update date
    credentialUrl: "https://drive.google.com/file/d/130JNy1SHKmxo2NZrTQczmTX-92HuuXgL/view", // Update with your credential URL
    description: "demonstrating entrepreneurial vision, leadership, and strategic thinking in a prestigious student entrepreneurship competition." // Update description
  },
  {
    id: 5,
    title: "Smart India Hackathon-2023", // Update certification title
    issuer: "IIC", // Update certification issuer
    date: "2023", // Update date
    credentialUrl: "https://drive.google.com/file/d/1m_nFhz-s18ls7A2R1bmMn2FvWUNb3AnO/view?usp=sharing", // Update with your credential URL
    description: "Selected among the top 30 teams from college for the national-level Smart India Hackathon, recognizing innovation and problem-solving skills in a prestigious nationwide competition" // Update description
  },
  // Add more certifications here
];
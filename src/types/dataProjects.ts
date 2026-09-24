export type DatasetCategory =
  | 'insurance'
  | 'claims'
  | 'mortality'
  | 'financial'
  | 'economic'
  | 'demographic'
  | 'simulated';

export interface DatasetVariable {
  name: string;
  type: string;
  description: string;
}

export interface Dataset {
  id: string;
  name: string;
  category: DatasetCategory;
  description: string;
  variables: DatasetVariable[];
  source: string;
  format: 'csv' | 'xlsx' | 'json';
  fileSize: string;
  records: string;
  downloadUrl: string;
  usageExample: string;
  applications: string[];
}

export interface DatasetsData {
  datasets: Dataset[];
}

export interface TeamMember {
  name: string;
  role: string;
  email: string;
}

export interface Deliverable {
  type: 'report' | 'presentation' | 'code' | 'demo';
  url: string;
}

export interface StudentProject {
  id: string;
  title: string;
  description: string;
  team: TeamMember[];
  academicYear: string;
  category: string;
  problemStatement: string;
  objectives: string[];
  methodology: string;
  toolsUsed: string[];
  findings: string;
  deliverables: Deliverable[];
  thumbnail: string;
}

export interface StudentProjectsData {
  projects: StudentProject[];
}

export interface ProgramCourse {
  code: string;
  name: string;
  credits: number;
}

export interface ProgramYear {
  year: number;
  title: string;
  description: string;
  focus: string;
  courses: ProgramCourse[];
}

export interface ProgressionRequirement {
  level: string;
  requirement: string;
}

export interface GraduationRequirement {
  requirement: string;
  description: string;
}

export interface Skill {
  skill: string;
  description: string;
}

export interface ProgramInfo {
  programInfo: {
    name: string;
    duration: string;
    degree: string;
    faculty: string;
    department: string;
    university: string;
  };
  description: string;
  structure: {
    years: ProgramYear[];
  };
  progressionRequirements: ProgressionRequirement[];
  graduationRequirements: GraduationRequirement[];
  skillsDeveloped: Skill[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  level: number;
  semester: number;
  credits: number;
  lecturer: string;
  email: string;
  description: string;
  objectives: string[];
  assessmentMethod: string;
}

export interface CoursesData {
  courses: Course[];
}

export type MaterialType = 'lecture' | 'tutorial' | 'pastpaper' | 'quiz';

export interface MaterialResource {
  id: string;
  type: MaterialType;
  title: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
  description: string;
}

export interface StudyMaterial {
  courseId: string;
  courseCode: string;
  courseName: string;
  level: number;
  semester: number;
  lecturer: string;
  resources: MaterialResource[];
}

export interface StudyMaterialsData {
  materials: StudyMaterial[];
}

export interface PathwayStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface CareerPathway {
  id: string;
  title: string;
  description: string;
  steps: PathwayStep[];
}

export interface ProfessionalBody {
  id: string;
  name: string;
  acronym: string;
  description: string;
  website: string;
  focus: string;
  region: string;
}

export interface CareerField {
  id: string;
  field: string;
  description: string;
  responsibilities: string[];
  icon: string;
  demand: string;
}

export interface CareerPathwaysData {
  pathways: CareerPathway[];
  professionalBodies: ProfessionalBody[];
  careerFields: CareerField[];
}

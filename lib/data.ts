import siteData from "@/content/site.json";
import resumeData from "@/content/resume.json";
import projectsData from "@/content/projects.json";
import researchData from "@/content/research.json";
import skillsData from "@/content/skills.json";

export type SiteData = typeof siteData;
export type ResumeData = typeof resumeData;
export type ProjectsData = typeof projectsData;
export type ResearchData = typeof researchData;
export type SkillsData = typeof skillsData;
export type Project = ProjectsData["projects"][number];

export { siteData, resumeData, projectsData, researchData, skillsData };

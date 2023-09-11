export type TooltipData = {
  content: string | null;
  position: { x: number; y: number } | null;
};
export interface SkillItem {
  name: string;
  description: string;
  proficiency: number;
  relevantExperience: string[]; // Optional, to accommodate skills that might not have linked experiences
}

export interface CentralSkill extends SkillItem {
  layer: "central";
}

export interface MiddleOrOuterSkill {
  layer: "middle" | "outermost";
  skills: SkillItem[];
}

export type Skill = CentralSkill | MiddleOrOuterSkill;

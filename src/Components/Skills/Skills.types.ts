export type TSkill = {
  name: string;
  rating: number;
  description: string[];
};

export type TSkillCardProps = {
  skill: TSkill;
  expanded: number | null;
  index: number;
  toggleExpand: (index: number) => void;
  skillRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
};

export type TSkillsProps = {
  expanded: number | null;
  skillRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
  toggleExpand: (index: number) => void;
  showAll: boolean;
  handleShowAll: () => void;
};

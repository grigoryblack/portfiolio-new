import SkillsView from "./Skills.view.tsx";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const skillRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleExpand = (index: number) => {
    setExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleShowAll = (): void => {
    setShowAll(!showAll);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      skillRef.current.every(
        (ref) => ref && !ref.contains(event.target as Node),
      )
    ) {
      setExpanded(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SkillsView
      expanded={expanded}
      skillRef={skillRef}
      showAll={showAll}
      toggleExpand={toggleExpand}
      handleShowAll={handleShowAll}
    />
  );
};

export default Skills;

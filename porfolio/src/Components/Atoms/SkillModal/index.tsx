import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {
  BackgroundOverlay,
  CloseButton,
  ModalOverlay,
  ProficiencyBar,
} from "./styles";

interface SkillModalProps {
  skill: {
    name: string;
    description: string;
    proficiency: number;
    relevantExperience: string[];
  } | null;
  onClose: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!skill) return null;

  return (
    <BackgroundOverlay
      onClick={(e) => e.target === modalRef.current && onClose()}
      ref={modalRef}
    >
      <ModalOverlay role="dialog" aria-labelledby="skill-title">
        <CloseButton onClick={onClose} aria-label="Close Modal">
          &times;
        </CloseButton>
        <h2 id="skill-title">{skill.name}</h2>
        <p>{skill.description}</p>
        <ProficiencyBar proficiency={skill.proficiency} />
        {skill.relevantExperience && skill.relevantExperience.length ? (
          <div>
            <h4>Relevant Experience:</h4>
            <ul>
              {skill.relevantExperience.map((exp, idx) => (
                <li key={idx}>{exp}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </ModalOverlay>
    </BackgroundOverlay>
  );
};

export default SkillModal;

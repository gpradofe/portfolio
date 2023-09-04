import React from "react";
import { StyledIntro, StyledName, StyledSection, StyledTitle } from "./styles";
import { motion } from "framer-motion";

const IntroSection: React.FC = () => {
  const name = "Gustavo Aniceto";
  const letters = name.split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: name.length * 0.1 + 0.5 } },
  };

  const introVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.5 } },
  };

  return (
    <StyledSection>
      <StyledName>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
          >
            {letter}
          </motion.span>
        ))}
      </StyledName>

      <StyledTitle initial="hidden" animate="visible" variants={titleVariants}>
        Full-stack Developer
      </StyledTitle>

      <StyledIntro initial="hidden" animate="visible" variants={introVariants}>
        Innovating digital solutions for over X years. Passionate about bridging
        design and development to create compelling user experiences.
      </StyledIntro>
    </StyledSection>
  );
};

export default IntroSection;

import React from "react";
import {
  StyledDetails,
  StyledIntro,
  StyledName,
  StyledNameMorphed,
  StyledNarrative,
  StyledSection,
  StyledSectionMorphed,
  StyledTitle,
} from "./styles";
import { motion } from "framer-motion";
import subtlePattern from "../../../Assets/Images/subtle_pattern.jpg";

interface IntroSectionProps {
  isMorphed?: boolean;
}
const IntroSection: React.FC<IntroSectionProps> = ({ isMorphed = false }) => {
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
  if (isMorphed) {
    return (
      <StyledSectionMorphed>
        <StyledNameMorphed>Hello, I'm Gustavo Aniceto.</StyledNameMorphed>

        <StyledNarrative>
          Currently pursuing my Bachelor of Science in Computer Science at the
          esteemed University of Notre Dame's College of Engineering, I'm set to
          graduate in December 2024. My academic journey has been marked with
          recognition, having earned spots on the Dean’s List multiple times and
          clinching the 'Mormon Holdings Most Innovative Idea of 2023' accolade.
        </StyledNarrative>

        <StyledNarrative>
          Technically proficient in a plethora of programming languages from C,
          C++, and C# to JavaScript's React framework, and Python, my toolkit is
          vast and varied. I'm intimately familiar with databases like MongoDB,
          PostgreSQL, SQL, and Redis, and cloud infrastructures including AWS,
          Kubernetes, Rancher, and Jenkins. While I've dabbled with Julia,
          Shell, HTML, and Flutter, I'm always eager to explore and expand my
          horizons. My strongest suits lie in C# and React, where I employ both
          to create intricate web architectures. But I'm not just about frontend
          and backend — I've been instrumental in designing infrastructures,
          databases, and curating optimal tech stacks. As someone deeply
          fascinated by AI, I've ventured into research to understand and
          leverage its potential in contemporary applications.
        </StyledNarrative>

        <StyledNarrative>
          My professional stints at BTG PACTUAL, Latin America's leading
          investment bank, have further honed my skills, allowing me to innovate
          in financial systems and front trading platforms. Additionally, my
          entrepreneurial spirit breathed life into 'The Country Market', a
          project blending AI and RFID to address food deserts in rural US.
        </StyledNarrative>

        <StyledNarrative>
          Beyond the digital realm, I have an ardent passion for cars. Back in
          Brazil, I'd often find myself competing in professional drift meets,
          reveling in the adrenaline. My disciplined side manifests in boxing—a
          sport I've dedicated a decade to, sharpening my agility and strength.
          From the rhythmic purr of an engine to the rhythmic dance in a boxing
          ring, my life is a tapestry of diverse passions. And as I look
          forward, I'm thrilled for the chapters yet to be written.
        </StyledNarrative>
      </StyledSectionMorphed>
    );
  }

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
        A versatile technologist graduating from the University of Notre Dame
        with a keen interest in AI, research, and full-stack development.
        Whether it's innovating financial systems or architecting next-gen AI
        solutions, I leverage my vast tech expertise to drive forward-thinking
        projects. Looking to craft transformative digital solutions across
        industries.
      </StyledIntro>
    </StyledSection>
  );
};

export default IntroSection;

import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #1a1a1a; // Adjust as per your color preference
  color: #ffffff;
`;

export const StyledName = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const StyledTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const StyledIntro = styled(motion.p)`
  font-size: 1.25rem;
  text-align: center;
  max-width: 80%;
`;

import styled from "styled-components";

export const HeroSection = styled.div`
  height: 100vh;
  background: linear-gradient(#020c1b, #03203c);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 10px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  font-family: "Montserrat", sans-serif;
`;

export const Subtitle = styled.h2`
  color: #00bcd4;
  font-size: 2rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: "Poppins", sans-serif;
`;

export const Tagline = styled.p`
  color: #ffd700;
  font-size: 1.5rem;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: "Lato", sans-serif;
`;

export const NeuButton = styled.button`
  background: linear-gradient(145deg, #00bcd4, #ffd700);
  border: none;
  border-radius: 10px;
  box-shadow: 8px 8px 16px #0a0c0e, -8px -8px 16px #2a2c2e;
  padding: 10px 20px;
  margin: 10px;
  color: #020c1b;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Roboto", sans-serif;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 15px #0a0c0e, -5px -5px 15px #2a2c2e;
  }

  &:active {
    transform: translateY(-2px);
  }
`;

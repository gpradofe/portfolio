import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  position: relative; /* This is key to position child elements absolutely relative to this container */
`;

export const Background = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  position: absolute; /* Position the button above the canvas */
  top: 50%; /* These values position the button in the center of the container; adjust as needed */
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 40px;
  z-index: 1; /* Ensure the button is above the canvas */
`;
export const ScreenContainer = styled.div`
  width: 29.2vw;
  height: 17vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 100%;
  /* Trapezoidal shape */
  clip-path: polygon(0 0%, 100% 0, 98.3% 98%, 1.7% 98.4%);
  @media (max-width: 768px) {
    width: 80vw;
    height: 80vw;
  }
  @media (max-width: 1024px) {
    width: 40vw;
    height: 80vw;
  }
  @media (max-width: 1440px) {
    width: 40vw;
    height: 27vw;
  }
  @media (max-width: 2000px) {
    width: 30vw;
    height: 31.5vw;
  }
  border-radius: 1%; /* Slightly rounded corners; adjust as needed */
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15); /* Subtle shadow for depth */
  border: 1px solid rgba(0, 0, 0, 0.2); /* Thin border for bezel illusion */
`;
export const ScreenButton = styled.button`
  background-color: white;
  color: black;
  margin: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export const ScreenBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
`;

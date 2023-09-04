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

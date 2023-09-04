import styled from "styled-components";

export const BootContainer = styled.div`
  font-family: "Courier New", monospace;
  background-color: #282a36;
  color: #50fa7b;
  padding: 20px;
  white-space: pre-wrap;
  overflow: hidden;
  height: 100vh;
  box-sizing: border-box; // This will include padding in the height calculation
`;

export const BootSnippet = styled.div<{ showCursor: boolean }>`
  margin-bottom: 10px;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  max-width: ${({ showCursor }) => (showCursor ? "0" : "100%")};
  animation: typing 1.5s steps(200, end) forwards,
    ${({ showCursor }) => showCursor && "blink 0.75s step-end infinite"};
  border-right: ${({ showCursor }) =>
    showCursor ? "2px solid #50fa7b" : "none"};

  @keyframes typing {
    from {
      max-width: 0;
    }
    to {
      max-width: 100%;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

export const BootLine = styled.div`
  margin-bottom: 10px;
  white-space: nowrap;
`;

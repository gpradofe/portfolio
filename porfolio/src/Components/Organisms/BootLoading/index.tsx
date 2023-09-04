import React, { useState, useEffect, useContext } from "react";
import { BootContainer, BootLine, BootSnippet } from "./styles";
import ViewModeContext from "../../../Contexts/ViewModeContext";

const loadingSnippets = [
  "[0.0001] Booting PortfolioOS Kernel v1.0...",
  "[0.0010] Detecting hardware interfaces... PCIe, USB, NVMe OK.",
  "[0.0020] Setting up interrupt controllers... IRQs set.",
  "[0.0030] Calibrating CPU clock... Synchronized.",
  "[0.0040] Establishing secure enclave... Encryption keys loaded.",
  "[0.0050] Setting up virtual memory... Paging tables built.",
  "[0.0060] Initializing CPU caches... L1, L2, L3 flushed.",
  "[0.0070] Mounting root filesystem... EXT4 detected and mounted.",
  "[0.0080] Loading dynamic linker (ld)... Resolving dependencies.",
  "[0.0090] Establishing DBus connections...",
  "[0.0100] Starting network daemon... IPv4/IPv6 stacks initialized.",
  "[0.0110] Binding localhost to 127.0.0.1...",
  "[0.0120] Connecting to WebSocket for live updates...",
  "[0.0130] Starting Node.js backend server... Listening on port 3000.",
  "[0.0140] Fetching API endpoints... /internships, /github, /skills.",
  "[0.0150] Bundling and minifying ReactJS components...",
  "[0.0160] Parsing GraphQL queries... Data retrieved.",
  "[0.0170] Applying middleware layers... CORS, Helmet security headers set.",
  "[0.0180] Loading WebGL components for 3D visualizations...",
  "[0.0190] Syncing with CDN... Content fetched.",
  "[0.0200] Initializing websockets for real-time interactions...",
  "[0.0210] PortfolioOS boot sequence complete. Everything's green.",
  "[0.0220] Welcome, Gustavo Aniceto. Initializing interactive GUI...",
];

const BootLoading: React.FC = () => {
  const { setIsAnimationComplete } = useContext(ViewModeContext);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < loadingSnippets.length - 1) {
        setCurrentLine((prevLine) => prevLine + 1);
      } else {
        console.log("Animation complete!");
        setIsAnimationComplete(true); // set the animation complete flag when finished
        clearInterval(timer); // clear the interval once done
      }
    }, 300);
    return () => clearInterval(timer);
  }, [currentLine, setIsAnimationComplete]);

  return (
    <BootContainer>
      {loadingSnippets.map((snippet, index) => {
        if (index < currentLine) {
          return <BootLine key={index}>{snippet}</BootLine>;
        } else if (index === currentLine) {
          return (
            <BootSnippet key={index} showCursor>
              {snippet}
            </BootSnippet>
          );
        } else {
          return null; // Don't render the lines yet to be typed.
        }
      })}
    </BootContainer>
  );
};

export default BootLoading;

import React, { useState, useEffect, useContext } from "react";
import { BootContainer, BootLine, BootSnippet } from "./styles";
import ViewModeContext from "../../../Contexts/ViewModeContext";

const loadingSnippets = [
  "[0.0001] Booting PortfolioOS Kernel v1.0.1... X86_64 architecture detected.",
  "[0.0010] Probing hardware interfaces... PCIe v4.0, USB 3.2, NVMe 1.3 confirmed.",
  "[0.0020] Configuring interrupt controllers... 256 IRQs routed to IOAPIC.",
  "[0.0030] Initializing CPU microcode updates... Triple-level cache hierarchy flushed.",
  "[0.0040] Mounting root filesystem... EXT4 with journaling support. Disk I/O speed calibrated.",
  "[0.0050] Loading ELF dynamic linker (ld-linux-x86-64.so.2)... Shared object dependencies mapped.",
  "[0.0060] Spawning network daemons... IPv6 priority routing, TCP fast open enabled.",
  "[0.0070] Initializing Node.js runtime v16.2.0... Backend server live on port 3000.",
  "[0.0080] Fetching RESTful API endpoints... TLS 1.3 handshake successful with /internships, /github, /skills.",
  "[0.0090] Parsing GraphQL subscriptions... Data sync with Apollo Client initiated.",
  "[0.0100] Configuring HTTP/2.0 middleware layers... GZIP compression, CORS policy, Helmet CSP rules applied.",
  "[0.0110] Bootstrapping WebGL kernel... 3D graphic shaders compiled with GLSL v4.60.",
  "[0.0120] Orchestrating CDN with edge locations... Prefetching assets. Content Delivery Network synchronized.",
  "[0.0130] PortfolioOS integrity check... Boot checksum valid. System state: nominal.",
  "[0.0140] Welcome, to Gustavo Aniceto's Portfolio. Engaging immersive GUI experience...",
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
    }, 150);
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

import React, { createContext } from "react";

type ViewModeContextType = {
  isAnimationComplete: boolean | null;
  setIsAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewModeContext = createContext<ViewModeContextType>({
  isAnimationComplete: null,
  setIsAnimationComplete: () => {},
});

export default ViewModeContext;

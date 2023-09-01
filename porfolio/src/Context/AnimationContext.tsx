import React, { createContext } from "react";

type AnimationContextType = {
  currentTime: number | null;
  setCurrentTIme: React.Dispatch<React.SetStateAction<number | null>>;
  isPlaying: boolean | null;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const AnimationContext = createContext<AnimationContextType>({
  currentTime: null,
  setCurrentTIme: () => {},
  isPlaying: null,
  setIsPlaying: () => {},
});

export default AnimationContext;

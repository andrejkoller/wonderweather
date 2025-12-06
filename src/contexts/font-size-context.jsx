"use client";

import { createContext, useContext } from "react";

const FontSizeContext = createContext(undefined);

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
};

export default FontSizeContext;

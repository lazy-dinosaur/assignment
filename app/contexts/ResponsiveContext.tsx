"use client";

import { createContext, useContext, useRef, useMemo, ReactNode } from "react";
import useGetpx from "../hooks/useGetpx";

interface ResponsiveContextType {
  getScale: (originalSize: number) => number;
  imageRef: React.RefObject<HTMLImageElement | null>;
  isImageLoaded: boolean;
  scaleFactor: number;
}

const ResponsiveContext = createContext<ResponsiveContextType | null>(null);

interface ResponsiveProviderProps {
  children: ReactNode;
}

export function ResponsiveProvider({ children }: ResponsiveProviderProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const { getScale, isImageLoaded, scaleFactor } = useGetpx(imageRef);

  const contextValue = useMemo(
    () => ({
      getScale,
      imageRef,
      isImageLoaded,
      scaleFactor,
    }),
    [getScale, isImageLoaded, scaleFactor],
  );

  return (
    <ResponsiveContext.Provider value={contextValue}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export function useResponsive() {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsive must be used within ResponsiveProvider");
  }
  return context;
}

export function useGetScale() {
  return useResponsive().getScale;
}

export function useImageRef() {
  return useResponsive().imageRef;
}

export function useIsImageLoaded() {
  return useResponsive().isImageLoaded;
}

export function useScaleFactor() {
  return useResponsive().scaleFactor;
}

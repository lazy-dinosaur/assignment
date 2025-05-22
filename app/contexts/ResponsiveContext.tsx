"use client";

import { createContext, useContext, useRef, useMemo, ReactNode } from "react";
import useGetpx from "../hooks/useGetpx";

const DEFAULT_SIZES = {
  fontSize: 18,
  tableThickBorder: 3,
  tableThinBorder: 1,
  gap: 5,
  firstSvgTop: 42,
  secondSvgTop: 23,
};

export type ScaleValues = typeof DEFAULT_SIZES;

interface ResponsiveContextType {
  scaleValues: ScaleValues;
  imageRef: React.RefObject<HTMLImageElement | null>;
  isImageLoaded: boolean;
}

const ResponsiveContext = createContext<ResponsiveContextType | null>(null);

interface ResponsiveProviderProps {
  children: ReactNode;
}

export function ResponsiveProvider({ children }: ResponsiveProviderProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const scaleValues = useGetpx(imageRef, DEFAULT_SIZES);

  const isImageLoaded = useMemo(() => {
    return Object.values(scaleValues).some((value) => value > 0);
  }, [scaleValues]);

  const contextValue = useMemo(
    () => ({
      scaleValues,
      imageRef,
      isImageLoaded,
    }),
    [scaleValues, isImageLoaded],
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

export function useScaleValues() {
  return useResponsive().scaleValues;
}

export function useImageRef() {
  return useResponsive().imageRef;
}

export function useIsImageLoaded() {
  return useResponsive().isImageLoaded;
}


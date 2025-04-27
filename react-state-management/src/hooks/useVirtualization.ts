import { useState, useCallback } from 'react';

interface VirtualizationProps {
  totalItems: number;
  itemHeight: number;
  containerHeight: number;
  overscan?: number;
}

interface VirtualizationResult {
  startIndex: number;
  endIndex: number;
  virtualItems: Array<{ index: number; offsetY: number }>;
  containerStyle: React.CSSProperties;
  scrollContainerStyle: React.CSSProperties;
  scrollTo: (index: number) => void;
}

export const useVirtualization = ({
  totalItems,
  itemHeight,
  containerHeight,
  overscan = 5,
}: VirtualizationProps): VirtualizationResult => {
  const [scrollTop, setScrollTop] = useState(0);
  
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    totalItems - 1,
    Math.floor((scrollTop + containerHeight) / itemHeight) + overscan
  );
  
  const virtualItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    virtualItems.push({
      index: i,
      offsetY: i * itemHeight,
    });
  }
  
  const scrollTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalItems) return;
      setScrollTop(index * itemHeight);
    },
    [itemHeight, totalItems]
  );
  
  const containerStyle: React.CSSProperties = {
    height: containerHeight,
    overflow: 'auto',
    position: 'relative',
  };
  
  const scrollContainerStyle: React.CSSProperties = {
    height: totalItems * itemHeight,
    position: 'relative',
  };
  
  return {
    startIndex,
    endIndex,
    virtualItems,
    containerStyle,
    scrollContainerStyle,
    scrollTo,
  };
};
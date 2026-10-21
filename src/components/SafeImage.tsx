import React, { useState, useEffect } from 'react';
import { SageLeaf } from './BotanicalIllustrations.tsx';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  categoryLabel?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  alt = 'SAGE Farm Cafe',
  className = '',
  categoryLabel,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const [fallbackAttempted, setFallbackAttempted] = useState(false);

  // Sync state whenever the src prop updates (e.g. when opening modals or filtering)
  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setFallbackAttempted(false);
  }, [src]);

  const handleError = () => {
    if (!fallbackAttempted && fallbackSrc && fallbackSrc !== currentSrc) {
      setFallbackAttempted(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !currentSrc) {
    return (
      <div
        className={`w-full h-full min-h-[200px] bg-[#FAF7F0] border border-[#234735]/10 rounded-xl flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
        aria-label={alt}
      >
        <SageLeaf className="w-10 h-10 text-[#234735]/40 mb-2 animate-sway" />
        <span className="font-serif text-base text-[#234735] font-medium leading-tight">
          {alt}
        </span>
        {categoryLabel && (
          <span className="text-[10px] uppercase tracking-wider text-[#858F65] mt-1 font-semibold">
            {categoryLabel}
          </span>
        )}
        <span className="text-[10px] text-[#77786E] mt-1.5 italic font-serif">
          SAGE Farm Cafe · Jubilee Hills
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};

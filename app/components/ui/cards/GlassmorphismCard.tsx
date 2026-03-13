'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  glowColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  blurAmount?: number;
  opacity?: number;
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  isHovered?: boolean;
  onHover?: (isHovered: boolean) => void;
  onClick?: () => void;
  enableTilt?: boolean;
  maxTiltAngle?: number;
  className?: string;
  style?: React.CSSProperties;
  role?: string;
  ariaLabel?: string;
  tabIndex?: number;
}

export const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  glowColor = '#00ffff',
  borderColor = '#ffffff20',
  backgroundColor = '#ffffff10',
  blurAmount = 12,
  opacity = 0.1,
  width = 'auto',
  height = 'auto',
  padding = '6',
  isHovered = false,
  onHover,
  onClick,
  enableTilt = false,
  maxTiltAngle = 15,
  className = '',
  style = {},
  role = 'article',
  ariaLabel,
  tabIndex = 0
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHoveredState, setIsHoveredState] = useState(isHovered);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!enableTilt) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    const tiltX = Math.max(-maxTiltAngle, Math.min(maxTiltAngle, x * maxTiltAngle));
    const tiltY = Math.max(-maxTiltAngle, Math.min(maxTiltAngle, y * maxTiltAngle));
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHoveredState(false);
    onHover?.(false);
  };

  const handleMouseEnter = () => {
    setIsHoveredState(true);
    onHover?.(true);
  };

  const cardStyle: React.CSSProperties = {
    width,
    height,
    padding,
    backdropFilter: `blur(${blurAmount}px)`,
    backgroundColor,
    border: `1px solid ${borderColor}`,
    borderRadius: '12px',
    boxShadow: isHovered ? `0 0 30px ${glowColor}40` : `0 0 20px ${glowColor}20`,
    transform: enableTilt ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'none',
    transition: 'all 0.3s ease-out',
    ...style
  };

  return (
    <motion.div
      className={`
        relative bg-black/40 backdrop-blur-sm
        border border-white/20 rounded-xl
        ${className}
      `}
      style={cardStyle}
      role={role}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 0 40px ${glowColor}60`
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glassmorphism overlay effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${backgroundColor}33, ${backgroundColor}66)`,
          backdropFilter: `blur(${blurAmount}px)`,
          borderRadius: '12px',
        }}
      />
      
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

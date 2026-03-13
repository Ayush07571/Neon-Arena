'use client';

import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          borderColor: '#00ffff',
          glowColor: '#00ffff40',
          hoverBg: 'bg-cyan-500/10',
          textClass: 'text-white'
        };
      case 'secondary':
        return {
          borderColor: '#ff00ff',
          glowColor: '#ff00ff40',
          hoverBg: 'bg-purple-500/10',
          textClass: 'text-white'
        };
      case 'tertiary':
        return {
          borderColor: '#ffff00',
          glowColor: '#ffff0040',
          hoverBg: 'bg-yellow-500/10',
          textClass: 'text-white'
        };
      default:
        return {
          borderColor: '#00ffff',
          glowColor: '#00ffff40',
          hoverBg: 'bg-cyan-500/10',
          textClass: 'text-white'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'xs':
        return 'px-4 py-2 text-sm';
      case 'sm':
        return 'px-6 py-3 text-base';
      case 'md':
        return 'px-8 py-4 text-lg';
      case 'lg':
        return 'px-12 py-6 text-xl';
      case 'xl':
        return 'px-16 py-8 text-2xl';
      default:
        return 'px-8 py-4 text-lg';
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-lg border-2 font-bold
        transition-all duration-300 ease-in-out
        ${sizeStyles}
        ${variantStyles.textClass}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      style={{
        borderColor: variantStyles.borderColor,
        boxShadow: `0 0 20px ${variantStyles.glowColor}`,
      }}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        boxShadow: disabled ? 'none' : `0 0 30px ${variantStyles.glowColor}`
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.95 
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Neon glow effect background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(45deg, ${variantStyles.borderColor}, transparent)`,
          filter: 'blur(8px)',
        }}
        animate={{
          opacity: loading ? [0.3, 0.6] : [0.4, 0.6],
        }}
      />
      
      {/* Loading spinner */}
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-4 h-4 border-2 border-white/30 rounded-full border-t-transparent animate-spin" />
        </motion.div>
      )}
      
      {/* Button content */}
      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );
};

'use client';

import { GlassmorphismCard } from './GlassmorphismCard';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  billingCycle: string;
  features: string[];
  isPopular?: boolean;
  glowColor?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  billingCycle,
  features,
  isPopular = false,
  glowColor = '#00ffff'
}) => {
  return (
    <GlassmorphismCard 
      glowColor={glowColor}
      enableTilt={true}
      className={`h-full flex flex-col ${isPopular ? 'border-2' : ''}`}
      style={isPopular ? { borderColor: glowColor } : {}}
    >
      {isPopular && (
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-widest z-20"
          style={{ backgroundColor: glowColor, color: '#000' }}
        >
          Most Popular
        </div>
      )}
      
      <div className="p-8 flex flex-col h-full">
        <div className="mb-8">
          <h3 className="text-xl font-mono text-gray-400 uppercase tracking-[0.2em] mb-2">{name}</h3>
          <div className="flex items-baseline space-x-1">
            <span className="text-5xl font-bold text-white tracking-tight">{price}</span>
            <span className="text-gray-500 font-mono text-sm uppercase">{billingCycle}</span>
          </div>
        </div>

        <ul className="space-y-4 mb-10 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3 text-sm text-gray-300">
              <div className="mt-1 p-0.5 rounded-full bg-white/10">
                <Check size={12} style={{ color: glowColor }} strokeWidth={3} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button 
          className="w-full py-4 rounded font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 relative group overflow-hidden"
          style={{ 
            backgroundColor: isPopular ? glowColor : 'transparent',
            color: isPopular ? '#000' : glowColor,
            border: `1px solid ${glowColor}`
          }}
        >
          <span className="relative z-10">Initialize Access</span>
          {!isPopular && (
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
              style={{ backgroundColor: glowColor }}
            />
          )}
        </button>
      </div>
    </GlassmorphismCard>
  );
};

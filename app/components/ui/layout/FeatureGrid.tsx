'use client';

import { motion } from 'framer-motion';
import { useStaggerAnimation } from '../../../hooks/useStaggerAnimation';
import { FeatureCard } from '../cards/FeatureCard';
import { LucideIcon } from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  glowColor?: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  const { ref, controls, containerVariants, itemVariants } = useStaggerAnimation(0.15);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {features.map((feature) => (
        <motion.div key={feature.id} variants={itemVariants}>
          <FeatureCard 
            title={feature.title}
            description={feature.description}
            Icon={feature.Icon}
            glowColor={feature.glowColor}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

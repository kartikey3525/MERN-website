import { motion } from 'framer-motion';

/**
 * GradientText - Animated gradient text with shimmer effect
 */
export const GradientText = ({
  children,
  className = '',
  animate = true
}) => {
  return (
    <motion.span
      className={`text-gradient ${className}`}
      style={{
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
        backgroundSize: animate ? '200% auto' : '100% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
      animate={animate ? {
        backgroundPosition: ['0% center', '200% center']
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {children}
    </motion.span>
  );
};

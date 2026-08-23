import { motion } from 'framer-motion';

/**
 * AnimatedButton - Button with hover and tap animations
 */
export const AnimatedButton = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseClass = variant === 'primary' ? 'btn' : 'secondary-btn';

  return (
    <motion.button
      className={`${baseClass} ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: 0.95
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

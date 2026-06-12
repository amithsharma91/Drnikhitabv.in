import { motion } from 'framer-motion';

export default function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
  icon,
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  className?: string;
  href?: string;
  icon?: string;
  [key: string]: unknown;
}) {
  const baseClasses =
    'relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400/50';

  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white text-foreground-800 border-2 border-foreground-200 hover:border-primary-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    outline: 'bg-transparent text-white border-2 border-white/60 hover:bg-white/15 hover:border-white/80 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 active:translate-y-0',
  };

  const combined = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: 'easeOut' },
  };

  const content = (
    <>
      {icon && <i className={`${icon} text-lg`}></i>}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={combined}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combined}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}

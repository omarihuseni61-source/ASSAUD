import { cn } from '@/lib/utils';

type BadgeVariant = 'maroon' | 'green' | 'purple' | 'orange' | 'gray' | 'red';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  maroon: 'bg-red-800 text-red-800',
  green: 'bg-green-100 text-green-700',
  purple: 'bg-purple-100 text-purple-700',
  orange: 'bg-orange-100 text-orange-700',
  gray: 'bg-gray-100 text-gray-700',
  red: 'bg-red-100 text-red-700',
};

export function Badge({ children, variant = 'maroon', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

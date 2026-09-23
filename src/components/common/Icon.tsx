import {
  Book,
  Briefcase,
  Megaphone,
  Users,
  Lightbulb,
  Star,
  Shield,
  Heart,
  Award,
  Handshake,
  Calendar,
  Info,
  Target,
  Eye,
  CheckCircle2,
  TrendingUp,
  Database,
  AlertTriangle,
  DollarSign,
  GraduationCap,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  book: Book,
  briefcase: Briefcase,
  megaphone: Megaphone,
  users: Users,
  lightbulb: Lightbulb,
  star: Star,
  shield: Shield,
  heart: Heart,
  award: Award,
  handshake: Handshake,
  calendar: Calendar,
  info: Info,
  target: Target,
  eye: Eye,
  check: CheckCircle2,
  'trending-up': TrendingUp,
  database: Database,
  'alert-triangle': AlertTriangle,
  'dollar-sign': DollarSign,
  graduation: GraduationCap,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name] || Book;
  return <IconComponent className={className} />;
}
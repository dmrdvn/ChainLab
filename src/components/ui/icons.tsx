// components/ui/icons.tsx
import {
    AlertOctagon,
    AlertTriangle,
    ArrowRightLeft,
    Activity,
    Bell,
    Calculator,
    Coins,
    Box, 
    Database,
    Edit,
    Eye,
    Code2, 
    GitMerge,
    Hash,
    Image,
    Target,
    Cloud,
    Type,
    Key,
    List,
    Map,
    Pause,
    Power,
    Globe,
    Puzzle, 
    Shield,
    ShieldCheck,
    Text,
    ToggleLeft,
    User,
    Users,
    Wallet,
    Lock,
    Link,
    LineChart,
    PhoneCall,
    type LucideIcon,
  } from "lucide-react";
  
  export type Icon = LucideIcon;
  
  export const Icons = {
    AlertOctagon,
    AlertTriangle,
    ArrowRightLeft,
    Activity,
    Bell,
    Calculator,
    Coins,
    Cube: Box, 
    Database,
    Edit,
    Eye,
    Function: Code2, 
    GitMerge,
    Hash,
    Image,
    Key,
    Globe,
    List,
    Map,
    Pause,
    Power,
    Puzzle, 
    Shield,
    ShieldCheck,
    Text,
    ToggleLeft,
    User,
    Users,
    Wallet,
    Lock,
    Box,
    Link,
    LineChart,
    PhoneCall,
  } as const;
  
  export type IconName = keyof typeof Icons;
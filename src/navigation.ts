// src/navigation.ts
import { createNavigation } from 'next-intl/navigation';
import { routing } from './i18n/routing'; // Import from routing.ts

// ONLY export the tools here
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
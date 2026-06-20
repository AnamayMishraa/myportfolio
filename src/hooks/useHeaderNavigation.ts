/**
 * useHeaderNavigation Hook
 * Manages navigation links based on current page
 */

'use client';

import { usePathname } from 'next/navigation';

export interface NavLink {
  href: string;
  label: string;
  isAnchor: boolean;
}

/**
 * Returns navigation links appropriate for current page
 * Home page uses anchor links, other pages use absolute paths
 */
export function useHeaderNavigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const getNavLinks = (): NavLink[] => {
    return [
      { href: '/', label: 'Home', isAnchor: false },
      { href: '/about', label: 'About', isAnchor: false },
      { href: '/projects', label: 'Projects', isAnchor: false },
      { href: '/homelabs', label: 'Home Labs', isAnchor: false },
      { href: '/academics', label: 'Academics', isAnchor: false },
      { href: '/experience', label: 'Experience', isAnchor: false },
      { href: '/blog', label: 'Blog', isAnchor: false },
      { href: '/contact', label: 'Contact', isAnchor: false },
    ];
  };

  return {
    navLinks: getNavLinks(),
    isHome,
    pathname,
  };
}

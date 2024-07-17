'use client';

import { useState } from 'react';
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);

  useMotionValueEvent(scrollY, 'change', (latestScrollPos) => {
    if (
      latestScrollPos > (scrollY.getPrevious() ?? 0) &&
      (scrollY.getPrevious() ?? 0) >= 50
    ) {
      setShowNavbar(false);
      setIsMenuOpen(false);
    } else {
      setShowNavbar(true);
    }
  });

  const menuItems = [
    // {
    //   title: 'Portfolio',
    //   url: '#portfolio',
    // },
    {
      title: 'Projects',
      url: '#projects',
    },
    // {
    //   title: 'About',
    //   url: '#about',
    // },
    // {
    //   title: 'Contact Me',
    //   url: '#contact-me',
    // },
  ];

  return (
    <>
      <NextUiNavbar
        // shouldHideOnScroll
        isBordered
        maxWidth='lg'
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          base: `transition-transform ${!showNavbar && '-translate-y-full'}`,
          wrapper: 'px-4 xl:px-0',
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden'
          />
          <NavbarBrand>
            <Link href='/' className='font-bold text-inherit'>
              Valdi
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          {menuItems.map(({ title, url }, index) => (
            <NavbarMenuItem key={`${title}-${index}`}>
              <Link
                color='foreground'
                className='w-full font-semibold'
                href={url}
                size='lg'
                aria-current='page'
              >
                {title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarContent>

        <NavbarContent justify='end'>
          <NavbarItem>
            <Button
              as={Link}
              href='#contact'
              variant='shadow'
              aria-current='page'
            >
              Contact Me
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map(({ title, url }, index) => (
            <NavbarMenuItem key={`${title}-${index}`}>
              <Link
                color='foreground'
                className='w-full'
                href={url}
                size='lg'
                aria-current='page'
                onPress={() => setIsMenuOpen(false)}
              >
                {title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NextUiNavbar>
    </>
  );
}

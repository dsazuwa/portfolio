import {
  Cross1Icon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  MinusIcon,
} from '@radix-ui/react-icons';
import { useState } from 'react';
import clsx from 'clsx';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar({ className }: { className: string }) {
  const sections = [
    { label: 'Home', href: '#hero' },
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <nav
      className={clsx(
        'fixed top-0 z-10 flex h-[56px] w-full flex-row items-center justify-between p-4 md:static md:h-full md:w-auto md:flex-col md:items-start md:px-10 md:py-10 lg:px-10',
        className,
      )}
    >
      <a className='text-lg font-semibold capitalize'>Danielle</a>

      <div className='hidden w-full text-xs font-medium hover:text-slate-300 md:flex md:flex-col'>
        {sections.map(({ label, href }, i) => (
          <a
            key={`section-${i}`}
            href={href}
            className='group relative flex py-2.5 transition-all hover:text-black'
            onClick={() => setValue(i)}
          >
            <div className='flex w-full translate-x-[0px] flex-row transition-all group-hover:translate-x-[20px]'>
              <span>{label}</span>

              {i === value && (
                <div className='ml-0.5 h-1.5 w-1.5 rounded-full bg-secondary' />
              )}
            </div>

            <div className='absolute flex items-center overflow-hidden'>
              <MinusIcon className='mr-1 w-4 translate-x-[-20px] transition-all group-hover:translate-x-[0px]' />
            </div>
          </a>
        ))}
      </div>

      <div className='hidden py-2 md:flex md:flex-row md:justify-end md:space-x-2'>
        <EnvelopeClosedIcon className='h-3 w-3' />
        <GitHubLogoIcon className='h-3 w-3' />
      </div>

      <div className='flex p-1 md:hidden'>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </DropdownMenuTrigger>

          <DropdownMenuContent className='mt-[15px] w-[calc(100vw-32px)]'>
            <DropdownMenuRadioGroup
              value={value + ''}
              onValueChange={(e) => setValue(Number.parseInt(e, 10))}
            >
              {sections.map(({ label, href }, i) => (
                <a key={`menu-item-${i}`} href={href}>
                  <DropdownMenuRadioItem value={i + ''} className='py-2'>
                    {label}
                  </DropdownMenuRadioItem>
                </a>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

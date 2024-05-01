import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface MenuItemProps {
  title: string; 
  address: string;
  Icon: IconType;
}

export default function MenuItem({ title, address, Icon }: MenuItemProps) {
  return (
    <Link href={address} className='hover:text-green-500 text-2xl'>
        <Icon />
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  );
};

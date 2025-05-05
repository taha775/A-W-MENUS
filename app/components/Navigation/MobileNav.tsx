import React from 'react';
import { ImCross } from 'react-icons/im';
import Link from 'next/link';

interface Props {
  showNav: boolean;
  closeNav: () => void;
}


const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'shop', label: 'Shop' },
  { href: '/', key: 'menu', label: 'Menu' },
  { href: '/', key: 'blog ', label: 'Blog' },
  { href: '/', key: 'contact', label: 'Contact' },
];

const MobileNav = ({ closeNav, showNav }: Props) => {
  
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className={` fixed ${navStyle} right-0 transition-all duration-500 left-0 
    top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
      
      {/* close icon */}
      <ImCross onClick={closeNav} className=' absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white' />
      
      {/* nav links */}
      <div className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 
      flex flex-col items-center justify-center w-[70%] h-[100%]`}>
        
        <ul className="space-y-10">
          {NAV_LINKS.map((link) => (
            <>
          <li className='text-[35px] font-medium hover:text-yellow-400 text-white'>
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          </li>
              </>
            ))}
        </ul>

      </div>
    </div>
  )
}

export default MobileNav;
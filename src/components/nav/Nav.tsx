'use client';

import { InfoContext } from '@/providers/Info';
import { useViewportSize, useWindowScroll } from '@mantine/hooks';
import React, { useContext, useState } from 'react';
import Banner from './Banner';
import Image from 'next/image';
import Links from './Links/Links';
import Hamburger from './Hamburger/Hamburger';
import Link from 'next/link';
import { AnimatePresence, m } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';

const Nav: React.FC = () => {
	const [scroll] = useWindowScroll();
	const { width } = useViewportSize();
	const { info } = useContext(InfoContext);

	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const [bannerOpen, setBannerOpen] = useState(true);

	return (
		<>
			<AnimatePresence>{hamburgerOpen && <Hamburger setOpen={setHamburgerOpen} />}</AnimatePresence>
			<div className='fixed z-30 top-0 left-0 w-full max-w-[100vw]'>
				<div
					className={`flex justify-between items-center px-[5vw] sm:px-[20vw] py-1 ${
						scroll.y > 0 ? 'bg-[var(--bg-normal)]' : 'backdrop-blur-md bg-[#000a]'
					} transition-all`}>
					<Link
						href='/'
						title='Home'
						className='flex items-center gap-3 hover:bg-[var(--highlight-high)] focus-visible:bg-[var(--highlight-high)] rounded-xl transition-colors'>
						<Image src={info.logo_src} alt='' width={50} height={50} />
						{/* <p className='sm:text-xl font-bold'>{info.name}</p> */}
					</Link>
					{info.banner && !bannerOpen && width > 500 && (
						<m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='w-1/2 center'>
							<Link
								href={info.banner.url}
								title={info.banner.text}
								className='flex items-center justify-center text-center lg:text-xl font-bold uppercase rounded-xl bg-[var(--accent)] px-5 py-2 h-5/6 w-1/2'>
								{info.banner.text}
							</Link>
						</m.div>
					)}
					{width > 1000 ? (
						<Links />
					) : (
						<button className='icon' onClick={() => setHamburgerOpen(true)} title='Menu'>
							<MenuIcon />
						</button>
					)}
				</div>
				<AnimatePresence>
					{bannerOpen && (
						<m.div exit={{ opacity: 0, y: -50, scale: 0.75 }}>
							<Banner setOpen={setBannerOpen} />
						</m.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default Nav;

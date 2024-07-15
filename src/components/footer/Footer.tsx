'use client';

import React, { useContext } from 'react';
import Socials from './Socials';
import Grid from './Grid';
import { InfoContext } from '@/providers/Info';
import Link from 'next/link';

const Footer: React.FC = () => {
	const { info } = useContext(InfoContext);

	return (
		<div className='w-full p-20 flex'>
			<div className='w-full'>
				<div className='flex justify-between gap-5 flex-col sm:flex-row'>
					<Grid />
					<Socials />
				</div>
				<hr className='hr my-5' />
				<div className='flex justify-between gap-5 flex-col sm:flex-row'>
					<p className='text-xl font-bold'>{info.copyright ?? info.name}</p>
					<Link href='/sitemap.xml' title='Sitemap' className='link'>
						Sitemap
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;

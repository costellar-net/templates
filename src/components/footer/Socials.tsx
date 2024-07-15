'use client';

import { InfoContext } from '@/providers/Info';
import Link from 'next/link';
import React, { useContext } from 'react';

const Socials: React.FC = () => {
	const { info } = useContext(InfoContext);

	if (!info.socials) {
		return;
	}

	return (
		<div className='flex gap-5'>
			{info.socials.map((social, i) => {
				return (
					<Link href={social.url} title={`Link to our ${social.url}`} key={i}>
						{React.cloneElement(social.icon, {
							sx: { width: 100, height: 100 },
							className: 'fill-[var(--text-low)] hover:fill-[var(--accent)]',
						})}
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;

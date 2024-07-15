import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Close, Home } from '@mui/icons-material';
import { m } from 'framer-motion';
import { InfoContext } from '@/providers/Info';
import Group from './Group';

interface P {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger: React.FC<P> = ({ setOpen }) => {
	const pathname = usePathname();
	const { info } = useContext(InfoContext);

	return (
		<m.div
			// initial={{ opacity: 0, y: '-101%' }}
			// animate={{ opacity: 1, y: 0 }}
			// exit={{ opacity: 1, y: '-101%' }}
			initial={{ opacity: 0, scale: 0.75 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.75 }}
			transition={{ ease: 'anticipate' }}
			className='z-40 fixed w-[102%] -left-[1%] h-full  bg-[var(--bg-normal)] flex items-center justify-center overflow-hidden rounded-xl'>
			<div className='flex flex-col gap-5 size-[80%] overflow-y-scroll'>
				<Link
					href='/'
					title='Home'
					className={`anchor !p-5 !gap-5 ${pathname === '/' ? 'fill-[var(--accent)] text-[var(--accent)]' : ''}`}>
					<Home />
					<p className='text-3xl'>Home</p>
				</Link>
				{info.sitemap.map((group, i) => {
					if (group.items) {
						return <Group data={group} key={i} />;
					}

					if (group.callback) {
						return (
							<button title={group.title} onClick={group.callback} key={i} className='anchor !p-5 !gap-5'>
								{group.icon}
								<p className='text-3xl'>{group.title}</p>
							</button>
						);
					}

					if (group.link) {
						return (
							<Link
								href={group.link}
								title={group.title}
								key={i}
								className={`anchor !p-5 !gap-5 ${
									pathname === group.link ? 'fill-[var(--accent)] text-[var(--accent)]' : ''
								}`}>
								{group.icon}
								<p className='text-3xl'>{group.title}</p>
							</Link>
						);
					}

					return <p key={i}>Error</p>;
				})}
			</div>
			<button className='icon absolute top-0 right-0 m-5' title='Close' onClick={() => setOpen(false)}>
				<Close />
			</button>
		</m.div>
	);
};

export default Hamburger;

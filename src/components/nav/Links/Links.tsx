import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InfoContext } from '@/providers/Info';
import Group from './Group';

const Links: React.FC = () => {
	const { info } = useContext(InfoContext);
	const pathname = usePathname();

	return (
		<div className='flex items-center gap-5'>
			{info.sitemap.map((group, i) => {
				if (group.items) {
					return (
						<div key={i}>
							<Group data={group} />
						</div>
					);
				}

				if (group.callback) {
					return (
						<button title={group.title} onClick={group.callback} key={i} className='anchor'>
							{group.icon}
							<p className='text-xl font-bold'>{group.title}</p>
						</button>
					);
				}

				if (group.link) {
					return (
						<Link
							href={group.link}
							title={group.title}
							key={i}
							className={`anchor ${pathname === group.link ? 'fill-[var(--accent)] text-[var(--accent)]' : ''}`}>
							{group.icon}
							<p className='text-xl font-bold'>{group.title}</p>
						</Link>
					);
				}

				return <p>Error</p>;
			})}
		</div>
	);
};

export default Links;

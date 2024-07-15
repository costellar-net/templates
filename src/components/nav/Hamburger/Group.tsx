import type { Sitemap } from '@/lib/info';
import React, { useState } from 'react';
import { ChevronRight } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m } from 'framer-motion';

interface P {
	data: Sitemap.Group;
}

const Group: React.FC<P> = ({ data }) => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	if (!data.items) {
		return <p>Error</p>;
	}

	return (
		<>
			<button title={data.title} onClick={() => setOpen((prev) => !prev)} className='anchor !p-5 !gap-5 justify-between'>
				<div>
					{data.icon}
					<p className={`text-3xl ${open ? 'text-[var(--text-normal)]' : ''}`}>{data.title}</p>
				</div>
				<ChevronRight className={`transition-all ${open ? 'rotate-90' : ''}`} />
			</button>
			{open && (
				<div className='flex flex-col gap-5 px-[5%]'>
					{data.items.map((item, i) => {
						if (item.callback) {
							return (
								<m.div
									key={i}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.05 }}>
									<button title={item.title} onClick={item.callback} className='anchor'>
										{item.icon}
										<div>
											<p className='text-xl font-bold text-[var(--text-normal)]'>{item.title}</p>
											<p>{item.description}</p>
										</div>
									</button>
								</m.div>
							);
						}

						if (item.link) {
							return (
								<m.div
									key={i}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.05 }}>
									<Link
										href={item.link}
										title={item.title}
										className={`anchor ${pathname === item.link ? 'bg-[var(--accent-opacity)]' : ''}`}>
										{item.icon}
										<div>
											<p className='text-xl font-bold text-[var(--text-normal)]'>{item.title}</p>
											<p>{item.description}</p>
										</div>
									</Link>
								</m.div>
							);
						}

						return <p>Error</p>;
					})}
				</div>
			)}
		</>
	);
};

export default Group;

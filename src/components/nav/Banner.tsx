import { InfoContext } from '@/providers/Info';
import React, { useContext } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from 'next/link';

interface P {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner: React.FC<P> = ({ setOpen }) => {
	const { info } = useContext(InfoContext);

	if (!info.banner) {
		return;
	}

	return (
		<div className='h-10 bg-[var(--accent-dark)] hover:bg-[var(--accent)] focus-visible:bg-[var(--accent)] transition-all flex items-center justify-around rounded-xl mx-2 xl:mx-10 my-2 px-2 shadow-lg'>
			<Link href={info.banner.url} title={info.banner.text} className='w-[90%] center text-xl font-bold uppercase'>
				{info.banner.text}
			</Link>
			<button title='Close' className='icon !p-1' onClick={() => setOpen(false)}>
				<CloseRoundedIcon />
			</button>
		</div>
	);
};

export default Banner;

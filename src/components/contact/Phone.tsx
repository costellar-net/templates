import Link from 'next/link';

const phone = '(716) 427-4280';

const Phone: React.FC = () => {
	return (
		<Link href={`tel:${phone}}`} className='link'>
			{phone}
		</Link>
	);
};

export default Phone;

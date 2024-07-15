import Link from 'next/link';

const email = 'contact@costellar.net';

const Email: React.FC = () => {
	return (
		<Link href={`mailto:${email}`} className='link'>
			{email}
		</Link>
	);
};

export default Email;

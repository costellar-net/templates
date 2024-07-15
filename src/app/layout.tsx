import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Animations from '@/lib/animations/lazy';
import { ThemeProvider } from '@/providers/Theme';
import { InfoProvider } from '@/providers/Info';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
	title: 'Costellar',
	description: 'Template website',
	keywords: ['awesome keywords'],
};

const font = Inter({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700'],
	fallback: ['sans-serif'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<ThemeProvider font={font.className}>
				<InfoProvider>
					<Animations>
						<Nav />
						{children}
						<Footer />
					</Animations>
				</InfoProvider>
			</ThemeProvider>
		</html>
	);
}

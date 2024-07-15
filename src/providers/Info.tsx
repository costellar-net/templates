'use client';

import { company_info, Info } from '@/lib/info';
import { createContext, useState } from 'react';

interface InfoValues {
	changeInfo: (to: Info) => void;
	info: Info;
}

export const InfoContext = createContext<InfoValues>({
	changeInfo: () => {},
	info: company_info,
});

export const InfoProvider = ({ children }: { children: React.ReactNode }) => {
	const [info, setInfo] = useState<Info>(company_info);

	const changeInfo = (to: Partial<Info>): void => {
		setInfo({ ...info, ...to });
	};

	return <InfoContext.Provider value={{ changeInfo, info }}>{children}</InfoContext.Provider>;
};

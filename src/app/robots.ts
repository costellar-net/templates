import { company_info } from '@/lib/info';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: company_info.domain + '/sitemap.xml',
	};
}

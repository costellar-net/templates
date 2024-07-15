import { company_info } from '@/lib/info';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const sitemap: MetadataRoute.Sitemap = [
		{
			url: company_info.domain,
			lastModified: company_info.last_update,
			changeFrequency: 'monthly',
			priority: 1,
		},
	];

	company_info.sitemap.forEach((group) => {
		if (group.link && !group.exempt) {
			sitemap.push({
				url: company_info.domain + group.link,
				lastModified: company_info.last_update,
				changeFrequency: 'monthly',
				priority: 0.5,
			});
		}

		if (group.items) {
			group.items.forEach((item) => {
				if (!item.link || item.exempt) {
					return;
				}

				sitemap.push({
					url: company_info.domain + item.link,
					lastModified: company_info.last_update,
					changeFrequency: 'monthly',
					priority: 0.5,
				});
			});
		}
	});

	return sitemap;
}

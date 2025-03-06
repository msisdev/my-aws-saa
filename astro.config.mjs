// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: '3-start',
					autogenerate: { directory: '3-start' },
				},
				{
					label: '4-iam',
					autogenerate: { directory: '4-iam' },
				},
				{
					label: '5-ec2',
					autogenerate: { directory: '5-ec2' },
				},
			],
		}),
	],
})

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'AWS SAA',
      social: {
        github: 'https://github.com/msisdev/my-aws-saa',
      },
      customCss: [
        "./src/styles/custom.css",
      ],
      sidebar: [
        // {
        // 	label: 'Guides',
        // 	items: [
        // 		// Each item here is one entry in the navigation menu.
        // 		{ label: 'Example Guide', slug: 'guides/example' },
        // 	],
        // },
        {
          label: 'welcome',
          autogenerate: { directory: 'welcome' },
          collapsed: true,
        },
        {
          label: '3-start',
          autogenerate: { directory: '3-start' },
          collapsed: true,
        },
        {
          label: '4-iam',
          autogenerate: { directory: '4-iam' },
          collapsed: true,
        },
        {
          label: '5-ec2',
          autogenerate: { directory: '5-ec2' },
          collapsed: true,
        },
        {
          label: '6-ec2-adv',
          autogenerate: { directory: '6-ec2-adv' },
          collapsed: true,
        },
        {
          label: '7-ec2-storage',
          autogenerate: { directory: '7-ec2-storage' },
          collapsed: true,
        },
      ],
    }),
	],

  adapter: cloudflare(),
})
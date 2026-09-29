export default {
	name: 'page',
	title: 'Page',
	type: 'document',

	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
				maxLength: 96
			},
		},
		// {
		// 	name: 'parent',
		// 	type: 'reference',
		// 	to: [{ type: 'page' }],
		// 	title: 'Parent Page'
		// },
		{
			name: 'order',
			type: 'number',
			title: 'Menu Order'
		},
		// {
		// 	name: 'image',
		// 	type: 'image',
		// 	title: 'Background Image',
		// 	options: { hotspot: true },
		// 	fields: [
		// 		{
		// 			name: 'alt',
		// 			type: 'string',
		// 			title: 'Alt text'
		// 		}
		// 	]
		// },
		{
			name: 'sections',
			type: 'array',
			title: 'Sections',
			of: [
				{ type: 'rowSection' },
				{ type: 'heroSection' },
				{ type: 'textSection' },
				{ type: 'imageSection' },
				{ type: 'servicesSection' },
				{ type: 'industriesSection' }
			]
		},
		{ 
			name: 'classname', 
			type: 'string', 
			title: 'Custom Class' 
		},
		{
			name: 'footer',
			type: 'footer',
			title: 'Footer',
			options: {
				collapsible: true,
				collapsed: true
			}
		},
		{
			name: 'seo',
			type: 'seo',
			title: 'SEO Settings',
			options: {
				collapsible: true,
				collapsed: true
			}
		}
	],

	preview: {
		select: {
			title: 'title',
			media: 'image'
		}
	}
};
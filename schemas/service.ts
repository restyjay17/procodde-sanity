export default {
	name: "service",
	title: "Services",
	type: "document",
	fields: [
		{ 
			name: "title", 
			type: "string" 
		},
		{ 
			name: "slug", 
			type: "slug", 
			options: { source: "title" } },
		{ 
			name: 'order', 
			type: 'number', 
			title: 'Menu Order' },
		{ 
			name: "summary", 
			type: "text" }, 
		{ 
			name: "image", 
			type: "image", 
			title: 'Image',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alt text'
				}
			] 
		},
		{
			name: 'sections',
			type: 'array',
			title: 'Sections',
			of: [
				{ type: 'rowSection' },
				{ type: 'heroSection' },
				{ type: 'textSection' },
				{ type: 'imageSection' },
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
	]
};
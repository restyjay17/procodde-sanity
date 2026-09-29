export default {
	name: 'imageSection',
	type: 'object',
	title: 'Image Section',
	fields: [
		{ 
			name: 'headline', 
			type: 'string', 
			title: 'Headline' 
		},
		{ 
			name: 'subtext', 
			type: 'text', 
			title: 'Subtext' 
		},
		{
			name: 'backgroundImage',
			type: 'image',
			title: 'Background Image',
		},
		{ 
			name: 'images', 
			type: 'array', 
			of: [{ type: 'image' }], 
			title: 'Image' 
		},
		{ 
			name: 'classname', 
			type: 'string', 
			title: 'Custom Class' 
		}
	]
};
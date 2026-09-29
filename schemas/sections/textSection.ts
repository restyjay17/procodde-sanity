export default {
	name: 'textSection',
	type: 'object',
	title: 'Text Section',
	fields: [
		{ 
			name: 'body', 
			type: 'array', 
			of: [{ type: 'block' }], 
			title: 'Text Content' 
		},
		{ 
			name: 'images', 
			type: 'array', 
			of: [{ type: 'image' }], 
			title: 'Image' 
		},
		{
			name: 'backgroundImage',
			type: 'image',
			title: 'Background Image',
		},
		{ name: 'classname', type: 'string', title: 'Custom Class' }
	]
};
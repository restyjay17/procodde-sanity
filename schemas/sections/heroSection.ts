export default {
	name: 'heroSection',
	type: 'object',
	title: 'Hero Section',
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
			 title: 'Background Image' 
		},
		{
			name: 'backgroundVideo',
			type: 'file',
			title: 'Background Video',
			options: {
				accept: 'video/*'
			}
		},
		{ 
			name: 'classname', 
			type: 'string', 
			title: 'Custom Class' 
		}
	]
};
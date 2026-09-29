export default {
    name: 'background',
    title: 'Background',
    type: 'object',
    fields: [
        {
            name: 'backgroundClass',
            type: 'string',
            title: 'Background Custom Class'
        },
		{
			name: 'backgroundImage',
			type: 'image',
			title: 'Background Image',
		},
        {
            name: 'backgroundImageClass',
            type: 'string',
            title: 'Background Image Class'
        },
        {
            name: 'backgroundImageType',
            type: 'string',
            title: 'Background Image Type',
            options: {
                list: [
                    { title: 'Inline Style', value: 'inline' },
                    { title: 'Separate HTML', value: 'separate' }
                ],
                layout: 'radio'
            }
        },
        {
            name: 'backgroundImageLoading',
            type: 'string',
            title: 'Background Image Loading',
            options: {
                list: [
                    { title: 'Eager', value: 'eager' },
                    { title: 'Lazy', value: 'lazy' }
                ],
                layout: 'radio'
            },
            initialValue: 'lazy'
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
            name: 'backgroundVideoPoster',
            type: 'image',
            title: 'Background Video Poster'
        },
        {
            name: 'backgroundVideoClass',
            type: 'string',
            title: 'Background Video Class'
        }
    ]
}
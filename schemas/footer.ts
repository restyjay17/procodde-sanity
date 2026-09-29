export default {
    name: 'footer',
    type: 'object',
    title: 'Footer',
    fields: [
        {
            name: 'text',
            type: 'array',
            title: 'Tagline',
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ]
                    }
                }
            ]
        },
        {
            name: 'backgroundImage',
            type: 'image',
            title: 'Background Image'
        },
        {
            name: 'classname',
            type: 'string',
            title: 'Custom Class'
        }
    ]
};
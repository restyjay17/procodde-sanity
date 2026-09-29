export default {
    name: 'textElement',
    type: 'object',
    title: 'Text Field',
    fields: [
        {
            name: 'elementTitle',
            type: 'string',
            title: 'Element Title'
        },
        {
            name: 'text',
            type: 'array',
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
                },
            ],
            title: 'Text Content',
        },
        {
            name: 'classname',
            type: 'string',
            title: 'Custom Class'
        }
    ]
};
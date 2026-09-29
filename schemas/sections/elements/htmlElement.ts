export default {
    name: 'htmlElement',
    type: 'object',
    title: 'HTML Element',
    fields: [
        {
            name: 'elementTitle',
            type: 'string',
            title: 'Element Title'
        },
        {
            name: 'html',
            type: 'code',
            title: 'HTML Code',
            options: {
                language: 'html'
            }
        },
        {
            name: 'classname',
            type: 'string',
            title: 'Custom Class'
        }
    ]
};
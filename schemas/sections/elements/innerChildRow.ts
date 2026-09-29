export default {
    name: 'innerChildRow',
    type: 'object',
    title: 'Inner Child Row',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Inner Child Row Title'
        },
        {
            name: 'elements',
            type: 'array',
            title: 'Elements',
            of: [
                { type: 'container' },
                { type: 'textElement' },
                { type: 'linkElement' },
                { type: 'imageElement' },
                { type: 'videoElement' },
                { type: 'htmlElement' },
                { type: 'textWithImageElement' },
                { type: 'servicesElement' },
                { type: 'industriesElement' },
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
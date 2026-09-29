export default {
    name: 'innerRow',
    type: 'object',
    title: 'Inner Row',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Inner Row Title',
        },
        {
            name: 'elements',
            type: 'array',
            title: 'Elements',
            of: [
                { type: 'innerChildRow' },
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
            title: 'Background Image',
        },
        {
            name: 'classname',
            type: 'string',
            title: 'Custom Class'
        }
    ]
};
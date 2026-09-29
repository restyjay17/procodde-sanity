export default {
    name: 'rowSection',
    type: 'object',
    title: 'Row',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Row Title',
        },
        {
            name: 'elements',
            type: 'array',
            title: 'Elements',
            of: [
                { type: 'innerRow' },
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
            name: 'classname',
            type: 'string',
            title: 'Custom Class'
        },
        {
            name: 'background',
            type: 'background',
            title: 'Background Settings',
            options: {
                collapsible: true,
                collapsed: true
            }
        }
    ]
};
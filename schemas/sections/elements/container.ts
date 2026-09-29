export default {
    name: 'container',
    type: 'object',
    title: 'Container',
    fields: [
        {
            name: 'containerTitle',
            type: 'string',
            title: 'Container Label'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'elements',
            type: 'array',
            title: 'Elements',
            of: [
                { type: 'textElement' },
                { type: 'linkElement' },
                { type: 'imageElement' },
                { type: 'htmlElement' },
                { type: 'textWithImageElement' },
            ]
        },
        {
            name: 'classname',
            type: 'string',
            title: 'Custom Class'
        }
    ],
    preview: {
        select: {
            title: 'containerTitle',
        }
    }
};
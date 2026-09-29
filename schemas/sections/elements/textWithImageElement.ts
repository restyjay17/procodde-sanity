export default {
    name: 'textWithImageElement',
    type: 'object',
    title: 'Text With Image',
    fields: [
        {
            name: 'text',
            type: 'string',
            title: 'Text'
        },
        {
            name: 'mediaType',
            type: 'string',
            title:' Media Type',
            options: {
                list: [
                    { title: 'Image', value: 'image' },
                    { title: 'SVG', value: 'svg' },
                ],
                layout: 'radio'
            },
            initialValue: 'image'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            hidden: ({ parent }: any) => parent?.mediaType !== 'image'
        },
        {
            name: 'imageAlt',
            type: 'string',
            title: 'Image Alt',
            hidden: ({ parent }: any) => parent?.mediaType !== 'image'
        },
        {
            name: 'svg',
            type: 'file',
            title: 'SVG',
            options: {
                accept: '.svg'
            },
            hidden: ({ parent }: any) => parent?.mediaType !== 'svg'
        },
        {
            name: 'classname',
            type: 'string',
            title: 'Custom Class'
        }
    ],
    preview: {
        select: {
            title: 'text',
            media: 'image'
        }
    }
};
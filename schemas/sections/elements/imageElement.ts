export default {
    name: 'imageElement',
    type: 'object',
    title: 'Image',
    fields: [
        {
            name: 'imageLabel',
            type: 'string',
            title: 'Image Label'
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
            name: 'images',
            type: 'array',
            title: 'Image',
            of: [
                { 
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt Text'
                        }
                    ]
                }
            ],
            hidden: ({ parent }: any) => parent?.mediaType !== 'image'
        },
        {
            name: 'title',
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
            title: 'imageLabel',
            media: 'image'
        }
    }
};
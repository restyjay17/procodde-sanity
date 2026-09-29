export default {
    name: 'linkElement',
    type: 'object',
    title: 'Link',
    fields: [
        {
            name: 'linkText',
            type: 'string',
            title: 'Link Text'
        },
        // {
        //     name: 'linkType',
        //     type: 'string',
        //     title: 'Link Type',
        //     options: {
        //         list: [
        //             { title: 'Custom URL', value: 'url' },
        //             { title: 'Page', value: 'page' }
        //         ],
        //         layout: 'radio'
        //     }
        // },
        {
            name: 'linkURL',
            type: 'string',
            title: 'Custom URL',
            // hidden: ({ parent }: any) => parent?.linkType !== 'url'
        },
        // {
        //     name: 'pageLink',
        //     type: 'reference',
        //     to: [{ type: 'page' }, { type: 'service' }, { type: 'industry' }],
        //     title: 'Select Page',
        //     hidden: ({ parent }: any) => parent?.linkType !== 'page'
        // },
        {
            name: 'classname',
            type: 'string',
            title: 'Custom Class'
        }
    ]
};
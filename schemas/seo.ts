export default {
    name: 'seo',
    title: 'SEO / Meta',
    type: 'object',
    fields: [
        {
            name: 'pageTitle',
            type: 'string',
            title: 'Page Title'
        },
        {
            name: 'metaDescription',
            type: 'string',
            title: 'Meta Description'
        },
        {
            name: 'metaKeywords',
            type: 'string',
            title: 'Meta Keywords'
        },
        {
            name: 'ogImage',
            type: 'image',
            title: 'openGraph Image'
        }
    ]
};
export default {
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'siteName',
            title: 'Site Name',
            type: 'string'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'favicon',
            title: 'Favicon',
            type: 'file'
        },
        {
            name: 'footerText',
            title: 'Footer Text',
            type: 'string'
        }
    ]
};
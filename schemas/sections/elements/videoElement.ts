export default {
    name: 'videoElement',
    type: 'object',
    title: 'Video',
    fields: [
        {
            name: 'video',
            type: 'file',
            title: 'Video File',
            options: {
                accept: 'video/*'
            }
        },
        {
            name: 'classname',
            type: 'string',
            title: 'Custom Class'
        }
    ]
};
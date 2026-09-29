export default {
    name: 'industriesElement',
    type: 'object',
    title: 'Industries List',
    fields: [
        {
            name: 'link',
            type: 'string',
            title: 'Main Link'
        },
        {
            name: 'industries',
            type: 'array',
            title: 'Industries',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'industry' }],
                    options: {
                        filter: ({ document }: any) => {
                            const selected = 
                                document?.sections
                                    ?.flatMap((section: any) => section.industry || [])
                                    ?.map((i: any) => i?._ref)
                                    .filter(Boolean) || [];

                            return {
                                filter: `!(_id in $selected)`,
                                params: {
                                    selected
                                }
                            };
                        }
                    }
                }
            ]
        },
        {
            name: 'classname',
            type: 'string',
            title: 'Custom Class'
        }
    ]
};
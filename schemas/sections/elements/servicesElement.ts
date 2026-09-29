export default {
    name: 'servicesElement',
    type: 'object',
    title: 'Services List',
    fields: [
        {
            name: 'link',
            type: 'string',
            title: 'Main Link'
        },
        {
            name: 'services',
            type: 'array',
            title: 'Services',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'service' }],
                    options: {
						filter: ({ document }: any) => {
							const selected =
								document?.sections
									?.flatMap((section: any) => section.services || [])
                                    ?.map((s: any) => s?._ref)
                                    .filter(Boolean) || [];

							return {
								filter: '!(_id in $selected)',
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
export default {
	name: "servicesSection",
	title: "Services Section",
	type: "object",
	fields: [
		{ 
			name: "title", 
			type: "string" 
		},
		{ 
			name: "description", 
			type: "string" 
		},
		{
			name: 'backgroundImage',
			type: 'image',
			title: 'Background Image',
		},
		{
			name: 'services',
			title: 'Services',
			type: 'array',
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
		{ name: 'classname', type: 'string', title: 'Custom Class' }
	]
};
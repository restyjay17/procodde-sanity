export default {
	name: "industriesSection",
	title: "Industries Section",
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
			name: "industries",
			type: "array",
			of: [
				{ 
					type: "reference", 
					to: [{ type: "industry" }],
					options: {
						filter: ({ document }: any) => {
							const selected =
								document?.sections
									?.flatMap((section: any) => section.industries || [])
									?.map((i: any) => i?._ref)
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
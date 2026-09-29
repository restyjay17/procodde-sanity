import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import deskStructure from './schemas/deskStructure'
import { codeInput } from '@sanity/code-input'

export default defineConfig({
	name: 'default',
	title: 'Procodde Website',

	projectId: '8x0g6zx3',
	dataset: 'production',

	plugins: [
		structureTool({
			structure: deskStructure
		}),
		visionTool(),
		codeInput()
	],

	schema: {
		types: schemaTypes,
	},

	studio: {
		components: {
			layout: (props) => props.renderDefault(props),
		},
	},
})

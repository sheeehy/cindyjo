import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Cindy Jorgji',
  

  projectId: 'lib7l8yy',
  dataset: 'production',

  plugins: [structureTool(), ],

  schema: {
    types: schemaTypes,
  },
})

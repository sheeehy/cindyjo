import {defineField, defineType} from 'sanity'

export const imagetype = defineType({
    name: 'imagetype',
    title: 'Image',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
      }),

      defineField({
        name: 'image',
        type: 'image',
      }),
  
  
    ],
  })
import { defineField, defineType } from 'sanity';

export const rateType = defineType({
  name: 'RateType',
  title: 'Rates',
  type: 'document',
  fields: [
    defineField({
      name: 'rates',
      type: 'array',
      title: 'Rates',
      of: [{ type: 'object', fields: [
        defineField({
          name: 'duration',
          type: 'string',
          title: 'Duration',
          description: 'Duration of the session (e.g., 30 minutes, 1 hour)',
        }),

        defineField({
          name: 'price',
          type: 'string',
          title: 'Price',
          description: 'Price of the session in USD',
        }),

        defineField({
          name: 'edits',
          type: 'string',
          title: 'Edits',
          description: 'Number of edits included in the session',
        }),

        defineField({
          name: 'looks',
          type: 'string',
          title: 'Looks',
          description: 'Number of different looks allowed in the session',
        }),

        defineField({
          name: 'locations',
          type: 'string',
          title: 'Locations',
          description: 'Number of locations included in the session',
        }),
      ]}],
    }),

    defineField({
      name: 'extras',
      type: 'array',
      title: 'Extras',
      of: [{ type: 'string' }],
      description: 'Additional services offered for the session (e.g., behind the scenes footage, raw photos)',
    }),
  ],
});

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Enter the category slug (e.g. "precision", "electrical", "foundry", "other-metal-parts"). Must match a Category document slug.',
    }),
    defineField({
      name: 'displayId',
      title: 'Display ID',
      description: 'Optional 2-digit number shown on home category cards (e.g. "01")',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'detailImage',
      title: 'Detail Image',
      description: 'Larger image shown on the product detail page. Falls back to Image if empty.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'customClass',
      title: 'Custom CSS Class',
      description: 'Optional extra class for image sizing tweaks (e.g. "scale-img-lg")',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      description: 'Feature cards shown on the product detail page',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              description: 'SVG or small image for the feature icon',
            }),
          ],
          preview: {
            select: { title: 'title', media: 'icon' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
});

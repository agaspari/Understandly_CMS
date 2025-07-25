import { defineType, defineField } from 'sanity'
import type { Rule } from 'sanity'

export const blog = defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField({ name: 'thumbnailImage', title: 'Thumbnail Image', type: 'image', options: { hotspot: true } }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: (Rule: Rule) => Rule.required(),
        }),
        defineField({
            name: 'datePublished',
            title: 'Date Published',
            type: 'datetime',
            validation: (Rule: Rule) => Rule.required(),
        }),
        defineField({
            name: 'estimatedReadTime',
            title: 'Estimated Read Time (minutes)',
            type: 'number',
            validation: (Rule: Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule: Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
        }),

        defineField({
            name: 'body',
            title: 'Body',
            type: 'bodyPortableText',
        }),

        defineField({
            name: 'callToAction',
            title: 'Call to Action',
            type: 'object',
            fields: [
                defineField({ name: 'text', title: 'Button Text', type: 'string' }),
                defineField({ name: 'url', title: 'URL', type: 'url' }),
            ],
        }),
    ],
})
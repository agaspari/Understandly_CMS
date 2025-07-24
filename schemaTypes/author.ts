import { defineType, defineField } from 'sanity'
import type { Rule } from 'sanity'

export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'position',
            title: 'Position / Title',
            type: 'string',
            description: 'e.g. "Staff Writer", "CEO"',
        }),
    ],
})
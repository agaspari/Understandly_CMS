import { defineType, defineField } from 'sanity'
import type { Rule } from 'sanity'

export const faqItem = defineType({
    name: 'faqItem',
    title: 'FAQ Item',
    type: 'object',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'text',
            validation: (Rule: Rule) => Rule.required(),
        }),
    ],
})
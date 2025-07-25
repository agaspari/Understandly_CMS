import { defineType, defineArrayMember } from 'sanity'
import type { Rule } from 'sanity'

export const bodyPortableText = defineType({
    name: 'bodyPortableText',
    title: 'Body',
    type: 'array',
    validation: (Rule: Rule) => Rule.min(1).required(),
    of: [
        defineArrayMember({
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'Quote', value: 'blockquote' },
            ],
            marks: {
                decorators: [
                    { title: 'Bold', value: 'strong' },
                    { title: 'Italic', value: 'em' },
                    { title: 'Code', value: 'code' },
                ],
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                            {
                                name: 'href',
                                type: 'url',
                                title: 'URL',
                                validation: (r: Rule) => r.uri({ allowRelative: true }),
                            },
                            { name: 'blank', type: 'boolean', title: 'Open in new tab?' },
                        ],
                    },
                ],
            },
        }),
        defineArrayMember({
            type: 'image',
            options: { hotspot: true },
            fields: [
                { name: 'alt', type: 'string', title: 'Alt text' },
                { name: 'caption', type: 'string', title: 'Caption' },
            ],
        }),
        defineArrayMember({ type: 'faqItem' }),
    ],
})
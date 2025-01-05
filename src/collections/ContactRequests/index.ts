import { CollectionConfig } from 'payload'
import { sendEmail } from './hooks/sendEmail'

export const ContactRequests: CollectionConfig = {
  slug: 'contact-requests',

  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email'],
  },
  fields: [
    {
      name: 'email',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
    afterChange: [sendEmail],
  },
}

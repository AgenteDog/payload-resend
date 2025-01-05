import { ContactRequest } from '@/payload-types'
import { CollectionAfterChangeHook } from 'payload'

export const sendEmail: CollectionAfterChangeHook<ContactRequest> = async ({
  doc,
  operation,
  req,
}) => {
  if (operation === 'create') {
    await req.payload.sendEmail({
      to: process.env.TO_EMAIL,
      reply_to: doc.email,
      subject: 'New Contact Request',
      text: `Hi! This email should have a reply_to to ${doc.email}`,
    })
  }

  return doc
}

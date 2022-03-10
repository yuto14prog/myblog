import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'mmsk-blog',
  apiKey: process.env.API_KEY || '',
})
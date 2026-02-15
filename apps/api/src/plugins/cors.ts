import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'

const webUrl = process.env.WEB_URL

export const corsPlugin = new Elysia().use(
  cors({
    origin: webUrl ?? 'http://localhost:3000',
    credentials: true
  })
)
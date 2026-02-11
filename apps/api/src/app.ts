import { Elysia, t } from 'elysia'
import { cors } from '@elysiajs/cors'
import { openapi } from '@elysiajs/openapi'

const app = new Elysia()
  .use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true
    })
  )
  .use(openapi()) 
  .get('/', () => 'Hello Elysia')
  .listen(3333)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
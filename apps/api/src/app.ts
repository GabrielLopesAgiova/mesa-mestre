import { Elysia } from 'elysia'
import { plugins } from './plugins'

export const app = new Elysia()
  .use(plugins)
  .get('/', () => 'Hello Elysia')
  .listen(3333)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export type App = typeof app
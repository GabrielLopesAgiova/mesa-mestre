import { Elysia } from 'elysia'
import { plugins } from './plugins'
import { user } from './modules/user'

export const app = new Elysia()
  .use(plugins)
  .use(user)
  .listen(3333)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export type App = typeof app
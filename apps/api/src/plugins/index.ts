import { Elysia } from 'elysia'
import { corsPlugin } from './cors'
import { openapiPlugin } from './openapi'

export const plugins = new Elysia()
  .use(corsPlugin)
  .use(openapiPlugin)
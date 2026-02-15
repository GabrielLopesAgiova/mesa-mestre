import { Elysia } from 'elysia'
import { openapi } from '@elysiajs/openapi'

export const openapiPlugin = new Elysia().use(openapi())
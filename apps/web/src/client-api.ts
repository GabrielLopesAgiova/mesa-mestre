// client.ts
import { treaty } from '@elysiajs/eden'
import type { App } from '@mesa-mestre/api'

export const api = treaty<App>('http://localhost:3333');
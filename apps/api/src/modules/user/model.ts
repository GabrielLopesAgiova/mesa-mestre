import { table, user } from '@database/schema'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import z from 'zod'

export namespace UserModel {
    // Create User
    export const createUserBody = createInsertSchema(user, {
        username: z.string(),
        email: z.email(),
        password: z.string().min(6)
    }).omit({ id: true, createdAt: true})
    export type CreateUserBody = z.infer<typeof createUserBody>

    export const createUserResponse = createSelectSchema(user)
        .omit({password: true})
    export type CreateUserResponse = z.infer<typeof createUserResponse>
}


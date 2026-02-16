import { z } from 'zod'

export namespace UserModel {
    export const createUserBody = z.object({
        username: z.string(),
        email: z.email(),
        password: z.string().min(6)
    })
    export type CreateUserBody = z.infer<typeof createUserBody>

    export const createUserResponse = z.object({
        id: z.string(),
        username: z.string(),
        email: z.string(),
        createdAt: z.date()
    })
    export type CreateUserResponse = z.infer<typeof createUserResponse>
}
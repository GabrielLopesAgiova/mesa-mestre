import { db } from "@database";
import { UserModel } from "./model";
import { table } from "@database/schema";

export abstract class User {
    static async createUser ({ 
        username, 
        email, 
        password } : UserModel.CreateUserBody)
    {
        const hashedPassword = await Bun.password.hash(password)
        const [createdUser] = await db
            .insert(table.user)
            .values({
                username,
                email,
                password: hashedPassword
            })
            .returning({
                id: table.user.id,
                username: table.user.username,
                email: table.user.email,
                createdAt: table.user.createdAt
            })

        return createdUser
    }
}
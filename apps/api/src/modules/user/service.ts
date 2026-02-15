import { db } from "@database/index";
import { UserModel } from "./model";
import { user } from "@database/schema";

export abstract class User {
    static async createUser ({ 
        username, 
        email, 
        password } : UserModel.CreateUserBody)
    {
        const hashedPassword = await Bun.password.hash(password)

        const [createdUser] = await db
            .insert(user)
            .values({
                username,
                email,
                password: hashedPassword
            })
            .returning({
                id: user.id,
                username: user.username,
                email: user.email,
                createdAt: user.createdAt
            })

        return createdUser
    }
}
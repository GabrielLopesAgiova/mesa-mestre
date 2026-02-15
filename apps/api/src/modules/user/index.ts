import Elysia from "elysia";
import { UserModel } from "./model";
import { User } from "./service";

export const user = new Elysia({ prefix: 'user'})
    .post(
        '',
        async({ body }) => {
            const response = await User.createUser(body)

            return response
        },
        {
            body: UserModel.createUserBody,
            response: UserModel.createUserResponse
        }
    )
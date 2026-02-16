import Elysia from "elysia";
import { UserModel } from "./model";
import { User } from "./service";

export const user = new Elysia({ prefix: 'user'})
    .post(
        '',
        async({ body }) => {
            return await User.createUser(body)
        },
        {
            body: UserModel.createUserBody,
            response: UserModel.createUserResponse
        }
    )
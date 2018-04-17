import * as bcrypt from "bcrypt";
import { InnoError } from "innots";
import { IUser, UsersModel } from "../models/users";

const usersModel = new UsersModel();

export class AuthService {
    public async authUser(email: string, password: string): Promise<boolean> {
        const user = await usersModel.getUserForAuth(email);
        return await bcrypt.compare(password, user.userPassword);
    }
}
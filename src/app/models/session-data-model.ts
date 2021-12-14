import { UserModel } from "./user-data-model";

export class SessionData{
    token?: string;
    usuario?: UserModel;
    isLoggedIn: boolean = false;
}
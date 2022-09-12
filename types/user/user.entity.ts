export interface NewUserEntity extends Omit<UserEntity, "id"> {
    id?: string;
}

export interface UserEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    token:string;
    isAdmin: boolean;
    createdAt: Date;
}


export interface LoginUser {
    email: string;
    password: string;
}

export interface LoginUserResponse {
    name: string,
    email: string,
    isAdmin: boolean,
    token: string;
}

export interface LogoutUserResponse {
    ok?: string;
    error?: string;
}
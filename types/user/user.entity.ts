export interface NewUserEntity extends Omit<UserEntity, "id"> {
    id?: string;
}

export interface UserResponse {
    id: string,
    name: string,
    email: string,
    isAdmin: string,
}

export interface LoginUserResponse extends UserResponse {
    token: string;
}

export interface UserEntity extends LoginUserResponse {
    id: string;
    password: string;
    createdAt: Date;
}

export interface LoginUser {
    email: string;
    password: string;
}


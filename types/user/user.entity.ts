export interface NewUserEntity extends Omit<UserEntity, "id"> {
    id?: string;
}

export interface UserResponse {
    name: string,
    email: string,
    isAdmin: boolean,
}
export interface LoginUserResponse extends UserResponse{
    token: string;
}

export interface UserEntity extends LoginUserResponse{
    id: string;
    password: string;
    createdAt: Date;
}

export interface LoginUser {
    email: string;
    password: string;
}

export interface LogoutUserResponse {
    ok?: string;
    error?: string;
}
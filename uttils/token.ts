import jwt from "jsonwebtoken";
import {config} from "../config/config";

export const generateToken = (id: string) => {
    return jwt.sign({id}, config.jwt_secret, {
        expiresIn: "14d",
    });
};
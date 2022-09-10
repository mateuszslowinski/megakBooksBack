import {ValidationError} from "./errors";

export const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


export const validateLength = (key: string, maxValue: number, descriptionOfError: string) => {
    if (!key || key.length > maxValue) {
        throw new ValidationError(descriptionOfError);
    }
}

export const validateNumber = (key: number, minValue: number, maxValue: number, descriptionOfError: string) => {
    if (!key || key < minValue || key > maxValue) {
        throw new ValidationError(descriptionOfError);
    }
}
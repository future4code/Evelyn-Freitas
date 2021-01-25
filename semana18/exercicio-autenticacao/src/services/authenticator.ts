import * as jwt from "jsonwebtoken";

export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {
            id: input.id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: "1min"
        }
    );
    return token;
}

export function getTokenData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY!);
    return payload as AuthenticationData;
}

export type AuthenticationData = {
    id: string;
}
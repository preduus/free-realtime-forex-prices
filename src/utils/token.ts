import { getCookie } from "./cookies";


export const hasToken = () => {
    const token = getCookie('token');
    return token;
}
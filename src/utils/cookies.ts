import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (k: string, v: string, path = "/") => {
    cookies.set(k, v, { path });
}

export const getCookie = (k: string) => {
    return cookies.get(k);
}
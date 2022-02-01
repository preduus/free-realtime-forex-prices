import Cookies from 'universal-cookie';

const cookies = new Cookies();

const defaultExpires = (h = 1) => {
    const date = new Date();
    date.setTime(date.getTime() + (h*60*60*1000));
    return date;
}

export const setCookie = (k: string, v: string, path = "/", expires = defaultExpires()) => {
    cookies.set(k, v, { path, expires });
}

export const getCookie = (k: string) => {
    return cookies.get(k);
}
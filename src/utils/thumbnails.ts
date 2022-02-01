
interface IBrokerAvatar {
    crop: {};
    id: string;
    status: string;
    thumbnails: [];
    url: string;
    validateStatus: string;
}

export const getThumbnail = (data: IBrokerAvatar, size = 64)  => {
    if (data && data.thumbnails) {
        const thumb: any =  data.thumbnails.find((el: any) => {
            return el.size.width === size;
        })

        if (thumb && thumb.url) {
            return thumb.url;
        }
    }
    return "";
}
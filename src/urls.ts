export const SERVER_BASE_URL = 'https://api.jihazapp.kz/api';

export const url = (urlPart: any) => {
    return `${SERVER_BASE_URL}${urlPart}`
}
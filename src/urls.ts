export const SERVER_BASE_URL = 'http://46.101.212.100:3030';

export const url = (urlPart: any) => {
    return `${SERVER_BASE_URL}${urlPart}`
}
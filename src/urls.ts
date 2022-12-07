export const SERVER_BASE_URL = 'http://localhost:5085';

export const url = (urlPart: any) => {
    return `${SERVER_BASE_URL}${urlPart}`
}
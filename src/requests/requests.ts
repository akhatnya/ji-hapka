import axios from 'axios';
import { url } from '../urls'

export const loadCategories = async (callBack: any) => {
    return axios.get(url('/categories-with-count')).then(callBack);
}

export const loadRooms = async (callBack: any) => {
    return axios.get(url('/rooms')).then(callBack);
}

export const loadBestsellers = async (callback: any) => {
    return axios.get(url('/bestsellers')).then(callback);
}

export const loadItemsByCategoryId = async (categoryId: any, callback: any) => {
    return axios.get(url(`/items/category/${categoryId}`)).then(callback)
}

export const loadItemsByRoomId = async (roomId: any, callback: any) => {
    return axios.get(url(`/items/room/${roomId}`)).then(callback)
}

export const loadMenu = async (callback: any) => {
    return axios.get(url(`/menu`)).then(callback)
}

export const loadItemDetails = async (itemId: any, callback: any) => {
    return axios.get(url(`/item/${itemId}`)).then(callback);
}
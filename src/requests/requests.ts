import axios from "axios";
import { url } from "../urls";

export const loadCategories = async (callBack: any) => {
  return axios
    .get(url("/categories-with-count"))
    .then(callBack)
    .catch((err) => console.error(err));
};

export const loadWith3d = async (callBack: any) => {
  return axios.get(url("/items/with3d")).then(callBack);
};

export const loadShopById = async (id: any, callBack: any) => {
  return axios.get(url(`/api/v1/shop/info/${id}`)).then(callBack);
};

export const loadRooms = async (callBack: any) => {
  return axios.get(url("/v1/rooms")).then(callBack);
};

export const loadBestsellers = async (callback: any) => {
  return axios.get(url("/bestsellers")).then(callback);
};

export const loadItemsByCategoryId = async (categoryId: any, callback: any) => {
  return axios.get(url(`/items/category/${categoryId}`)).then(callback);
};

export const loadItemsByRoomId = async (roomId: any, callback: any) => {
  return axios.get(url(`/items/room/${roomId}`)).then(callback);
};

export const loadMenu = async (callback: any) => {
  return axios.get(url(`/menu`)).then(callback);
};

export const loadItemDetails = async (itemId: any, callback: any) => {
  return await axios
    .get(url(`/item/${itemId}`))
    .then(callback)
    .catch((err) => {
      err.statusCode = 500;
    });
};

export const download = async (objectUrl: any, onDownloadProgress: any) => {
  await axios({
    url: objectUrl,
    method: "GET",
    responseType: "blob", // important
    onDownloadProgress: onDownloadProgress,
  }).catch((err) => {
    console.error(err);
  });
};

export const sendOrder = async (form: any, callback: any) => {
  return axios
    .post(url(`/v1/order/create`), form)
    .then(callback)
    .catch((err: any) => {});
};

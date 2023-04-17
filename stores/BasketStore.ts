import { action, makeObservable, observable, toJS } from "mobx";
import Cookies from "universal-cookie";
import { RootStore } from "./RootStore";

interface Basket {
  id: number;
  item: {
    nameRu: string;
    price: number;
    id: number;
  };
  itemPhotos: [
    {
      photo: {
        url: string;
      };
    }
  ];
  quantity: number;
}

interface Favorite {
  id: number;
  item: {
    nameRu: string;
    price: number;
    id: number;
  };
  itemPhotos: [
    {
      photo: {
        url: string;
      };
    }
  ];
}

const cookie = new Cookies();

export class BasketStore {
  root: RootStore;
  basket: Array<any> = [];
  initialData: string = "Hello";
  isBasketOpen: boolean = false;
  quantity: number = 0;
  oldBasket: any = [];
  price: number = 0;
  favorites: Array<any> = [];
  modalClose: boolean = false;
  isFavOpen: boolean = false;
  isSubmit: boolean = false;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      initialData: observable,
      isSubmit: observable,
      basket: observable,
      isFavOpen: observable,
      addJihaz: action,
      isBasketOpen: observable,
      favorites: observable,
      setBasket: action,
      deleteJihaz: action,
      quantity: observable,
      saveBasketInCookie: action,
      getBasketSize: action,
      getPrice: action,
      deleteAllJihazType: action,
      saveFavInCookie: action,
      addFavorite: action,
      deleteFavorite: action,
      setSubmit: action,
    });
  }

  setSubmit() {
    this.isSubmit = !this.isSubmit;
  }

  addFavorite(item: any) {
    let jihazFound = this.favorites.find((i: any) => i.id === item.id);
    if (jihazFound === undefined) {
      this.favorites.push({
        ...item,
      });
      this.saveFavInCookie();
    } else this.deleteFavorite(item.id);
  }

  deleteFavorite(itemId: any) {
    let jihazFound = this.favorites.findIndex((i: any) => i.id === itemId);
    if (jihazFound === undefined) {
      throw new Error("No jihaz found");
    } else {
      this.favorites.splice(jihazFound, 1);
      this.saveFavInCookie();
    }
  }

  setFav() {
    this.isFavOpen = !this.isFavOpen;
  }

  async loadCookies() {
    if (cookie.get("basket")) {
      this.basket = cookie.get("basket");
    }
    if (cookie.get("fav")) {
      this.favorites = cookie.get("fav");
    }
    if (cookie.get("modalClose")) {
      this.modalClose = cookie.get("modalClose");
    }
  }

  setCloseMobileModal() {
    cookie.set("modalClose", true, {
      expires: new Date("2030-12-17"),
      path: "/",
    });
    this.loadCookies();
  }

  saveFavInCookie() {
    cookie.set("fav", this.favorites, {
      expires: new Date("2030-12-17"),
      path: "/",
    });
  }

  saveBasketInCookie() {
    cookie.set("basket", this.basket, {
      expires: new Date("2030-12-17T03:24:00"),
      path: "/",
    });
  }

  clearBasket() {
    cookie.set("basket", []);
  }

  addFirstJihaz(jihaz: any) {
    this.basket.push({
      ...jihaz,
      quantity: 1,
    });
    this.saveBasketInCookie();
  }

  deleteAllJihazType(jihazId: number) {
    let jihazFound = this.basket.findIndex((item: any) => item.id === jihazId);
    if (jihazFound === undefined) {
      throw new Error("No Jihaz to be Deleted");
    } else {
      this.basket.splice(jihazFound, 1);
      this.saveBasketInCookie();
    }
  }

  deleteJihaz(jihaz: any) {
    if (this.getBasketSize() != 0) {
      this.saveBasketInCookie();
    }
    let jihazId = this.basket.findIndex((item: any) => item.id === jihaz.id);
    if (jihazId === undefined) {
      throw new Error("No Jihaz to be Deleted");
    } else {
      for (let i = 0; i < this.basket.length; i++) {
        if (this.basket[i].id === jihaz.id) {
          this.basket[i].quantity = this.basket[i].quantity - 1;
          this.saveBasketInCookie();
          if (this.basket[i].quantity === 0) {
            this.basket.splice(jihazId, 1);
            this.saveBasketInCookie();
          }
        }
      }
    }
  }

  addJihaz(jihaz: any) {
    this.saveBasketInCookie();
    let jihazFound = this.basket.find((item: any) => item.id === jihaz.id);
    if (jihazFound === undefined) {
      this.addFirstJihaz(jihaz);
    } else {
      for (let i = 0; i < this.basket.length; i++) {
        if (this.basket[i].id === jihaz.id) {
          this.basket[i].quantity = this.basket[i].quantity + 1;
          this.saveBasketInCookie();
          break;
        }
      }
    }
  }

  setBasket(con: boolean = this.isBasketOpen) {
    this.isBasketOpen = !this.isBasketOpen;
  }

  getBasketSize() {
    let size = 0;
    for (let i = 0; i < this.basket.length; i++) {
      size = this.basket[i].quantity + size;
    }
    return size;
  }

  getPrice() {
    let sum = 0;
    for (let i = 0; i < this.basket.length; i++) {
      sum = this.basket[i].quantity * this.basket[i].price + sum;
    }
    return sum;
  }
}

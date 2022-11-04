import { url } from '../src/urls';
import {
    action,
    makeObservable,
    observable,
    toJS
  } from "mobx";
import Cookies from 'universal-cookie';
  import { RootStore } from "./RootStore";
  
  interface Basket {
    id: number;
    item: {
      nameRu: string;
      price: number;
      id: number;
    };
    itemPhotos: [{
      photo: {
        url: string
      }
      }];
    quantity: number;
  }

  const cookie = new Cookies();
  
  export class BasketStore {
    root: RootStore;
    basket: Array<Basket> = [];
    initialData: string = 'Hello';
    isBasketOpen: boolean = false;
    quantity: number = 0;
    oldBasket: any = [];

    constructor(root: RootStore) {
      this.root = root;
      makeObservable(this, {
        initialData: observable,
        basket: observable,
        addJihaz: action,
        isBasketOpen: observable,
        setBasket: action,
        deleteJihaz: action,
        quantity: observable,
        saveBasketInCookie: action
      });
    }

   async loadCookies () {
      if(cookie.get('basket')) {
        this.basket = cookie.get('basket')
      };
      if(cookie.get('quantity')){
        this.quantity = Number(cookie.get('quantity'))
      } ;
    }

    saveBasketInCookie() {
      cookie.set('basket', this.basket, {expires: new Date('2030-12-17T03:24:00'), path: '/'})
      cookie.set('quantity', this.quantity, {expires: new Date('2030-12-17T03:24:00'), path: '/'})
    }

    addFirstJihaz (jihaz: any){
      this.basket.push({
        id: jihaz.item.id, 
        item: {
          id: jihaz.item.id,
          nameRu: jihaz.item.nameRu, 
          price: jihaz.item.price
        },
        itemPhotos: [
          {photo:
             {url: jihaz.itemPhotos[0].photo.url}
          }
        ],
        quantity: 1
      });
      this.saveBasketInCookie()
    }

    deleteJihaz (jihaz: any) {
      if(this.quantity != 0){
        this.quantity = this.quantity - 1
        this.saveBasketInCookie()
      }
      let jihazId = this.basket.findIndex((item: any) => item.id === jihaz.id);
      if(jihazId === undefined){
        throw new Error('No Jihaz to be Deleted')
      } else {
        for(let i = 0; i < this.basket.length; i++) {
          if(this.basket[i].id === jihaz.id) {
            this.basket[i].quantity = this.basket[i].quantity - 1;
            this.saveBasketInCookie()
            if(this.basket[i].quantity === 0){
              this.basket.splice(jihazId, 1)
              this.saveBasketInCookie()
            }
          }
        }
      }
    }

    addJihaz (jihaz: any) {
      this.quantity = this.quantity + 1
      this.saveBasketInCookie()
      let jihazFound = this.basket.find((item: any) => item.id === jihaz.item.id);
      if(jihazFound === undefined){
        this.addFirstJihaz(jihaz);
      } else {
        for(let i = 0; i < this.basket.length; i++){
            if(this.basket[i].id === jihaz.item.id) {
              this.basket[i].quantity = this.basket[i].quantity + 1;
              this.saveBasketInCookie();
              break;
            }
        }
      }
    }

    setBasket () {
      this.isBasketOpen = !this.isBasketOpen;
    }


    // getBasketSize () {                 !!!! need to check this out, cuz it way more better that i'm using
    //  if(this.basket.length === 0){
    //   return 0;
    //  } else {
    //   for(const value of this.basket){
    //     this.quantity+= value.quantity
    //   }
    //  }
    // }
}
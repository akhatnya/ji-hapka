import { BasketStore } from "./BasketStore";

export class RootStore {
  basketStore: BasketStore;

  constructor() {
    this.basketStore = new BasketStore(this);
  }

}
import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    remove(id: number): Buyable[] {
        this._items = this._items.filter((el) => el.id !== id)
        return [...this._items]
    }

    returnPrice(): number { 
        return this._items.reduce((acc, el) => acc + el.price, 0)
    }

    retPriceDiscount(discount: number): number {
        return this._items.reduce((acc, el) => acc + el.price, 0) * (1 - discount / 100) 
    }
}
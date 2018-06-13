import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  item : Item[] =
  [
    {
      id : 1,
      productName : 'pen',
      quantity : 5,
      price : 4.99,
      dateImported : new Date('6/01/2018'),
      inStock: true
    },
    {
      id : 2,
      productName : 'pencil',
      quantity : 9,
      price : 2.99,
      dateImported : new Date('5/10/2018'),
      inStock: true
    },
    {
      id : 3,
      productName : 'notebook',
      quantity : 3,
      price : 9.99,
      dateImported : new Date('4/15/2018'),
      inStock: true
    },
    {
      id : 4,
      productName : 'cutter',
      quantity : 7,
      price : 5.99,
      dateImported : new Date('5/23/2018'),
      inStock: true
    },
    {
      id : 5,
      productName : 'ink stamp',
      quantity : 0,
      price : 11.99,
      dateImported : new Date('5/23/2018'),
      inStock: false
    },
    {
      id : 6,
      productName : 'folder',
      quantity : 10,
      price : 2.99,
      dateImported : new Date('4/05/2018'),
      inStock: true
    },
    {
      id : 7,
      productName : 'pen case',
      quantity : 4,
      price : 8.99,
      dateImported : new Date('4/28/2018'),
      inStock: true
    }
  ];

  getItems() : Observable<Item[]> {
    return of (this.item);
  }

  constructor() { }
}

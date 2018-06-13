import { Injectable } from '@angular/core';
import { Customer} from './customer';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = [
    {id : 1, firstName : 'John', lastName : 'Doe', postalCode : 'T7N 1A6', phone : '0123456789', dob : new Date('02/05/1960'), items : ['pen', 'notebook']},
    {id : 2, firstName : 'Richard', lastName : 'Barlow', postalCode : 'S9X 2E8', phone : '1123456789', dob : new Date('01/07/1965'), items : ['pencil']},
    {id : 3, firstName : 'James', lastName : 'Green', postalCode : 'K2K 0C7', phone : '2123456789', dob : new Date('08/05/1970'), items : ['pen', 'ink stamp']},
    {id : 4, firstName : 'Alan', lastName : 'Rivera', postalCode : 'K2S 2H5', phone : '3123456789', dob : new Date('01/01/1972'), items : ['pen', 'notebook']}
  ]

  getCustomer(customer?: Customer): Observable<Customer[]> {
    if (customer) {
      let customerResults: Customer[] = [];

      for (let c of this.customers) {
        if (c.firstName.toLowerCase() === customer.firstName.toLowerCase()) {
          customerResults.push(c);
        }
        return of (customerResults);
      }
    }
    return of (this.customers);
  }
  constructor() { }
}

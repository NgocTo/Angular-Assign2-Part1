import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  customerSearch: Customer = new Customer();

  findCustomer(customerQuery: Customer): void {
    this.customerService.getCustomer(customerQuery).subscribe(results => this.customers = results);
  }
  constructor(private customerService: CustomerService ) { }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(results => this.customers = results);
  }

}

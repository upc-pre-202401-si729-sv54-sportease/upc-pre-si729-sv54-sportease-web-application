import { Component, OnInit } from '@angular/core';
import {PaymentService} from "../services/payment.service";

@Component({
  selector: 'app-payment-management-component',
  templateUrl: './payment-management.component.html',
  styleUrls: ['./payment-management.component.css']
})
export class PaymentManagementComponent implements OnInit {
  transactions!: any[];

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }
}

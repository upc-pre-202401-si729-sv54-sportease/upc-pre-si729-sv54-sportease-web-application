import { Component, OnInit } from '@angular/core';
import {PaymentService} from "../services/payment.service";

@Component({
  selector: 'app-payment-management-students',
  templateUrl: './payment-management-students.component.html',
  styleUrls: ['./payment-management-students.component.css']
})
export class PaymentManagementStudentsComponent implements OnInit {
  transactions: any[] = [];
  filteredTransactions: any[] = [];
  selectedStudentId: string = '1';

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getTransactions().subscribe(data => {
      this.transactions = data;
      this.filterTransactions();
    });
  }

  filterTransactions(): void {
    this.filteredTransactions = this.transactions.filter(transaction => transaction['id-student'] === this.selectedStudentId);
  }
}

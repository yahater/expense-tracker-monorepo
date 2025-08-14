import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  standalone: true,
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  imports: [CommonModule],
  providers: [DatePipe]
})
export class ExpensesComponent implements OnInit {
  expenses: any[] = [];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expensesService.getExpenses().subscribe(data => {
      this.expenses = data;
    });
  }
}

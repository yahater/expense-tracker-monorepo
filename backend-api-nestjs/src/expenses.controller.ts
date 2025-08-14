import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  async getAll() {
    return this.expensesService.findAll();
  }

  @Post()
  async createExpense(
    @Body('user_id') user_id: number,
    @Body('category_id') category_id: number,
    @Body('amount') amount: number,
    @Body('description') description?: string
  ) {
    return this.expensesService.create(user_id, category_id, amount, description);
  }
}

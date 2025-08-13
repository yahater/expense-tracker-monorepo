import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Injectable()
export class ExpensesService {
  constructor(private readonly supabase: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabase.client
      .from('expenses')
      .select('*');

    if (error) throw new Error(error.message);
    return data;
  }

  async create(user_id: number, category_id: number, amount: number, description?: string) {
    const { data, error } = await this.supabase.client
      .from('expenses')
      .insert([{ user_id, category_id, amount, description }]);

    if (error) throw new Error(error.message);
    return data;
  }
}

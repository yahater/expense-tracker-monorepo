import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly supabase: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabase.client
      .from('categories')
      .select('*');

    if (error) throw new Error(error.message);
    return data;
  }

  async create(name: string) {
    const { data, error } = await this.supabase.client
      .from('categories')
      .insert([{ name }]);

    if (error) throw new Error(error.message);
    return data;
  }
}

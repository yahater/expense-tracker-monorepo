// src/users.service.ts
import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Injectable()
export class UsersService {
  constructor(private readonly supabase: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabase.client
      .from('users')
      .select('*');

    if (error) {
      throw new Error(`Supabase query error: ${error.message}`);
    }

    return data;
  }
}

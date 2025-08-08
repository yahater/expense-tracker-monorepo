import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'db.rcdbdpqnbtilpczjikox.supabase.co',
  port: 5432,
  username: 'postgres',
  password: 'Whitecloud13.',
  database: 'postgres',
  autoLoadEntities: true,
  synchronize: true,
}),


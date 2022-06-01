import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [DatabaseModule, StudentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

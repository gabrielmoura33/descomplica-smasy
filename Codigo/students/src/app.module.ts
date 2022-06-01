import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { HttpModule } from './modules/http/http.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [DatabaseModule, StudentsModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

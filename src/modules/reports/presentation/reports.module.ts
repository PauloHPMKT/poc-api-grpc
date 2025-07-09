import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from '../data/services/reports.service';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}

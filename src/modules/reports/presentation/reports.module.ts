import { Module, Provider } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { makeReportsRepositoryProvider } from '../data/providers/reports-provider';
import { makeReportsDomainProviders } from '../domain/providers/reports-provider';
import { PrismaService } from 'src/modules/database/services/prisma.service';

const providers: Provider[] = [
  ...makeReportsRepositoryProvider(),
  ...makeReportsDomainProviders(),
  PrismaService,
];

@Module({
  controllers: [ReportsController],
  providers,
})
export class ReportsModule {}

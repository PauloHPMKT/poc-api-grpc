import { Module, Provider } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { makeReportsRepositoryProvider } from '../data/providers/reports-provider';
import { makeReportsDomainProviders } from '../domain/providers/reports-provider';

const providers: Provider[] = [
  ...makeReportsRepositoryProvider(),
  ...makeReportsDomainProviders()
];

@Module({
  controllers: [ReportsController],
  providers,
})
export class ReportsModule {}

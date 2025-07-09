import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GetReports } from '../domain/protocols/get-reports';

@Controller()
export class ReportsController {
  constructor(
    @Inject('GetReports')
    private readonly reportsService: GetReports
  ) {}

  @GrpcMethod('ReportsService', 'ListReports')
  async listReports(reports: any, metadata: any) {
    return await this.reportsService.execute();
  }
}

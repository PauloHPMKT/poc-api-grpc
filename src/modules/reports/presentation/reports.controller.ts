import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ReportsService } from '../data/services/reports.service';

@Controller()
export class ReportsController {
    constructor(private readonly reportsService: ReportsService) {}

    @GrpcMethod('ReportsService', 'ListReports')
    listReports(reports: any, metadata: any) {
        return this.reportsService.getReports();
    }
}

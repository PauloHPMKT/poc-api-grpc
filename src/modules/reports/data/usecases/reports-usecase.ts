import { Inject, Injectable } from '@nestjs/common';
import { ReportsRepository } from '../protocols/reports-repository';
import { GetReports } from '../../domain/protocols/get-reports';

@Injectable()
export class GetReportsUseCase implements GetReports {
  constructor(
    @Inject('ReportsRepository')
    private readonly reportsRepository: ReportsRepository
  ) {}

  async execute() {
    return await this.reportsRepository.getReports();
  }
}

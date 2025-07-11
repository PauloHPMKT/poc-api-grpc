import { PrismaService } from 'src/modules/database/services/prisma.service';
import { ReportsRepository } from '../data/protocols/reports-repository';
import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';

@Injectable()
export class ReportsMongoRepository implements ReportsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getReports(): Promise<any> {
    const reports = await this.prismaService.report.findMany();
    console.log('Reports found:', reports);
    return { reports };
  }
}

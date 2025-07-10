import { PrismaService } from 'src/modules/database/services/prisma.service';
import { ReportsRepository } from '../data/protocols/reports-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsMongoRepository implements ReportsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getReports(): Promise<any> {
    await this.prismaService.report.create({
      data: {
        title: 'Relatório de Teste',
        content: 'Este é um relatório de teste.',
      },
    });
    return {
      reports: [
        {
          id: '1',
          title: 'Relatório 1',
          content: 'Conteúdo do relatório 1',
          author: 'João Matias',
        },
        {
          id: '2',
          title: 'Relatório 2',
          content: 'Conteúdo do relatório 2',
          author: 'Maria',
        },
      ],
    };
  }
}

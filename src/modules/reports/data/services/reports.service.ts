import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  getReports() {
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

import { ReportsRepository } from "../data/protocols/reports-repository";
export class ReportsMongoRepository implements ReportsRepository {
  async getReports(): Promise<any> {
    console.log("Fetching reports from MongoDB...");
    // Simulating a database call
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
    }
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from './reports.controller';
import { makeReportsDomainProviders } from '../domain/providers/reports-provider';
import { ReportsRepository } from '../data/protocols/reports-repository';

describe('ReportsController', () => {
  let reportsController: ReportsController;

  beforeEach(async () => {
    const mockReportsRepository: ReportsRepository = {
      getReports: jest.fn().mockResolvedValue({ reports: [] }),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [
        ...makeReportsDomainProviders(),
        {
          provide: 'ReportsRepository',
          useValue: mockReportsRepository,
        },
      ],
    }).compile();

    reportsController = app.get<ReportsController>(ReportsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await reportsController.listReports({}, {})).toEqual({
        reports: [],
      });
    });
  });
});

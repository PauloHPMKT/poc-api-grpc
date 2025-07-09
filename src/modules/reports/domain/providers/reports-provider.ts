import { Provider } from "@nestjs/common";
import { GetReportsUseCase } from "../../data/usecases/reports-usecase";

export const makeReportsDomainProviders = (): Provider[] => [
  {
    provide: "GetReports",
    useClass: GetReportsUseCase
  }
]

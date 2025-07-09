import { Provider } from "@nestjs/common";
import { ReportsMongoRepository } from "../../infra/reports-mongo-repository";

export const makeReportsRepositoryProvider = (): Provider[] => [
  {
    provide: "ReportsRepository",
    useClass: ReportsMongoRepository
  }
]

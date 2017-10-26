import { StudentImportBatchResult } from "../models/studentImport";

export interface StudentImportCsvValidationService {
    Validate(csv: string, id: string): StudentImportBatchResult
}


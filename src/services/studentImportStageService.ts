import { StudentImportBatchValidationResult } from "../models/studentImport";

export interface StudentImportStageService {
    stage(id: string): Promise<StudentImportBatchValidationResult>
}
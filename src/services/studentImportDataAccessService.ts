import { StudentImportBatchValidationResult } from "../models/studentImport";

export interface StudentImportDataAccessService {
    SaveStudentImportBatch(csv: string): Promise<string>
    GetStudentImportBatchResults(id:string): Promise<StudentImportBatchValidationResult>
}
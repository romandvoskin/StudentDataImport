import { StudentImportBatchValidationResult } from "../models/studentImport";

export interface StudentImportDataAccessService {
    SaveStudentImport(csv: string): Promise<string>
    GetParseResults(id:string): Promise<StudentImportBatchValidationResult>
}
import { StudentImportBatchValidationResult } from "../models/studentImport";

export interface StudentImportParseService {
    parse(id: string): Promise<StudentImportBatchValidationResult>
}
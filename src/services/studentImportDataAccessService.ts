import { StudentImportBatchValidationResult } from "../models/studentImport";

/**
 * Data accessor for student import workflow
 */
export interface StudentImportDataAccessService {
    /**
     * Save student import raw data
     * 
     * @param {string} csv Raw csv
     * @returns {Promise<string>} Batch Id
     * @memberof StudentImportDataAccessService
     */
    SaveStudentImportBatch(csv: string): Promise<string>
    
    /**
     * * Get student import asynchronous results
     * 
     * @param {string} id Batch Id
     * @returns {Promise<StudentImportBatchValidationResult>} Result of asynchronous validation
     * @memberof StudentImportDataAccessService
     */
    GetStudentImportBatchResults(id:string): Promise<StudentImportBatchValidationResult>
}
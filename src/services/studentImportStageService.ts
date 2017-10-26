import { StudentImportBatchValidationResult } from "../models/studentImport";

/**
 * Create stagedStudent records
 * 
 * @export
 * @interface StudentImportStageService
 */
export interface StudentImportStageService {
    
    /**
     * Create stagedStudent records from student data import batch
     * 
     * @param {string} id Batch Id
     * @returns {Promise<StudentImportBatchValidationResult>} Result of asynchronous validation
     * @memberof StudentImportStageService
     */
    stage(id: string): Promise<StudentImportBatchValidationResult>
}
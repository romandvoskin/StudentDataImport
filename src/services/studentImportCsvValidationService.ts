import { StudentImportBatchResult } from "../models/studentImport";

/**
 * Validate student import raw data synchronously
 */
export interface StudentImportCsvValidationService {
    
    /**
     * Validate student import raw csv
     * 
     * @param {string} csv Student import raw data csv
     * @param {string} id Batch id 
     * @returns {StudentImportBatchResult} Validation result
     * @memberof StudentImportCsvValidationService
     */
    Validate(csv: string, id: string): StudentImportBatchResult
}



/**
 * Merge StagedStudent and Student records
 * 
 * @export
 * @interface StudentImportMergeService
 */
export interface StudentImportMergeService {
    /**
     * Merge StagedStudent and Student records
     * 
     * @param {string} id Batch Id
     * @returns {Promise<void>} Completion promise
     * @memberof StudentImportMergeService
     */
    merge(id: string) : Promise<void>
}
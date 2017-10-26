/**
 * Student import synchronous result
 */
export interface StudentImportBatchResult {
    id: string,
    hasErrors: boolean,
    errors: StudentImportBatchResultError[]
}

/**
 * Student import synchronous result error
 */
export interface StudentImportBatchResultError {
    id: string,
    code: StudentImportBatchResultErrorType
    description: string
}

/**
 * Student import synchronous result error types
 */
export type StudentImportBatchResultErrorType = "missingHeader" | "rowsHeaderMismatch"

/**
 * Student import asynchronous result
 */
export interface StudentImportBatchValidationResult {
    id: string,
    hasErrors: boolean
    errors: StudentImportBatchValidationResultError[]
    isComplete: boolean
}

/**
 * Student import asynchronous result error
 */
export interface StudentImportBatchValidationResultError {
    id: string,
    description: string
    lineNumber: number
    studentId: string,
}


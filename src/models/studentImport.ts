export interface StudentImportBatchResult {
    id: string,
    hasErrors: boolean,
    errors: StudentImportBatchResultError[]
}


export interface StudentImportBatchResultError {
    id: string,
    code: string
    description: string
}

export interface StudentImportBatchValidationResult {
    id: string,
    hasErrors: boolean
    errors: StudentImportBatchValidationResultError[]
}

export interface StudentImportBatchValidationResultError {
    id: string,
    studentId: string,
    description: string
    lineNumber: number
}
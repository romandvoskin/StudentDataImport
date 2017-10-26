import { StudentImportBatchResult, StudentImportBatchValidationResult } from '../models/studentImport';
import * as express from 'express';
import { Get, Route, Request, Post } from 'tsoa';
import { provideSingleton, inject } from '../inversify/ioc';
import { StudentImportCsvValidationService } from '../services/studentImportCsvValidationService';
import { StudentImportDataAccessService } from '../services/studentImportDataAccessService';
import { StudentImportStageService } from '../services/studentImportStageService';
import { StudentImportMergeService } from '../services/studentImportMergeService';

@Route('import/students')
export class StudentImportController {
    constructor(
        @inject("StudentImportCsvValidationService") private csvValidationService: StudentImportCsvValidationService,
        @inject("StudentsImportDataAccessService") private dataAccessService: StudentImportDataAccessService,
        @inject("StudentImportStageService") private studentDataStageService: StudentImportStageService,
        @inject("StudentImportMergeService") private studentImportMergeService: StudentImportMergeService,
    ) { }

    @Post()
    public async studentImport( @Request() request: express.Request, response: express.Response): Promise<StudentImportBatchResult> {
        // Create Batch Id
        var batchId = this.createBatchId();
        // Validate csv
        var result = this.csvValidationService.Validate(request.body, batchId);
        if (!result.hasErrors) {
            // Save csv
            await this.dataAccessService.SaveStudentImportBatch(request.body);
            // Trigger stage process
            await this.studentDataStageService.stage(batchId);
            // Merge with student data
            await this.studentImportMergeService.merge(batchId);

        }
        return result;

    }

    @Get('{id}')
    public async getImportValidationResult(id: string): Promise<StudentImportBatchValidationResult> {
        return this.dataAccessService.GetStudentImportBatchResults(id);
    }

    private createBatchId(): string {
        return "";
    }
}

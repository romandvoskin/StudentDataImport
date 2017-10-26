import { StudentImportBatchResult, StudentImportBatchValidationResult } from '../models/studentImport';
import * as express from 'express';
import { Get, Route, Request, Post } from 'tsoa';
import { provideSingleton, inject } from '../inversify/ioc';
import { StudentImportCsvValidationService } from '../services/studentImportCsvValidationService';
import { StudentImportDataAccessService } from '../services/studentImportDataAccessService';
import { StudentImportParseService } from '../services/studentImportParseService';

@Route('import/students')
export class StudentImportController {
    constructor(
        @inject("StudentImportCsvValidationService") private csvValidationService: StudentImportCsvValidationService,
        @inject("StudentsImportDataAccessService") private dataAccessService: StudentImportDataAccessService,
        @inject("StudentsImportParseService") private parseService: StudentImportParseService,
    ) { }

    @Post()
    public async studentImport( @Request() request: express.Request, response: express.Response): Promise<StudentImportBatchResult> {
        var batchId = this.createBatchId();
        var result = this.csvValidationService.Validate(request.body, batchId);
        if (!result.hasErrors) {
            await this.dataAccessService.SaveStudentImport(request.body);
            await this.parseService.parse(batchId);
        }
        return result;

    }

    @Get('{id}')
    public async getImportValidationResult(id: string): Promise<StudentImportBatchValidationResult> {
        return this.dataAccessService.GetParseResults(id);
    }

    private createBatchId(): string{
        return "";
    }
}

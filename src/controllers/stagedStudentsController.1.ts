import {Route, Get, Post, Delete, Patch, Example, Body} from 'tsoa';
import { StagedStudent } from '../models/student';
import { StagedStudentDataAccessor } from '../services/stagedStudentDataAccessor';
import { inject } from 'inversify';

@Route('stagedStudents')
export class StagedStudentsController {

    constructor(
        @inject("StagedStudentDataAccessor") private stagedstudentDataAccessor: StagedStudentDataAccessor,
    ) { }
    
    @Get('{id}')
    public async get(id: string): Promise<StagedStudent []> {
        return this.stagedstudentDataAccessor.getAll(id);
    }
    
    @Delete('{id}')
    public async delete(id: string): Promise<StagedStudent []> {
        return this.stagedstudentDataAccessor.deleteAll(id);
    }
}

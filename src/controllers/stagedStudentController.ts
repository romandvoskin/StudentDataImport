import {Route, Get, Post, Delete, Patch, Example, Body} from 'tsoa';
import { StagedStudent } from '../models/student';
import { StagedStudentDataAccessor } from '../services/stagedStudentDataAccessor';
import { inject } from 'inversify';

@Route('stagedStudent')
export class StagedStudentController {

    constructor(
        @inject("StagedStudentDataAccessor") private stagedstudentDataAccessor: StagedStudentDataAccessor,
    ) { }
    
    @Get('{id}')
    public async get(id: string): Promise<StagedStudent> {
        return this.stagedstudentDataAccessor.get(id);
    }
    
    @Post()
    public async upsert(@Body() student: StagedStudent): Promise<StagedStudent> {
        return this.stagedstudentDataAccessor.upsert(student);
    }

    @Delete('{id}')
    public async delete(id: string): Promise<StagedStudent> {
        return this.stagedstudentDataAccessor.delete(id);
    }
}

import {Route, Get, Post, Delete, Patch, Example, Body} from 'tsoa';
import { Student, StagedStudent } from '../models/student';
import { StudentDataAccessor } from '../services/studentDataAccessor';
import { inject } from 'inversify';

@Route('student')
export class StudentController {

    constructor(
        @inject("StudentDataAccessor") private studentDataAccessor: StudentDataAccessor,
    ) { }
    
    @Get('{id}')
    public async get(id: string): Promise<Student> {
        return this.studentDataAccessor.get(id);
    }

    @Post()
    public async upsert(@Body() student: Student): Promise<Student> {
        return this.studentDataAccessor.upsert(student);
    }

    @Delete('{id}')
    public async delete(id: string): Promise<Student> {
        return this.studentDataAccessor.delete(id);
    }
}

import {Route, Get, Post, Delete, Patch, Example, Body} from 'tsoa';
import { Student, StagedStudent } from '../models/student';

@Route('student')
export class UsersController {
    /** Get user by ID */
    @Get('{id}')
    public async Get(id: string): Promise<Student> {
        return null;
    }

    @Post()
    public async Upsert(@Body() request: StagedStudent): Promise<Student> {
        return null;
    }

    @Delete('{id}')
    public async Delete(id: string): Promise<void> {
        return Promise.resolve();
    }
}

import { StagedStudent } from "../models/student";


export interface StagedStudentDataAccessor {
    upsert(student: StagedStudent): Promise<StagedStudent>
    delete(id: string): Promise<StagedStudent>
    get(id: string): Promise<StagedStudent>
    getAll(batchId: string): Promise<StagedStudent[]>
    deleteAll(batchId: string): Promise<StagedStudent[]>
}
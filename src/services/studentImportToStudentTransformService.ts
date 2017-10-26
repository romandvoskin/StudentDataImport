import { StagedStudent, Student } from "../models/student";

export interface StudentImportToStudentTransform {
    Transform(stagedStudent: StagedStudent): Student
}
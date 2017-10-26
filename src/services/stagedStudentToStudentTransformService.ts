import { StagedStudent, Student } from "../models/student";


/**
 * Transform stagedStudent to Student service
 * 
 * @export
 * @interface StudentImportToStudentTransform
 */
export interface StudentImportToStudentTransform {
    
    /**
     * Transform StagedStudent to Student
     * 
     * @param {StagedStudent} stagedStudent Staged Student
     * @returns {Student} Student
     * @memberof StudentImportToStudentTransform
     */
    transform(stagedStudent: StagedStudent): Promise<Student>
}
import { Student } from "../models/student";

/**
 * Student data accessor
 * 
 * @export
 * @interface StudentDataAccessor
 */
export interface StudentDataAccessor {

    /**
     * Upsert student
     * 
     * @param {Student} Student 
     * @returns {Promise<Student>} Student
     * @memberof StudentDataAccessor
     */
    upsert(student: Student): Promise<Student>
    delete(id: string): Promise<Student>
    get(id: string): Promise<Student>
}
/**
 * Student
 */
export interface Student {
    id: string
    firstName: string,
    gender: StudentGender, 
    school: string,
    enrolledAt: Date
}

/**
 * Student gender
 */
export type StudentGender = 1 | 2;

/**
 * Staged student
 */
export interface StagedStudent {
    id: string
    firstName: string
    gender: StagedStudentGender
    school: string
    enrolledAt: Date
}

/**
 * Staged student gender
 */
export type StagedStudentGender = "M" | "F"
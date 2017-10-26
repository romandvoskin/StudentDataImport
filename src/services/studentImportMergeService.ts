export interface StudentImportMergeService {
    merge(id: string) : Promise<void>
}
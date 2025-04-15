export interface SubjectCreateData {
  title: string;
}

export interface Subject extends SubjectCreateData {
  subjectId: number;
}

export interface NoteTag {
  id: string;
  name: string;
  slug: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
}
export interface FetchNotesResponse{
  notes: Note[];
  totalPages: number;
  totalNotes: number;
}
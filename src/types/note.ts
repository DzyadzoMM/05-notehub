export interface NoteTag {
  _id: string;
  name: string;
  slug: string;
}

export interface Note {
  _id: string;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
}
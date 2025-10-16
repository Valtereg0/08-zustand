export interface Note {
id: string;
title: string;
content: string;
tag: NoteTag;
createdAt: string;
updatedAt: string; 
}
 
export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

export interface FetchNotesResponse{
    notes: Note[];
    totalPages: number;
  page?: number;
    perPage?: number;
    totalItems?: number;
}


export interface CreateNoteDto {
  title: string;
  content?: string;
  tag: NoteTag;
}
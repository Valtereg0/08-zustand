import axios from 'axios';
import type { Note, FetchNotesResponse, CreateNoteDto } from '@/types/note';


export interface FetchNotesParams {
  page?: number; 
  perPage?: number;
  search?: string;
  tag?: string;
}

  const API_URL = "https://notehub-public.goit.study/api";
  const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN

export const api = axios.create({
  baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${TOKEN ?? ""}`
    }
});

export async function fetchNotes(params: FetchNotesParams) {
    const { data } = await api.get<FetchNotesResponse>('/notes', { params });
  return data;
}

export async function createNote(dto: CreateNoteDto): Promise<Note> {
  const {data} = await api.post<Note>('/notes', dto);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await api.delete<Note>(`/notes/${id}`);
  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const {data} = await api.get<Note>(`/notes/${id}`);
  return data;
}
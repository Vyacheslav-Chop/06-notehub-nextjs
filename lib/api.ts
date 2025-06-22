import axios from "axios";
import { Note } from "@/types/notes";

interface FetchNotesRes {
  notes: Note[];
  totalPages: number;
}

interface NewNote {
  title: string;
  content?: string;
  tag: string;
}

interface SearchParams {
  search?: string;
}

const myTocen = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
axios.defaults.baseURL = "https://notehub-public.goit.study/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${myTocen}`;

export async function fetchNotes(
  searchText: string,
  page: number
): Promise<FetchNotesRes> {
  const searchParams: SearchParams = {};

  if (searchText) {
    searchParams.search = searchText;
  }

  const res = await axios.get<FetchNotesRes>("/notes", {
    params: {
      ...searchParams,
      page,
      perPage: 12,
    },
  });

  return res.data;
}

export async function fetchNoteById(id: number): Promise<Note> {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
}

export async function createNote(newNote: NewNote): Promise<Note> {
  const res = await axios.post<Note>("/notes", newNote);
  return res.data;
}

export async function deleteNote(noteId: number): Promise<Note> {
  const res = await axios.delete<Note>(`/notes/${noteId}`);
  return res.data;
}

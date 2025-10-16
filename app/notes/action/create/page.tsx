import type { Metadata } from "next";
import CreateNoteClient from "./CreateNote.client";

export const metadata: Metadata = {
  title: "Create new Note — NoteHub",
  description: "Create a new note in NoteHub.",
  openGraph: {
    title: "Create new Note — NoteHub",
    description: "Create a new note in NoteHub.",
    url: "https://08-zustand-nenn.vercel.app/notes/action/create",
    images: [
            {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub Open Graph image",
      },
    ],
  },
};

export default function CreateNotePage() {
  return <CreateNoteClient />;
}
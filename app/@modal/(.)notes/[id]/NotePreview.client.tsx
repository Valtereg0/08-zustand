"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import type { Note } from "@/types/note";
import Modal from "@/components/Modal/Modal";
import css from "@/app/notes/[id]/NoteDetails.client.module.css";

export default function NotePreview({ id }: { id: string }) {
  const router = useRouter();

  const { data: note, isLoading, error } = useQuery<Note>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) {
    return (
      <Modal isOpen={true} onClose={() => router.back()}>
        <div className={css.item}>
          <p>Loading...</p>
          <button onClick={() => router.back()}>Close</button>
        </div>
      </Modal>
    );
  }


  if (error || !note) {
    return (
      <Modal isOpen={true} onClose={() => router.back()}>
        <div className={css.item}>
          <p>Something went wrong.</p>
          <button onClick={() => router.back()}>Close</button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={true} onClose={() => router.back()}>
      <button onClick={() => router.back()}>Close</button>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{note.createdAt}</p>
        </div>
      </div>
    </Modal>
  );
}
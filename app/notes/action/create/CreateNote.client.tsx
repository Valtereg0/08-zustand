"use client";

import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";

export default function CreateNoteClient() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm
          onCancel={() => history.back()}
          onCreated={() => history.back()}
        />
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";
import { fetchTags } from "@/lib/api";

export const metadata: Metadata = {
  title: "Create New Note | NoteHub",
  description: "Draft and save a new note to your personal collection.",
  openGraph: {
    title: "Create New Note | NoteHub",
    description: "Draft and save a new note to your personal collection.",
    url: "https://notehub.com/notes/action/create",
    images: ["file:///Users/olyaa/Downloads/notehub-og-meta.png"],
  },
};

export default async function CreateNotePage() {
  const tags = await fetchTags();

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm tags={tags || []} />
      </div>
    </main>
  );
}

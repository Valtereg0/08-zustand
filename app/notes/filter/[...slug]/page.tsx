import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import css from "./NotesPage.module.css";
import { Metadata } from "next";  

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string[] }> }
): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug?.[0] ?? "All";

  const title = `Notes — ${tag}`;
  const description =
    tag === "All"
      ? "Your all notes in NoteHub."
      : `Your ${tag} notes in NoteHub.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://08-zustand-nenn.vercel.app/notes/filter/${tag}`,
      images: [
        "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      ],
    },
  };
}

export default async function NotesPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params; 
  const tag = slug?.[0] === "All" ? undefined : slug[0]; 

  const qc = new QueryClient();
  await qc.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () => fetchNotes({ page: 1, perPage: 12, tag }),
  });

  return (
    <main className={css.container}>
      <HydrationBoundary state={dehydrate(qc)}>
        <NotesClient tag={tag} />
      </HydrationBoundary>
    </main>
  );
}
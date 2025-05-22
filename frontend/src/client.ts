/**
 * Minimal API client for the Go backend.
 * Provides functions for notes and image search.
 */

export interface Note {
  id: string;
  text: string;
  cover_url: string;
}

export interface SearchResponse {
  photos: {
    id: number;
    src: {
      medium: string;
      landscape: string;
    };
    alt: string;
  }[];
}

const API_BASE = import.meta.env.VITE_API_ENDPOINT as string;

/** Fetch a note by ID */
export async function getNote(id: string): Promise<Note> {
  const resp = await fetch(`${API_BASE}/note/${encodeURIComponent(id)}`);
  if (!resp.ok) throw new Error(await resp.text());
  return await resp.json();
}

/** Save a note (create or update) */
export async function saveNote(note: Note): Promise<Note> {
  const resp = await fetch(`${API_BASE}/note`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  if (!resp.ok) throw new Error(await resp.text());
  return await resp.json();
}

/** Search for images using the backend's /images/:query endpoint */
export async function searchPhoto(query: string): Promise<SearchResponse> {
  const resp = await fetch(`${API_BASE}/images/${encodeURIComponent(query)}`);
  if (!resp.ok) throw new Error(await resp.text());
  return await resp.json();
}

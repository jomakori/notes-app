package note

import (
	"context"
	"testing"
)

func TestSaveNote_Success(t *testing.T) {
    ctx := context.Background()
    note := &Note{
        ID:       "test-id-1",
        Text:     "Test note text",
        CoverURL: "https://example.com/cover.jpg",
    }

    savedNote, err := SaveNote(ctx, note)
    if err != nil {
        t.Fatalf("expected no error, got %v", err)
    }

    if savedNote == nil {
        t.Fatal("expected a saved note, got nil")
    }

    if savedNote.Text != note.Text {
        t.Errorf("expected text %q, got %q", note.Text, savedNote.Text)
    }
    if savedNote.CoverURL != note.CoverURL {
        t.Errorf("expected cover URL %q, got %q", note.CoverURL, savedNote.CoverURL)
    }
}

func TestGetNote_Success(t *testing.T) {
    ctx := context.Background()

    // First create a test note
    testNote := &Note{
        ID:       "test-id-2",
        Text:     "Test note text",
        CoverURL: "https://example.com/cover.jpg",
    }

    _, err := SaveNote(ctx, testNote)
    if err != nil {
        t.Fatalf("failed to create test note: %v", err)
    }

    // Now test getting the note
    note, err := GetNote(ctx, testNote.ID)
    if err != nil {
        t.Fatalf("expected no error, got %v", err)
    }

    if note == nil {
        t.Fatal("expected a note, got nil")
    }

    // Verify the retrieved note matches
    if note.Text != testNote.Text {
        t.Errorf("expected text %q, got %q", testNote.Text, note.Text)
    }
    if note.CoverURL != testNote.CoverURL {
        t.Errorf("expected cover URL %q, got %q", testNote.CoverURL, note.CoverURL)
    }
}

func TestGetNote_NotFound(t *testing.T) {
    ctx := context.Background()

    // Try to get a non-existent note
    _, err := GetNote(ctx, "non-existent-id")
    if err == nil {
        t.Fatal("expected an error, got nil")
    }
}

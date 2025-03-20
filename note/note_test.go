package note

import (
    "context"
    "testing"
)

func TestSaveNote_Success(t *testing.T) {
    ctx := context.Background()
    note := &Note{ /* initialize with test data */ }

    savedNote, err := SaveNote(ctx, note)
    if err != nil {
        t.Fatalf("expected no error, got %v", err)
    }

    if savedNote == nil {
        t.Fatal("expected a saved note, got nil")
    }
}

func TestGetNote_Success(t *testing.T) {
    ctx := context.Background()
    id := "test-id"

    note, err := GetNote(ctx, id)
    if err != nil {
        t.Fatalf("expected no error, got %v", err)
    }

    if note == nil {
        t.Fatal("expected a note, got nil")
    }
}

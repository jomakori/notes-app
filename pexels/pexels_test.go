package pexels

import (
    "context"
    "testing"
)

func TestSearchPhoto_Success(t *testing.T) {
    ctx := context.Background()
    query := "test-query"
    
    response, err := SearchPhoto(ctx, query)
    if err != nil {
        t.Fatalf("expected no error, got %v", err)
    }
    
    if response == nil {
        t.Fatal("expected a search response, got nil")
    }
}

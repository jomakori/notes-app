# Use the official Golang image as a base image
FROM golang:1.20-alpine

# Install curl for healthchecks
RUN apk add --no-cache curl

# Set the working directory inside the container
WORKDIR /app

# Copy source code + dependencies
COPY go.mod go.sum *.go ./

# Download Go modules
RUN go mod download

# Build the Go application
RUN go build -o main .

# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy frontend content
COPY . .

# Install the dependencies
RUN npm install

# Expose the frontend port
EXPOSE 8181

# Command to run the Vite development server w/ server
CMD ["npm", "run", "dev", "--", "--host"]

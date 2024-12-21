# Dockerfile for React Frontend
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the frontend port
EXPOSE 3000

# Start the frontend server
CMD ["npm", "start"]
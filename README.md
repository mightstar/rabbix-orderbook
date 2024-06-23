# Orderbook Synchronization UI Component

## Overview

This project implements an isolated ReactJS UI component that represents an orderbook, displaying bids and asks by traders on an exchange. The component utilizes websocket updates to construct and update the orderbook in an optimized manner, handling network connection loss and resubscription automatically, and managing lost packages based on incorrect sequence numbers.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager): [Download and Install](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/) installed on your machine.

## Features

- **Real-time Data**: Utilizes websocket updates for real-time orderbook data.
- **Robust Connection**: Automatically handles network connection disruptions and resubscriptions.
- **Efficient Memory Management**: Optimized to prevent memory leaks.
- **TypeScript**: Implements strict typing for reliability and maintainability.

## Installation

The frontend is a React application.

### Running the Frontend Locally

1. Clone the repo and navigate to the frontend directory:

   ```bash
   git clone https://github.com/mightstar/rabbix-orderbook.git
   cd rabbix-orderbook
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

   The application should now be available on `http://localhost:5173`.

### Running with Docker Compose

1. Dockerfile

   Ensure your project contains a `Dockerfile` for containerization.

   ```dockerfile
   FROM node:20
   WORKDIR /usr/src/app
   COPY package*.json ./
   RUN npm install
   COPY . .r
   EXPOSE 3000
   CMD ["npm", "run", "dev"]
   ```

2. Docker Compose

   Create a `docker-compose.yml` in your project root with the following content:

   ```yaml
   version: "3.8"
   services:
   web:
     build: .
     ports:
       - "3000:3000"
     volumes:
       - .:/usr/src/app
       - /usr/src/app/node_modules
     environment:
     NODE_ENV: development
   ```

3. Build and Run with Docker Compose

   Build and run the container with Docker Compose.

   ```bash
   docker-compose up --build
   ```

   Your application should now be running in a Docker container and accessible at http://`localhost:3000`.

### Running Test

To run the test suite, execute the following command:

```bash
npm test
```

## Deploying the Webpage

### Build the React App:

1. Install the Netlify CLI

   First, you need to install the Netlify Command Line Interface (CLI) globally using npm (Node Package Manager). Open your terminal and run the following command:

   ```bash
   npm install netlify-cli -g
   ```

2. Login to Your Netlify Account

   Once the CLI is installed, you need to log in to your Netlify account from the terminal. If you don’t have an account, you should create one at Netlify’s website.

   ```bash
   netlify login
   ```

   This command will open a browser window asking you to log in to Netlify and authorize the CLI.

3. Build Your Project

   Before deploying, make sure your project is built and ready for production. Navigate to your project directory and run the build command:

   ```bash
   cd rabbix-orderbook
   npm run build
   ```

   This command compiles your React application into static files located in the build directory by default.

4. Initialize Netlify Deployment
   If this is your first time deploying this project to Netlify, you need to initialize it. Run the following command in the root of your project directory:

   ```bash
   netlify init
   ```

   You'll be prompted to set up a new site (unless you link to an existing one). Follow the prompts:

   - Choose "Create & configure a new site".
   - Choose your Team.
   - Input your Site name ( I inputed "rabbiX" )
   - Choose "Authorize with a GitHub personal access token"
   - Input your Github access token ( ghp_gKF... )
   - Set the build command to npm run build (or your custom build command).
   - Set the publish directory to dist (or your custom build directory).

5. Deploy Your Project
   Finally, deploy your application to Netlify:

   ```bash
   netlify deploy --prod
   ```

   Using --prod makes sure that it is a production deployment. The CLI will upload the contents of the specified publish directory to Netlify and publish it.

   Once the deployment is complete, the CLI will provide a URL to access your deployed site. This URL will be under the netlify.app domain, but you can configure a custom domain in your Netlify dashboard if you prefer.

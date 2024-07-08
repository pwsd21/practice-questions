// other options - Lerna nx


// npm install -g @turbo/turbo

//mkdir my-monorepo
// cd my-monorepo

// turbo init


// turboconfig.js - TURBOREPO CONFIG
module.exports = {
    projects: [
      {
        name: 'app',
        // Path to your app project
        path: './packages/app',
        // Commands to run in this project
        commands: {
          test: 'jest',
          build: 'npm run build',
        },
      },
      {
        name: 'shared',
        // Path to your shared module(s)
        path: './packages/shared',
        // Commands to run in this project
        commands: {
          test: 'jest',
          build: 'npm run build',
        },
      },
      // Add more projects as needed
    ],
  };

// MONOREPO CONFIG

// 1. Create Folders

// mkdir -p packages/app
// mkdir -p packages/shared

// app/package.json
{
    "name": "@my-monorepo/app",
    "version": "1.0.0",
    "scripts": {
      "test": "jest",
      "build": "npm run build",
      "build": "react-scripts build"
    },
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2"
    }
  }

// shared/package.json

{
    "name": "@my-monorepo/shared",
    "version": "1.0.0",
    "scripts": {
      "test": "jest",
      "build": "npm run build"
    },
    "dependencies": {
      // Add dependencies as needed
    }
  }


// Run Tests for all projects

// turbo test

// turbo build - Build the project


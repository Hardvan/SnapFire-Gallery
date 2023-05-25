# SnapFire Gallery

SnapFire is a web application that allows users to upload and share images. It provides a simple and intuitive interface for uploading images, displaying them in a grid layout, and viewing them in a modal window. The application is built using React and integrates with Firebase for image storage and retrieval.

## [Link to the Website](https://snapfire-gallery.pages.dev/)

## Tech Stack

- HTML
- CSS
- JavaScript
- React
- Firebase
- Cloudflare Pages

## Features

- **React Components**: The application is built using React, a popular JavaScript library for building user interfaces. The components are modular and reusable, promoting code organization and maintainability.
- **React Hooks**: The functional components in SnapFire use React Hooks to manage state and side effects. Hooks like useState and useEffect are employed to handle file uploads, progress tracking, and data fetching.
- **Firebase Integration**: SnapFire leverages Firebase, a comprehensive cloud platform, for image storage and retrieval. It utilizes Firebase Storage for uploading and storing images, and Firebase Firestore for managing image metadata.

## Installation

1. Clone the repository

   ```bash
    git clone https://github.com/Hardvan/SnapFire-Gallery
   ```

2. Navigate to the project directory

   ```bash
    cd snapFire-gallery
   ```

3. Install dependencies

   ```bash
    npm install
   ```

4. Create a Firebase project and set up Firebase Storage and Firestore. Refer to the Firebase documentation for detailed instructions.

5. Create a `.env` file in the root directory and add the following environment variables:

   ```env
    REACT_APP_FIREBASE_API_KEY=<your-api-key>
   ```

6. Start the development server

   ```bash
    npm start
   ```

## Deployment

This project is deployed using Cloudflare Pages via uploading the `build` folder. The `build` folder is generated by running the following command:

```bash
npm run build
```

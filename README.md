# To-Do List Web and Mobile App

This is a simple To-Do app built using Vite, React, and Capacitor. The app allows users to create, manage, and organize their tasks effectively. Vite is used as the build tool and React as the frontend library, while Capacitor enables the app to be deployed on Android devices.

## Features

- Add new tasks.
- Mark tasks as completed.
- Delete tasks.

## Prerequisites

Before running the app, make sure you have the following prerequisites installed on your system:

- Node.js (v20 or higher)
- npm (v10 or higher)
- Android Studio (v2023.1.1 or higher)

## Getting Started

To get started with the app, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SaddamAnnais/Todo-List-Web-N-Mobile-App.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Todo-List-Web-N-Mobile-App
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

   This command will start the Vite development server and open the app in your default browser.

5. **Build the app**:

   ```bash
   npm run build
   ```

   This command will build the app for production.

6. **Add the Android platform**:

   ```bash
   npx cap add android
   ```

   This command will add the Android platform to your Capacitor project.

7. **Open the project in Android Studio**:

   ```bash
   npx cap open android
   ```

   This command will open the Android project in Android Studio.

8. **Build and run the app on an Android device or emulator**:

   In Android Studio, select a device or emulator and click the "Run" button to build and run the app.

## Folder Structure

The project's folder structure is organized as follows:

- `src/`: Contains the source code of the React app.
  - `App.ts`: The entry point of the app.
  - `index.ts`: Initializes the React app.
- `android/`: Contains the Android project files.
- `public/`: Contains the public assets and the index.html file.
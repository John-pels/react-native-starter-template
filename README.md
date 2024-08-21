# React Native Starter Template &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/John-pels/react-native-starter-template/blob/main/LICENSE)<img src="https://img.shields.io/github/stars/John-pels/react-native-starter-template" alt="stars">[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://legacy.reactjs.org/docs/how-to-contribute.html#your-first-pull-request)[![GitHub issues](https://img.shields.io/github/issues/John-pels/react-native-starter-template.svg)](https://github.com/John-pels/react-native-starter-template)[![GitHub last commit](https://img.shields.io/github/last-commit/John-pels/react-native-starter-template.svg)](https://github.com/John-pels/react-native-starter-template/commits/main)

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Bun](https://img.shields.io/badge/BUN-FBF0DF?style=for-the-badge&logo=bun&logoColor=brown)
![License](https://img.shields.io/badge/License-UNLICENSED-green?style=for-the-badge)

This Template is a React Native template leveraging on expo and [Expo File-Based Routing](https://docs.expo.dev/develop/file-based-routing/). It is designed to accelerate development by providing essential features such as state management, internationalization, data fetching, navigation with Expo-router, Authentication, and reusable components. To learn more about expo, check their official documentation [here](https://docs.expo.dev/).

> NOTE: This project uses [Bun](https://bun.sh/docs/install/lockfile) as the package manager, [Biomejs](https://biomejs.dev/) for code linting and formatting, and [Total-typescript Reset](https://www.totaltypescript.com/ts-reset) for improved typescript's built-in typings.

## Features

- **🌍 Internationalization (i18n)**

  - Multi-language support using `react-i18next` for seamless localization.

- **🗃️ State Management with Redux and Context API**

  - Centralized state management for efficient global state access and updates.

- **🔍 Data Fetching with React Query**

  - Optimized data fetching, caching, and synchronization.

- **🧭 Navigation**

  - Smooth and intuitive navigation using `expo-router` with `Link` and hooks like `useRouter()`, `useNavigation()`, `useGlobalSearchParams()`, `useLocalSearchParams()`, etc.

- **⚛️ Component-Based Architecture**

  - Modular design with reusable UI components and native StyleSheet object.

- **📦 Common Utilities**

  - Helper functions and utilities for streamlined development.

- **🔗 Axios Management**

  - Configurable API requests using Axios with built-in error handling and response management.

- **🍪 Cookie Management**

  - Simplified management of cookies and expo-secure-store for authentication and user sessions.

- **🔒 Authentication**
  - User authentication and registration with secure token management.

## Folder Structure

- `src/` - source folder for all other directories
- `app/` - special directory. Any file you add to this directory becomes a route inside the native app and reflects the same URL for that route on the web
- `assets/` - directory for images and fonts
- `components/` - primary and secondary resuable components and tests directory
- `config/` - initialization of environment variables and other configuration
- `constants/` - colors palette, window with and height, etc
- `contexts/` - context API for session, user, theme, etc
- `hooks` - custom hooks, theme hooks, etc
- `lib/` - abstractions on third party libraries
- `providers/` - third party library providers such as Redux, React-query, etc
- `queries/` - react-query query and mutation hooks to make server requests
- `scripts/` - to reset project, native scripts, etc
- `services/` - axios or ky configuration, REST API methods and routes, etc
- `store/` - redux and redux-toolkit state, slices, and actions
- `types/` - typescript type declarations
- `utils/` - utility and helper functions

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- Yarn
- Android Studio / Xcode for Android/iOS development
- Bun

### Installation

1. **Clone the repository:**

   ```sh
   git clone git@github.com:John-pels/react-native-starter-template.git
   cd react-native-starter-template
   ```

2. **Install dependencies:**

   ```sh
   bun install
   ```

3. **Configure environment variables:**

   Change `.env.example` to `.env` file in the root directory and update with your configuration settings:

### Running the Application

1. **Start the Metro Bundler:**

   ```sh
   bun start
   ```

2. **Run the application on Android:**

   ```sh
   bun android
   ```

3. **Run the application on iOS:**

   ```sh
   bun ios
   ```

4. **Access the application:**

   The app will be available on your emulator or device.

## 🧪 Testing

To run the tests, use the following command:

```sh
bun test
```

## 🛠️ Scripts

- **🧹 Format and Lint code:** `bun check`
- **🏃‍♂️ Start the application:** `bun start`
- **👨‍💻 Start in development mode:** `bun android` or `bun ios` or `bun web`
- **🔍 Lint the code using ESLint:** `yarn lint`
- **🧪 Run the tests:** `bun test`
- **🚀 update packages:** `bun update-packages`
- **️‍🔥 Find unused files, dependencies and exports:** `bun knip`

## 🛠️ Expo Application Services [(EAS)](https://expo.dev/eas) Scripts

- **🧹 Runs the Android app in Release mode on a connected device or emulator:** `bun android:release`
- **🧹 Create a development build for Android, using the configuration specified in the development profile:** `bun android:dev-build`
- **🧹 Performs a local development build for Android using EAS Build, again using the development profile:** `bun android:dev-build:local`
- **🧹 Builds an Android app using the preview profile on EAS Build:** `bun android:preview`
- **🧹 Builds and runs the iOS app in Release mode on a connected device or simulator:** `bun ios:release`
- **🧹Creates an iOS build using EAS Build, specifically targeting the iOS simulator:** `bun ios:dev-build`
- **🧹 Performs a local development build for iOS using EAS Build, using the development profile:** `bun ios:dev-build:local`
- **🧹 Builds an iOS app using the preview profile on EAS Build:** `bun ios:preview`

## 📜 License

MIT License

## 👤 Author

[John O. Ajeigbe](mailto:ajeigbejohnolu@gmail.com)

---

Feel free to contribute to this template by submitting issues or pull requests.

For any questions or support, please contact [John O. Ajeigbe](mailto:ajeigbejohnolu@gmail.com).

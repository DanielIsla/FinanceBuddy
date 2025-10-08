# 💰 FinanceBuddy

## 📋 Description

**FinanceBuddy** is a mobile application built with **Ionic** and **Angular** that helps you manage your personal finances easily and efficiently.  
With this app, you can (some features are work-in-progress):

- Create personalized budgets  
- Track and categorize your expenses  
- Visualize your finances through interactive charts  
- Set savings goals and monitor your progress  

---

## 🛠 Requirements

Before starting, make sure you have the following installed:

- **Node.js** – JavaScript runtime environment  
- **Ionic CLI** – Command-line interface for Ionic apps  
- **Angular CLI** – Command-line tool for Angular projects  
- **Git** – Version control system  
- **Code editor** – Recommended: [Visual Studio Code](https://code.visualstudio.com/)

---

## 📥 Installation Guide

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/DanielIsla/FinanceBuddy.git
cd FinanceBuddy
```

---

### 2. Install Node.js and Tools (COPY THIS BLOCK)

#### 🪟 Windows

1. Download the Windows installer from: https://nodejs.org/  
2. Run the installer and follow the on-screen instructions (include npm).  
3. After installation, verify:

```bash
node -v
npm -v
```

#### 🍎 macOS

**Using Homebrew (recommended):**

```bash
brew install node
```

**Alternatively**, download the macOS installer from: https://nodejs.org/  

Verify:

```bash
node -v
npm -v
```

#### 🐧 Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install -y nodejs npm
```

> If your distro provides an outdated Node version, consider using NodeSource or nvm:
>
> NodeSource example (replace `18.x` with desired major version):
>
> ```bash
> curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
> sudo apt-get install -y nodejs
> ```
>
> Or install nvm (Node Version Manager) and then install Node via nvm:
>
> ```bash
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
> # then restart shell and:
> nvm install --lts
> ```

---

### 3. Install Ionic and Angular CLIs

Once Node.js and npm are ready, install the global CLIs:

```bash
npm install -g @ionic/cli @angular/cli
```

Verify:

```bash
ionic --version
ng version
```

---

### 4. Install Project Dependencies

From the project root (where `package.json` is located):

```bash
npm install
```

> If you use yarn, you can run:
>
> ```bash
> yarn
> ```

---

### 5. Run the Application (development server)

To start the app in the browser with live reload:

```bash
ionic serve
```

This typically opens the app at: http://localhost:8100

If the browser doesn't open automatically, visit that URL manually.

---

## 📱 Running on Mobile Devices

### 🤖 Android

1. Install Android Studio and set up SDK & emulator or connect a physical device.  
   - Ensure `ANDROID_HOME` / `ANDROID_SDK_ROOT` environment variables are set if needed.  
   - Enable USB debugging on a physical device.

2. Build & run with Capacitor:

```bash
# build the web assets first
ionic build

# copy to the native Android project
npx cap sync android

# open Android Studio (or run directly)
npx cap open android
```

From Android Studio you can run on an emulator or device. Or run directly:

```bash
ionic capacitor run android -l --external
```

> Use `-l --external` for livereload if the device and host are on the same network.

---

### 🍏 iOS (macOS only)

1. Install Xcode from the App Store and accept licenses.  
2. Build & sync:

```bash
ionic build
npx cap sync ios
npx cap open ios
```

Open the Xcode workspace and run on a simulator or device. Code signing is required for running on a real device.

---

## 🧪 Running Tests

This project may include Angular/Ionic tests. Common commands:

```bash
# unit tests (Jest or Karma depending on setup)
npm test
# or (if configured via ionic/ng)
ionic test
```

If the repo uses a specific test runner, check `package.json` scripts and follow those commands.

---

## 🧩 Useful Commands Summary

```bash
# clone
git clone https://github.com/DanielIsla/FinanceBuddy.git
cd FinanceBuddy

# install dependencies
npm install

# install global tools (one-time)
npm install -g @ionic/cli @angular/cli

# run dev server
ionic serve

# build for production
ionic build

# Capacitor: sync native projects
npx cap sync

# Android
npx cap open android

# iOS (macOS)
npx cap open ios
```

---

## 🤝 Contributing

Contributions are welcome! Suggested workflow:

```bash
# fork repository, then:
git checkout -b feature/your-feature
# implement changes
git add .
git commit -m "Add feature: brief description"
git push origin feature/your-feature
# open a Pull Request from your fork
```

- Please follow existing code style.
- Include tests where appropriate.
- Describe the change clearly in the PR.

---

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).

---

## 📝 Notes / To-Do (for README owner)

- Update the **Description** section with the app's exact features and screenshots.
- Add a screenshot or animated GIF in the header for better discoverability.
- Document any environment variables or external APIs used by the app.
- If the project uses Firebase / backend services, include setup instructions and keys handling (use `.env` and `.gitignore`).

---

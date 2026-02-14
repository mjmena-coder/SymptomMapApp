# Symptom Mapper

A privacy-first, mobile-optimized tool for tracking physical symptoms and pain duration in real-time. Designed to bridge the gap between "feeling pain" and having the data to explain it to a healthcare provider.

## 📋 Overview
Symptom Mapper allows users to log the intensity and duration of physical sensations using an interactive anatomical interface. By focusing on local-first storage and simple data visualization, it provides a clear historical record of physical well-being without compromising privacy.

## ✨ Key Features
- **Interactive Anatomy:** Tap-to-log interface with both front and back views.
- **Duration Tracking:** Live timers monitor how long symptoms persist.
- **Heat Mapping:** Visualizes cumulative data to identify chronic pain patterns.
- **Smart Reminders:** Android-optimized notifications to prompt users to close active logs.
- **Data Sovereignty:** All data is stored locally in the browser; export to CSV at any time.

## 📱 Getting Started (Android)
For full notification support, it is recommended to use this as a PWA:
1. Open the app in Chrome on Android.
2. Select **"Add to Home Screen"** from the browser menu.
3. Launch the app from your home screen and **Enable Notifications**.

## 🛠 Tech Stack
- **Engine:** Vanilla JavaScript (ES6+)
- **Graphics:** Scalable Vector Graphics (SVG)
- **Persistence:** Web Storage API (LocalStorage)
- **Background Tasks:** Service Worker API

## ⚖️ License
MIT License - feel free to fork and customize for personal use.

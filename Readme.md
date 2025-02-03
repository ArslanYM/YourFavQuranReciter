# Your Fav Quran Reciter 🌙

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13.5+-000000.svg?logo=next.js)](https://nextjs.org/)
[![Quran API](https://img.shields.io/badge/Quran_API-v4-blue.svg)](https://alquran.cloud/api)

A modern web application for listening to and reading the Holy Quran with multiple reciters. Built with Next.js and powered by the Al-Quran Cloud API.


## Features ✨

- 🎧 Listen to Quran recitations from famous reciters
- 📖 Read Quran text with multiple translations
- 🔍 Search across surahs and verses
- 🌙 Dark/Light mode toggle
- ⏯️ Audio playback controls with progress bar
- 📌 Bookmark favorite verses
- 🔄 Synchronized audio-text highlighting
- 🌐 Multi-language support
- 📱 Responsive design

## Tech Stack 💻

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: 
- **Audio Handling**: 
- **Icons**: 
- **Quran API**: 

## Getting Started 🚀

### Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+
- Quran API Key 


# Contributing 🤝
- We welcome contributions! Please follow these steps :
- Fork the project
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request



# Please read our Contribution Guidelines for details.

License 📄
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments 🙏
Quran audio files provided by Al-Quran Cloud

Inspired by popular Quran apps

Built with ❤️ by the Muslim developer community

Support ☕
If you find this project useful, please consider:

⭐ Giving a star on GitHub

🕌 Making dua for the contributors

💻 Contributing to the codebase

☕ Buying us a coffee

Note: This project is intended for educational and spiritual purposes. Please ensure proper attribution of all Quranic texts and audio files according to Islamic guidelines.


# API 
- // Reciter ID	Name
// 1	Mishary Rashid Al-Afasy
// 2	Abu Bakr Al-Shatri
// 3	Nasser Al Qatami

// Request format
// Make a GET request to /<reciterNo>/<surahNo>_<ayahNo>.mp3

// Example
// Endpoint: /2/1_2.mp3
// Raw Url: https://quranaudio.pages.dev/2/1_2.mp3

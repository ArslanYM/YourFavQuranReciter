# Quran Companion 🌙

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

### Installation

1. Clone the repository:

   git clone https://github.com/ArslanYM/YourFavQuranReciter
   cd quran-companion
Install dependencies:


npm install
# or
yarn install
Create .env.local file:

env
Copy
NEXT_PUBLIC_QURAN_API_KEY=your_api_key_here
Run development server:

bash
Copy
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser

Project Structure 📂
bash
Copy
.
├── public/          # Static assets
├── src/
│   ├── app/         # App router
│   ├── components/  # Reusable components
│   ├── store/       # Zustand state management
│   ├── styles/      # Global styles
│   ├── types/       # TypeScript definitions
│   └── utils/       # Helper functions
├── next.config.js   # Next.js configuration
└── tailwind.config.js # Tailwind configuration
API Usage 📡
The app uses the Al-Quran Cloud API for:

Surah list and metadata

Verse text and translations

Audio files from various reciters

Tafsir (exegesis) data

Example API call:

javascript
Copy
const response = await fetch(
  `https://api.alquran.cloud/v1/surah/114/editions/en.pickthall,ar.alafasy`
);
Contributing 🤝
We welcome contributions! Please follow these steps:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Please read our Contribution Guidelines for details.

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

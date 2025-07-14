# YoloPayApp

A modern React Native app built with Expo, featuring a digital debit card UI, payment modes, and more. Uses @faker-js/faker for generating realistic fake card data.

---

## 📁 Folder Structure

```
YoloPayApp/
│
├── app/                # App entry and routing (file-based)
│   ├── _layout.tsx
│   ├── +not-found.tsx
│   └── (tabs)/         # Tab screens
│       ├── _layout.tsx
│       ├── explore.tsx
│       ├── ginie.tsx
│       └── index.tsx
│
├── assets/             # Static assets
│   ├── fonts/
│   │   └── SpaceMono-Regular.ttf
│   └── images/
│       ├── ...         # Various images
│       └── digits/     # Digit images for card UI
│
├── components/         # Reusable UI components
│   ├── ui/
│   ├── Arcbackground.js
│   ├── DigitalCard.js
│   ├── ...
│
├── constants/          # App-wide constants
│   └── Colors.ts
│
├── hooks/              # Custom React hooks
│   ├── useColorScheme.ts
│   ├── useColorScheme.web.ts
│   └── useThemeColor.ts
│
├── screens/            # Main app screens
│   ├── YoloPayScreen.tsx
│   ├── GinieScreen.js
│   └── HomeScreen.js
│
├── utils/              # Utility functions
│   ├── digitToImage.js
│   └── fakeCard.js (deprecated)
│
├── scripts/            # Project scripts
│   └── reset-project.js
│
├── .expo/              # Expo config
├── .vscode/            # VSCode settings
├── package.json        # Project metadata & dependencies
├── tsconfig.json       # TypeScript config
├── app.json            # Expo app config
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional, for global usage)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd YoloPayApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```
   - Use the QR code to open the app in Expo Go, or run on an emulator/simulator.

4. **Reset the project (optional)**
   ```bash
   npm run reset-project
   ```
   - This will move starter code and create a blank app directory for fresh development.

---

## 🧪 Fake Card Data with Faker.js

- The app uses [`@faker-js/faker`](https://fakerjs.dev/api/) to generate realistic fake card details:
  - Card number (16 digits, split 4-4-4-4)
  - Cardholder name
  - Expiry date
  - CVV
- See `screens/YoloPayScreen.tsx` for implementation details.
- The old `utils/fakeCard.js` is now deprecated and not used.

---

## 📚 Learn More
- [Expo Documentation](https://docs.expo.dev/)
- [Faker.js API Reference](https://fakerjs.dev/api/)
- [React Native Docs](https://reactnative.dev/)

---

## 🤝 Community & Support
- [Expo on GitHub](https://github.com/expo/expo)
- [Expo Discord](https://chat.expo.dev)


## Author: @JanumalaAkhilendra 
Thanks For Visitng , Do give it a star 🌟🌟
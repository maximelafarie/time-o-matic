# Time-O-Matic

**Time-O-Matic** is a simple PWA (Progressive Web App) to help you calculate delayed start or end times for appliances (like washing machines or dishwashers).  
The app is currently in **French**, but contributions to add English or any other language are very welcome!

## Features

- **Fin différée** (Delayed End): Enter the program duration and your desired end time to get the correct delayed end setting and the program's start time.
- **Départ différé** (Delayed Start): Enter your desired start time to get the correct delayed start setting.
- Mobile-friendly and installable as a PWA.
- Works offline thanks to service worker caching.

## Usage

1. Open the app in your browser (or install it as a PWA).
2. Choose between "Fin différée" or "Départ différé" tabs.
3. Fill in the required times and click "Calculer" to get your result.

## Contributing

- The app is currently only available in French.
- If you want to add English or any other language, feel free to open a pull request!
- All contributions are welcome.

## Development

1. Clone the repository.
2. Open `index.html` in your browser, or use a local server for PWA features.
3. Edit `app.js`, `index.html`, and other files as needed.
4. If needed, increase the `CACHE_NAME` version in `service-worker.js`.

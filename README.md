# Symptom Mapper

A privacy-first progressive web app for tracking physical symptoms through an interactive body map.

## Features

### 🎯 Interactive Body Mapping
- **56 tappable body zones** with color-coded regions by body group
- **Front and back views** with anatomical accuracy
- **Mobile-optimized** tap targets for easy use on phones
- **Night mode theme** for comfortable low-light tracking

### 📊 Two Operating Modes

**Entry Mode** (default)
- Tap body parts to log new symptoms
- Record intensity (1-10 scale)
- 13 pain descriptors: Aching, Sharp, Burning, Dull, Throbbing, Stabbing, Tingling, Cramping, Pressure, Radiating, Shooting, Stiff, Numb
- Track medications/treatments taken
- Add custom notes
- Flexible time entry (current time or backdated)

**Heat Mode**
- Visual heat map showing symptom intensity by body part
- Color-coded: Yellow (low), Orange (medium), Red (high)
- Click zones to view history for that specific area
- Statistics: average intensity, total logs, last occurrence

### 📅 History & Analytics
- **Collapsible history** grouped by date
- **Active symptoms** tracked separately with one-click ending
- **Per-zone statistics** when viewing any body part
- **Confirmation dialogs** prevent accidental deletions/endings
- Full date/time stamps on all entries

### 💾 Data Management
- **100% local storage** - your data never leaves your device
- **CSV export** with timestamped filenames (no overwrites)
- Exports include: body part, intensity, pain types, medications, notes, timestamps, duration
- **Edit/delete** any entry at any time

## Installation

### Mobile (Recommended)
1. Download `index.html`
2. Open in Chrome/Safari
3. Add to Home Screen:
   - **iOS**: Tap Share → Add to Home Screen
   - **Android**: Tap ⋮ → Add to Home screen
4. Opens as standalone app (no browser UI)

### Desktop
1. Download `index.html`
2. Open in any modern browser
3. Bookmark for easy access

## Privacy

This app is designed with privacy as the top priority:
- ✅ **No internet connection required** (works offline)
- ✅ **No data collection or analytics**
- ✅ **No external API calls**
- ✅ **No cookies or tracking**
- ✅ **All data stored locally on your device**

Your symptom data is yours alone.

## Usage

### Logging a New Symptom
1. Tap the affected body part
2. Set intensity using the slider (1-10)
3. Optionally add pain descriptors, medications, or notes
4. Click "Save Entry"

### Viewing Patterns
1. Switch to "Heat Mode"
2. Body map shows color-coded intensity zones
3. Click any zone to see full history and statistics

### Exporting Data
1. Click "Export" button
2. CSV downloads with timestamp for easy backup
3. Use for medical appointments or personal analysis

## Technical Details

- **Technology**: Vanilla JavaScript (no frameworks)
- **File size**: ~25KB (single HTML file)
- **Dependencies**: None (fully self-contained)
- **Storage**: Browser localStorage API

## Browser Compatibility

Works on any modern browser with ES6+ support:
- Chrome/Edge (recommended)
- Safari (iOS/macOS)
- Firefox

## License

MIT License - Free to use, modify, and distribute.

## Disclaimer

This app is for personal symptom tracking only. It is **not a medical device** and should not be used for diagnosis or treatment. Always consult healthcare professionals for medical advice.

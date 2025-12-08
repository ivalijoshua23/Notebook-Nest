# NotebookLM Pro Tree

A Chrome extension that adds folder organization to Google's NotebookLM. Stop scrolling through endless flat lists — organize your sources and studio notes into a clean, nested tree structure.

## Features

- **Folder Organization** — Create nested folders for both Sources and Studio Notes
- **Deep Content Search** — Search not just titles, but the actual content of your notes
- **Pinning** — Pin frequently-used items to the top for quick access
- **Color Coding** — Assign colors to folders for visual organization
- **Drag Ordering** — Reorder folders with up/down controls
- **Export/Import** — Backup and restore your folder structure (great for sharing setups)
- **Toggle UI Elements** — Hide/show the generators panel and web research section to reduce clutter
- **Remote Config** — Selector updates pushed automatically when NotebookLM changes their UI
- **Expand/Collapse All** — Quickly expand or collapse all folders with one click

> **Note:** Each notebook has its own independent folder structure. Folders you create in one notebook won't appear in others. Use Export/Import to copy folder structures between notebooks.

## Installation

### Option 1: Load Unpacked (Developer Mode)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in top right)
4. Click **Load unpacked**
5. Select the folder containing these extension files
6. Navigate to [NotebookLM](https://notebooklm.google.com) and start organizing!

### Option 2: Chrome Web Store

*(Coming soon)*

## Usage

Once installed, you'll see new controls appear in NotebookLM:

- **Create Folder** — Click the folder+ icon to create a new folder
- **Move Items** — Hover over any source or note and click the folder icon to move it
- **Pin Items** — Click the pin icon to keep items at the top
- **Search** — Use the search bar (Studio panel) to find notes by title or content
- **Export** — Click the download arrow to backup your folder structure as JSON
- **Import** — Click the upload arrow to restore folders (choose to merge or replace)
- **Color/Rename/Delete** — Hover over folder headers to access these options

## Screenshots

*(Add screenshots here)*

## Privacy

This extension:
- Stores all data locally in your browser
- Does not collect or transmit personal information
- Only fetches a public configuration file for UI selectors

See [PRIVACY_POLICY.md](PRIVACY_POLICY.md) for details.

## Known Limitations

- Each notebook has independent folders (use Export/Import to share structures)
- Search index builds as you view notes — unviewed notes won't appear in deep search
- Chrome may show a developer mode warning for unpacked extensions

## Contributing

Found a bug or have a feature request? Open an issue or submit a PR.

## Author

**Benju66**

## License

MIT License — feel free to modify and share.

---

*Built because NotebookLM needed folders. You're welcome.*
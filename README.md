# NotebookLM Pro Tree

A Chrome extension that transforms Google's NotebookLM from a simple list into a robust **Project Management Dashboard**.

Stop scrolling through endless flat lists. Organize your sources into nested trees, manage project tasks, select documents in bulk, and focus with Zen Mode.

---

## ⚠️ Critical Warnings

1.  **Uninstalling Deletes Data:** Because this extension uses **Local Storage** for privacy and speed, **if you remove/uninstall the extension, your folders and tasks will be deleted instantly by Chrome.**
    * **Solution:** Always use the **Export** button to save a backup JSON file before reinstalling or moving to a new computer.

2.  **Google Updates & Reliability:** This extension works by "reading" the NotebookLM website. **If Google updates their website, this extension may break.**
    * **Disclaimer:** As this is a free, open-source project maintained in my spare time, I cannot guarantee immediate fixes if Google changes their code. Use this tool as a helpful enhancement, but keep your important data backed up.

---

## 🚧 Project Status & Disclaimer

**Please Read:** I am a Construction Project Manager, not a professional software developer. I built this tool because I needed it for my own daily workflow.

* **"Works on My Machine":** This update (v17.5) is stable for my personal use, but it has **not been battle-tested** on every possible browser configuration or operating system.
* **Experimental Features:** The new storage engine and task manager are powerful but complex. You may encounter bugs I haven't seen.
* **Feedback:** If you find a bug, please open an issue on GitHub!

---

## 🚀 New in v17.5: The Storage Overhaul
We have moved to a **Local-First Architecture**.
- **Unlimited Storage:** You can now build massive folder trees without hitting Chrome's tiny sync limits.
- **Instant Performance:** Saves happen instantly with no network latency.
- **Bigger Brain:** Deep Search index is now **5MB** (up from 2MB), allowing you to index 2x more note content.

## Features

### 📋 Productivity & Workflow
- **Integrated Task Manager** — Built-in to-do list for every notebook. Prioritize (Red/Yellow/Blue), sort instantly, and track completions.
- **Advanced Source Control** — The "Command Center" for your sources:
    - **Master Select:** One click to select/deselect *all* sources in the notebook.
    - **Folder Toggles:** Hover over any folder to instantly check/uncheck all documents inside it.
    - **Smart Sync:** The tree watches the real app state in real-time.
- **"Zen Mode"** — Toggle the UI to hide the AI chat and sidebars for a distraction-free reading/writing studio.

### 📂 Organization
- **Nested Folders** — Create deep structures for both Sources and Studio Notes.
- **Pinning** — Keep critical contracts or specs pinned to the top.
- **Color Coding** — Assign colors to folders for visual organization.
- **Drag & Drop** — Easily move items between folders.

### 🔍 Deep Search
- **Content Indexing** — Search the *actual text* inside your notes, not just the titles.
- **Smart Compression** — Uses LZ-String compression to store significantly more data locally.

### 🛡️ Reliability
- **Self-Healing UI** — Automatically detects if Google refreshes the page layout and repairs the folder tree instantly.
- **Robust Selectors** — Uses multiple backup methods to find UI elements if Google updates their code.
- **Styled Dialogs** — Smooth, themed confirmation dialogs (no more jarring browser popups).

> **Note:** Each notebook has its own independent data. Tasks and Folders created in "Project A" won't clutter "Project B."

## Installation

### Load Unpacked (Developer Mode)

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (toggle in top right).
4. Click **Load unpacked**.
5. Select the folder containing these extension files.
6. Navigate to [NotebookLM](https://notebooklm.google.com) and start organizing!

## Usage

Once installed, you'll see a new "Project Dashboard" interface:

- **Tasks** — Type in the input box to add tasks. Click the checkmark to complete, or the color block to change priority.
- **Bulk Select** — Click the checkbox next to any Folder to select/deselect all sources inside it.
- **Zen Mode** — Click the "Target/Focus" icon in the toolbar to toggle the UI.
- **Move Items** — Hover over any source or note and click the arrow icon to move it.
- **Deep Search** — Click on notes to index them. Use the search bar to find content.
- **Export/Import** — Use these buttons to backup your structure or move it to a new computer.

## 💾 Storage & Data Guide

**Where Your Data Lives:**
Because v17.5 prioritizes speed and unlimited capacity, **your data lives on your device.**

* **Local Storage:** Folders, Tasks, Settings, and Search Index.
* **No Auto-Sync:** Folders do **not** sync automatically between computers.
* **Moving Data:** To move your setup to a laptop, use the **Export** button to get a JSON file, then **Import** on the new machine.

**Warning:** If you clear Chrome's "Site Data" or "Cookies," you will lose your folders. **Export backups regularly.**

## Screenshots

**Source Dashboard**
*The new Task List, Folder Tree, and Bulk Select Checkboxes.*
<img width="252" height="170" alt="Source Dashboard with Tasks" src="https://github.com/user-attachments/assets/d3b36a39-abf6-4b6c-a81d-2688fbca07e4" />

**Folder Controls**
*Manage colors, renaming, and nested structures.*
<img width="432" height="129" alt="Folder Controls" src="https://github.com/user-attachments/assets/b6c79d4b-90f3-42b2-a3ff-d267413aca4f" />

**Zen Mode & Focus**
*Clean interface with chat hidden.*
<img width="471" height="121" alt="Zen Mode" src="https://github.com/user-attachments/assets/26ca3554-402c-4b2b-9635-0fda91cd5a22" />

## Privacy & Security

This extension is **Local-First**:
- All data is stored in your browser's local storage.
- No analytics or usage data is sent to the developer.
- Open Source: You can inspect the code to verify no data leaves your machine.

See [PRIVACY_POLICY.md](PRIVACY_POLICY.md) for details.

## Known Limitations

- **Studio Notes:** Non-markdown (`.md`) notes (e.g., "Saved Responses") in the Studio panel cannot currently be moved to folders.
- **Underlining:** Underlining content in a note is not persistent (this is a Google NotebookLM issue, not the extension).
- **Incognito:** The extension's memory system is disabled in Incognito mode.

## Contributing

Found a bug or have a feature request? Open an issue or submit a PR.

## Author

**Benju66**

## License

**GPLv3 License**

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

*Note: This ensures that any improvements made to this project must be shared back with the community.*
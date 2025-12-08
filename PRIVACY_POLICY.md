# Privacy Policy for NotebookLM Pro Tree

**Last Updated:** December 2024

## Overview

NotebookLM Pro Tree is a browser extension that adds folder organization to Google NotebookLM. This policy explains what data the extension accesses and how it's handled.

## Data Collection

**We do not collect any personal data.**

This extension:
- Does NOT collect personal information
- Does NOT track your browsing activity
- Does NOT transmit your data to any server
- Does NOT use analytics or telemetry

## Data Storage

All extension data is stored **locally in your browser** using Chrome's storage API. This includes:
- Your folder structure (names, hierarchy, colors)
- Mappings of which items are in which folders
- Pinned item preferences
- A search index of note content (for local search only)

This data never leaves your device and is not accessible to anyone but you.

## Network Requests

The extension makes **one optional network request**:

- **Remote Configuration Fetch**: On load, the extension fetches a JSON file from a public GitHub Gist (`gist.githubusercontent.com`). This file contains CSS selectors that help the extension locate UI elements in NotebookLM. No personal data is sent in this request — it's a simple GET request for a public file.

If this request fails, the extension continues to work using built-in default selectors.

## Permissions Explained

| Permission | Why It's Needed |
|------------|-----------------|
| `activeTab` | To inject the folder UI into NotebookLM pages |
| `scripting` | To run the content script that creates the folder interface |
| `storage` | To save your folder structure locally |
| `host_permissions` for `notebooklm.google.com` | To operate on NotebookLM pages |
| `host_permissions` for `gist.githubusercontent.com` | To fetch the remote selector configuration |

## Third-Party Services

This extension does not integrate with any third-party analytics, advertising, or data collection services.

## Changes to This Policy

If this policy changes, the updated version will be posted in the extension's repository.

## Contact

For questions about this privacy policy, contact the author through GitHub: **Benju66**

---

**Summary:** Your data stays on your device. We don't collect anything. The only network request is fetching a public config file to keep the extension working when NotebookLM updates.
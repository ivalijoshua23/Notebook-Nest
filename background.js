/**
 * NotebookLM Pro Tree - Background Service
 * Handles remote configuration fetching to bypass CORS restrictions.
 */

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Strategy 1: The Fetch Proxy
    if (request.action === "fetchConfig") {
        fetch(request.url)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                sendResponse({ success: true, data: data });
            })
            .catch(error => {
                console.warn("NotebookLM Tree: Config fetch failed, using defaults.", error);
                sendResponse({ success: false, error: error.message });
            });
        return true; // Keeps the message channel open for async response
    }
});

console.log("NotebookLM Source Organizer service worker started.");
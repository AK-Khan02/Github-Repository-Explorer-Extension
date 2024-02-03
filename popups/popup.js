let activeGithubReposCount = 0; // Counts active GitHub repositories
let displayActiveReposText = ""; // Text for displaying the count of active repos

// Function to fetch and display GitHub tabs
async function fetchAndDisplayGithubTabs() {
    // Query for GitHub repository tabs
    const repoTabs = await chrome.tabs.query({ url: ["https://github.com/*/*"] });

    // Updated to match the new ID in the HTML
    const repoListItemTemplate = document.getElementById("repositoryItemTemplate");
    const repoElements = new Set(); // To hold cloned template elements

    // Iterate through fetched tabs and prepare list items
    repoTabs.forEach(tab => {
        const clonedItem = repoListItemTemplate.content.firstElementChild.cloneNode(true);

        // Extracting repository name and path
        const repoName = extractRepoName(tab.title);
        const repoPath = new URL(tab.url).pathname;

        // Updated class names to match the new ones in the HTML
        clonedItem.querySelector(".repositoryTitle").textContent = repoName;
        clonedItem.querySelector(".repositoryPath").textContent = repoPath;

        // Adding click event listener to open repository in VSCode web
        clonedItem.querySelector(".repositoryLink").addEventListener("click", () => openInVSCode(repoPath));

        repoElements.add(clonedItem); // Add to the set of elements
        activeGithubReposCount++; // Increment active GitHub repos count
    });

    // Updated to match the new ID in the HTML
    document.getElementById("repositoryList").append(...repoElements);

    // Update the display text based on active repos count
    displayActiveReposText = activeGithubReposCount > 0 
        ? `${activeGithubReposCount} active GitHub repo(s)` 
        : "No active GitHub repositories";

    // Updated to match the new ID in the HTML
    document.getElementById("activeRepoCount").innerHTML = displayActiveReposText;
}

// Extracts repository name from the tab title
function extractRepoName(title) {
    return title.split("-")[0].trim().split("/")[1];
}

// Opens the given repository path in VSCode web
function openInVSCode(path) {
    chrome.tabs.create({ url: `https://vscode.dev/github${path}` });
}

// Invoke the function to fetch and display GitHub tabs
fetchAndDisplayGithubTabs();

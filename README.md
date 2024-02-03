# GitHub Repository Explorer Chrome Extension

## Overview

The GitHub Repository Explorer is a Chrome extension designed to enhance the productivity of developers by providing a quick and seamless way to view and access GitHub repositories directly in Visual Studio Code (VSCode) through the browser. This extension identifies all open GitHub repository tabs in Chrome and lists them in a popup, allowing users to open any of these repositories in VSCode with a single click.

![img](https://github.com/AK-Khan02/Github-Repository-Explorer-Extension/assets/83300832/eb11a8ff-40c9-409f-b006-aaaf58c4d480)


## Features

- **Repository Detection**: Automatically detects open tabs in Chrome that are pointed to GitHub repositories.
- **Quick Access**: Offers a list of detected GitHub repositories within the extension's popup, providing immediate access.
- **VSCode Integration**: Enables opening repositories directly in VSCode's web version with a simple click, facilitating an efficient workflow for code review and editing.
- **User-Friendly Interface**: Presents a clean and intuitive interface, listing repositories with their names and paths for easy identification.

## How It Works

1. **Repository Detection**: The extension executes a background script that queries Chrome for tabs with URLs matching GitHub repository patterns (`https://github.com/*/*`). This pattern ensures that only repository pages are considered, filtering out other GitHub-related pages such as issue trackers or wikis.

2. **Listing Repositories**: The detected repositories are then listed in the extension's popup window. Each list item displays the repository's name extracted from the tab's title and the path obtained from the URL. This provides a clear and concise view of the repositories currently open in the browser.

3. **Opening in VSCode**: Each repository listed in the popup is clickable. Clicking on a repository initiates a command to open a new tab in Chrome, redirecting to `https://vscode.dev/github` followed by the repository's path. This action opens the repository in VSCode's web version, allowing for immediate viewing and editing in a full-featured code editor.

4. **Active Repositories Count**: The extension also displays the count of active GitHub repository tabs. This count is updated in real-time as tabs are opened or closed, providing a quick overview of the number of repositories currently being worked on.

## Installation

1. Clone or download this repository to your local machine.
2. Open the Chrome Extensions page by navigating to `chrome://extensions/`.
3. Enable "Developer mode" at the top right corner.
4. Click on "Load unpacked" and select the directory where you've saved this extension.
5. The GitHub Repository Explorer extension should now appear in your extensions list and is ready for use.

## Usage

Click on the extension's icon in the Chrome toolbar to open the popup window. The popup will display a list of currently open GitHub repository tabs. Click on any repository in the list to open it in VSCode's web version.


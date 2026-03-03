# Personal Portfolio Site

Static portfolio site with an About section, writing links, and a Shelf with books and essays.

## Stack

- HTML (`index.html`)
- CSS (`styles.css`)
- Vanilla JavaScript (`js/data.js`, `js/main.js`, `js/analytics.js`)

## Run Locally

This is a static site, so no build step is required.

1. Clone the repo
2. Open `index.html` in a browser.

Optional (recommended): run a local static server.

```bash
# Python 3
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project Structure

- `index.html`: Main page layout and section structure.
- `styles.css`: Styling and responsive behavior.
- `js/data.js`: Shelf content data (books and essays).
- `js/main.js`: Rendering logic, filtering, and modal behavior.
- `js/analytics.js`: Google Analytics initialization.

## Content Editing

Shelf content is managed in `js/data.js`.

The file uses:

- `BADGE` constants: `BADGE.TOP`, `BADGE.FAVORITE`, `BADGE.CORE`
- Helper constructors: `book(...)`, `essay(...)`
- A single `shelfData` object that contains all arrays

### Books (`shelfData.books`)

Each book item supports:

- `title` (required)
- `author` (required)
- `isbn` (optional, used for Open Library cover images)
- `year` (required, stored as string, used by year filter)
- `review` (optional)
- `badge` (optional, use `BADGE.TOP` or `BADGE.FAVORITE`)

### Essays (`shelfData.essays`)

Each essay item supports:

- `title` (required)
- `source` (required)
- `url` (required)
- `badge` (optional, use `BADGE.CORE`)

## Deployment

Designed for GitHub Pages or any static hosting provider.

1. Commit changes.
2. Push to your publishing branch.
3. Verify the deployed site after publish.

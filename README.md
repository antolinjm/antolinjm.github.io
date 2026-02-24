# Personal Portfolio Site

Static portfolio site with an About section, writing links, and a three-tab Shelf (Books, Movies, Essays).

## Stack

- HTML (`index.html`)
- CSS (`styles.css`)
- Vanilla JavaScript (`js/theme.js`, `js/data.js`, `js/main.js`)

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
- `js/data.js`: Shelf content data (books, movies, essays).
- `js/main.js`: Rendering logic, tab/filter handling, modal behavior.
- `js/theme.js`: Theme toggle and theme persistence.
- `script.js`: Legacy script file (not loaded by `index.html`).

## Content Editing

Shelf content is managed in `js/data.js`.

The file uses:

- `BADGE` constants: `BADGE.TOP`, `BADGE.FAVORITE`, `BADGE.CORE`
- Helper constructors: `book(...)`, `movie(...)`, `essay(...)`
- A single `shelfData` object that contains all arrays

### Books (`shelfData.books`)

Each book item supports:

- `title` (required)
- `author` (required)
- `isbn` (optional, used for Open Library cover images)
- `year` (required, stored as string, used by year filter)
- `review` (optional)
- `badge` (optional, use `BADGE.TOP` or `BADGE.FAVORITE`)

Example:

```js
book("The Example Book", "Author Name", 2026, {
  isbn: "9780123456789",
  badge: BADGE.TOP,
  review: "Short note about why this mattered."
})
```

### Movies (`shelfData.movies`)

Each movie item supports:

- `title` (required)
- `year` (required, stored as string)
- `review` (optional)
- `badge` (optional, use `BADGE.TOP` or `BADGE.FAVORITE`)

Example:

```js
movie("Example Movie", 2025, {
  badge: BADGE.FAVORITE,
  review: "Short note."
})
```

### Essays (`shelfData.essays`)

Each essay item supports:

- `title` (required)
- `source` (required)
- `url` (required)
- `badge` (optional, use `BADGE.CORE`)

Example:

```js
essay("Example Essay", "Example Publication", "https://example.com/article", {
  badge: BADGE.CORE
})
```

## Filters and Years

- Type filters (`All`, `All-Timers/Core Texts`, `Liked`) are wired in `js/main.js`.
- Year filters are hardcoded in `index.html` under each tab's `year-filters` block.

To add a new year filter:

1. Copy an existing year button in the relevant tab (`Books` or `Movies`) in `index.html`.
2. Set `data-year` and label to the new year (for example, `2027`).

Example button:

```html
<button class="year-btn" data-year="2027">2027</button>
```

## Deployment

Designed for GitHub Pages or any static hosting provider.

1. Commit changes.
2. Push to your publishing branch.
3. Verify the deployed site after publish.

## Troubleshooting

- Old symbol badges (star/heart) are still supported, but new entries should use BADGE.* values.
- Covers not loading: verify `isbn` values are valid 10- or 13-digit ISBNs and available in Open Library.
- Content not updating: hard refresh the browser to clear cached JS.



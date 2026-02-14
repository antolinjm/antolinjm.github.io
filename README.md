# Welcome to My Portfolio

This is my personal portfolio website. Here you can find my projects and contact information.

---

## Updating the site with new books or reads

All shelf content (books, movies, essays) is stored in **`js/data.js`**. Edit that file to add or change items.

### Adding a new book (Bookshelf)

Add an object to the `books` array. Each book can have:

| Field    | Required | Description |
|----------|----------|-------------|
| `title`  | Yes      | Book title |
| `author` | Yes      | Author name |
| `isbn`   | Yes*     | 10- or 13-digit ISBN. Used to fetch the cover from Open Library. Omit for no cover image. |
| `year`   | Yes      | Year read (e.g. `"2024"`). Used by the year filter. |
| `review` | No       | Short review shown in the detail modal. |
| `badge`  | No       | `"★"` (Life-Changing) or `"❤"` (Liked). Omit or use `null` for no badge. |

Example:

```javascript
{ title: "Your Book Title", author: "Author Name", isbn: "9780123456789", badge: "❤", year: "2025", review: "Why you liked it." }
```

### Adding a new movie (Movie Shelf)

Add an object to the `movies` array:

| Field    | Required | Description |
|----------|----------|-------------|
| `title`  | Yes      | Movie title |
| `year`   | Yes      | Year (e.g. `"2024"`). Used by the year filter. |
| `review` | No       | Short review in the detail modal. |
| `badge`  | No       | `"★"` (All-Timers) or `"❤"` (Liked). Omit or `null` for no badge. |

Example:

```javascript
{ title: "Movie Name", year: "2025", badge: "★", review: "Why it's an all-timer." }
```

### Adding a new essay or read (Essays tab)

Add an object to the `essays` array:

| Field    | Required | Description |
|----------|----------|-------------|
| `title`  | Yes      | Essay or article title |
| `source` | Yes      | Author or publication name (e.g. `"Paul Graham"`) |
| `url`    | Yes      | Full URL to the piece. |
| `badge`  | No       | `"★"` for Core Texts. Omit or `null` for no badge. |

Example:

```javascript
{ title: "Essay Title", source: "Author or Site", url: "https://example.com/essay", badge: "★" }
```

### After editing

1. Save `js/data.js`.
2. Refresh the site in your browser (or push to GitHub if you use GitHub Pages).
3. New items appear in the correct shelf tab; filters (All / ★ / ❤ and year) work automatically.

To add a new filter year (e.g. 2027), add a year button in `index.html` in the Bookshelf and/or Movie Shelf sections (look for `year-filters` and copy an existing `year-btn`), and give it `data-year="2027"`.

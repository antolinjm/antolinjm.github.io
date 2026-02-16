// State
let currentBookFilter = 'all';
let currentMovieFilter = 'all';
let currentEssayFilter = 'all';
let currentBookYear = null;
let currentMovieYear = null;

const BADGE_ICON = Object.freeze({
    top: '\u2605',
    favorite: '\u2764',
    core: '\u2605'
});

document.addEventListener('DOMContentLoaded', () => {
    if (typeof loadTheme === 'function') loadTheme();
    setupShelfTabs();
    setupFilterButtons();
    setupYearButtons();
    populateBooks();
    populateMovies();
    populateEssays();
    setupScrollButton();
    setupModalEscapeKey();
});

// Shelf tab switching (Bookshelf | Movie Shelf | Essays)
function setupShelfTabs() {
    document.querySelectorAll('.shelf-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.shelf-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            const panel = document.getElementById('tab-' + tab);
            if (panel) panel.classList.add('active');
        });
    });
}

function setupFilterButtons() {
    document.querySelectorAll('.sort-controls').forEach(controls => {
        controls.querySelectorAll('.sort-btn[data-filter]').forEach(btn => {
            btn.addEventListener('click', () => {
                controls.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                const tab = controls.closest('.tab-content');
                if (!tab) return;
                if (tab.id === 'tab-books') {
                    currentBookFilter = filter;
                    populateBooks();
                } else if (tab.id === 'tab-movies') {
                    currentMovieFilter = filter;
                    populateMovies();
                } else if (tab.id === 'tab-essays') {
                    currentEssayFilter = filter;
                    populateEssays();
                }
            });
        });
    });
}

function setupYearButtons() {
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const year = btn.dataset.year;
            const tab = btn.closest('.tab-content');
            if (!tab) return;
            const group = tab.querySelectorAll('.year-btn');
            const wasActive = btn.classList.contains('active');
            group.forEach(b => b.classList.remove('active'));
            if (!wasActive) {
                btn.classList.add('active');
                if (tab.id === 'tab-books') {
                    currentBookYear = year;
                    populateBooks();
                } else if (tab.id === 'tab-movies') {
                    currentMovieYear = year;
                    populateMovies();
                }
            } else {
                if (tab.id === 'tab-books') {
                    currentBookYear = null;
                    populateBooks();
                } else if (tab.id === 'tab-movies') {
                    currentMovieYear = null;
                    populateMovies();
                }
            }
        });
    });
}

function filterBooks() {
    let list = books.slice();
    if (currentBookFilter === 'favorites') list = list.filter(b => ['favorite', 'top'].includes(normalizeBadge(b.badge)));
    else if (currentBookFilter === 'top') list = list.filter(b => normalizeBadge(b.badge) === 'top');
    if (currentBookYear) list = list.filter(b => b.year === currentBookYear);
    return list;
}

function filterMovies() {
    let list = movies.slice();
    if (currentMovieFilter === 'favorites') list = list.filter(m => ['favorite', 'top'].includes(normalizeBadge(m.badge)));
    else if (currentMovieFilter === 'top') list = list.filter(m => normalizeBadge(m.badge) === 'top');
    if (currentMovieYear) list = list.filter(m => m.year === currentMovieYear);
    return list;
}

function filterEssays() {
    let list = essays.slice();
    if (currentEssayFilter === 'top') list = list.filter(e => ['core', 'top'].includes(normalizeBadge(e.badge)));
    return list;
}

function populateBooks() {
    const grid = document.getElementById('books-grid');
    const countEl = document.getElementById('book-count');
    if (!grid) return;
    grid.innerHTML = '';
    const list = filterBooks();
    list.forEach(book => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.title = book.title;
        div.onclick = () => openBookModal(book);
        const titleSpan = document.createElement('span');
        titleSpan.className = 'title-fallback';
        titleSpan.textContent = book.title;
        div.appendChild(titleSpan);
        if (book.badge) {
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.textContent = badgeIcon(book.badge);
            div.appendChild(badge);
        }
        if (book.isbn) {
            const img = document.createElement('img');
            img.src = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
            img.alt = book.title;
            img.loading = 'lazy';
            img.onerror = () => { div.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; };
            div.appendChild(img);
        } else {
            div.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
        grid.appendChild(div);
    });
    if (countEl) countEl.textContent = `${list.length} book${list.length !== 1 ? 's' : ''}`;
}

function populateMovies() {
    const grid = document.getElementById('movies-grid');
    const countEl = document.getElementById('movie-count');
    if (!grid) return;
    grid.innerHTML = '';
    const list = filterMovies();
    list.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.title = movie.title;
        div.onclick = () => openMovieModal(movie);
        div.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
        const titleSpan = document.createElement('span');
        titleSpan.className = 'title-fallback';
        titleSpan.textContent = movie.title + ' (' + movie.year + ')';
        div.appendChild(titleSpan);
        if (movie.badge) {
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.textContent = badgeIcon(movie.badge);
            div.appendChild(badge);
        }
        grid.appendChild(div);
    });
    if (countEl) countEl.textContent = `${list.length} movie${list.length !== 1 ? 's' : ''}`;
}

function populateEssays() {
    const listEl = document.getElementById('essays-list');
    const countEl = document.getElementById('essay-count');
    if (!listEl) return;
    listEl.innerHTML = '';
    const list = filterEssays();
    list.forEach(essay => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${escapeAttr(essay.url)}" target="_blank" rel="noopener">${escapeHtml(essay.title)}</a>
            ${essay.badge ? `<span class="badge" style="margin-left:8px">${badgeIcon(essay.badge)}</span>` : ''}
            <div class="source">${escapeHtml(essay.source)}</div>
        `;
        listEl.appendChild(li);
    });
    if (countEl) countEl.textContent = `${list.length} essay${list.length !== 1 ? 's' : ''}`;
}

function openBookModal(book) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    const coverUrl = book.isbn ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg` : '';
    body.innerHTML = `
        ${coverUrl ? `<img src="${coverUrl}" alt="${escapeAttr(book.title)}" class="modal-cover" onerror="this.style.display='none'">` : ''}
        <div class="modal-title">${escapeHtml(book.title)}</div>
        <div class="modal-author">${escapeHtml(book.author)}</div>
        ${book.review ? `<div class="modal-review">${escapeHtml(book.review)}</div>` : ''}
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openMovieModal(movie) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <div class="modal-title">${escapeHtml(movie.title)}</div>
        <div class="modal-author">${movie.year}</div>
        ${movie.review ? `<div class="modal-review">${escapeHtml(movie.review)}</div>` : ''}
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

function setupModalEscapeKey() {
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    document.getElementById('modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupScrollButton() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    });
}

function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

function escapeAttr(text) {
    return String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function normalizeBadge(badge) {
    if (!badge) return null;
    const value = String(badge).trim().toLowerCase();

    if (value === 'top' || value === 'favorite' || value === 'core') return value;
    if (value === '\u2605') return 'top';
    if (value === '\u2764') return 'favorite';

    return value;
}

function badgeIcon(badge) {
    const normalized = normalizeBadge(badge);
    return BADGE_ICON[normalized] || String(badge);
}


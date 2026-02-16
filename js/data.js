// Canonical badge values used across shelves.
const BADGE = Object.freeze({
    TOP: 'top',
    FAVORITE: 'favorite',
    CORE: 'core'
});

function book(title, author, year, { isbn = null, badge = null, review = '' } = {}) {
    return { title, author, year: String(year), isbn, badge, review };
}

function movie(title, year, { badge = null, review = '' } = {}) {
    return { title, year: String(year), badge, review };
}

function essay(title, source, url, { badge = null } = {}) {
    return { title, source, url, badge };
}

const shelfData = {
    books: [
        book('The Innovators', 'Walter Isaacson', 2024, {
            isbn: '9781476708690',
            badge: BADGE.TOP,
            review: 'A compelling exploration of the minds behind the digital revolution.'
        }),
        book('Thinking, Fast and Slow', 'Daniel Kahneman', 2024, {
            isbn: '9780374533557',
            badge: BADGE.FAVORITE,
            review: 'Deep dive into human decision-making.'
        }),
        book('Atomic Habits', 'James Clear', 2023, {
            isbn: '9780735211292',
            badge: BADGE.FAVORITE,
            review: 'Practical framework for building lasting habits.'
        }),
        book('The Design of Everyday Things', 'Don Norman', 2023, {
            isbn: '9780465050659',
            badge: BADGE.TOP,
            review: 'Essential for anyone building products.'
        }),
        book('Sapiens', 'Yuval Noah Harari', 2023, {
            isbn: '9780062316097',
            badge: BADGE.FAVORITE,
            review: 'A sweeping history of humankind.'
        }),
        book('The Mythical Man-Month', 'Frederick Brooks', 2023, {
            isbn: '9780201835952',
            review: 'Classic software engineering wisdom.'
        })
    ],
    movies: [
        movie('Everything Everywhere All at Once', 2024, {
            badge: BADGE.TOP,
            review: 'Mind-bending and heartfelt.'
        }),
        movie('Past Lives', 2024, {
            badge: BADGE.FAVORITE,
            review: 'Quiet and moving.'
        }),
        movie('The Holdovers', 2024, {
            badge: BADGE.FAVORITE,
            review: 'Warm character study.'
        }),
        movie('Oppenheimer', 2023, {
            badge: BADGE.TOP,
            review: 'Epic and intimate.'
        }),
        movie('Spider-Man: Across the Spider-Verse', 2023, {
            badge: BADGE.FAVORITE,
            review: 'Visual and narrative triumph.'
        })
    ],
    essays: [
        essay('How to Do What You Love', 'Paul Graham', 'https://www.paulgraham.com/love.html', { badge: BADGE.CORE }),
        essay("What You Can't Say", 'Paul Graham', 'https://www.paulgraham.com/say.html', { badge: BADGE.CORE }),
        essay('The Internet is a Portal', 'Drew Coffman', 'https://paragraph.com/@drewcoffman-2/the-internet-is-a-portal', { badge: BADGE.CORE }),
        essay('the ghosts of internets past', 'FWB', 'https://v1.fwb.help/editorial/lessons-from-the-rise-and-fall-of-bulletin-board-systems-web3')
    ]
};

// Backward-compatible globals consumed by main.js.
const books = shelfData.books;
const movies = shelfData.movies;
const essays = shelfData.essays;

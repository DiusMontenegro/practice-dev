const data = [
    {
        id: 1,
        title: 'The Lord of the Rings',
        publicationDate: '1954-07-29',
        author: 'J. R. R. Tolkien',
        genres: [
            'fantasy',
            'high-fantasy',
            'adventure',
            'fiction',
            'novels',
            'literature',
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: 'El señor de los anillos',
            chinese: '魔戒',
            french: 'Le Seigneur des anneaux',
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: 'The Cyberiad',
        publicationDate: '1965-01-01',
        author: 'Stanislaw Lem',
        genres: [
            'science fiction',
            'humor',
            'speculative fiction',
            'short stories',
            'fantasy',
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: 'Dune',
        publicationDate: '1965-01-01',
        author: 'Frank Herbert',
        genres: ['science fiction', 'novel', 'adventure'],
        hasMovieAdaptation: false,
        pages: 658,
        translations: {
            spanish: '',
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: '1997-06-26',
        author: 'J. K. Rowling',
        genres: ['fantasy', 'adventure'],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: 'Harry Potter y la piedra filosofal',
            korean: '해리 포터와 마법사의 돌',
            bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
            portuguese: 'Harry Potter e a Pedra Filosofal',
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: 'A Game of Thrones',
        publicationDate: '1996-08-01',
        author: 'George R. R. Martin',
        genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: '왕좌의 게임',
            polish: 'Gra o tron',
            portuguese: 'A Guerra dos Tronos',
            spanish: 'Juego de tronos',
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}
/*
const book = getBook(3);

const { title, author, id, hasMovieAdaptation, publicationDate, genres, date } =
    book;

const [primaryGenre, secondaryGenre, ...rest] = genres;

const newArr = ['love', ...genres];

const bookUpdate = { ...book, pages: 2, isRequired: true };

const getYear = (str) => str.split('-')[0];

bookUpdate;

const newBook = `A book about ${title} written by ${author} with ${
    bookUpdate.pages
} pages that was published in ${getYear(publicationDate)}. The movie ${
    hasMovieAdaptation ? 'has' : 'no'
} movie adaptation.`;
newBook;

const equalTo2 = bookUpdate.pages === 2 ? true : false;
console.log(`is the book equal to 2? ${equalTo2}`);

console.log('Dius' && 'Cool'); // true first
console.log('Dius' || 'Cool');

console.log('' && 'Cool'); // false first
console.log('' || 'Cool');

const spanishTranslation = book.translations.spanish || 'No translations';

//nullish coalessing ?? returns true if empty string and 0; not udefined or null
// const spanishTranslations = book.reviews.librarything.reviewsCount ?? 'No';

spanishTranslation;
// spanishTranslations;

// optional chaining if the property exists and coalesing if the value is 0 or no value.
const totalReviews = (book) => {
    const goodreads = book.reviews?.goodreads?.reviewsCount;
    const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
    librarything;
    return goodreads + librarything;
};

console.log(totalReviews(book)); */

/*
// optional chaining if the property exists and coalesing if the value is 0 or no value.
const totalReviews = (book) => {
    const goodreads = book.reviews?.goodreads?.reviewsCount;
    const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
    return goodreads + librarything;
};
// map: reurns a new array, performs any operations in every items from the original array.
const books = getBooks();

const titles = books.map((book) => book.title);

const essentialData = books.map((book) => ({
    title: book.title,
    author: book.author,
    reviews: totalReviews(book),
}));

//filter: returns a filtered array, based on the condition.
const longBooks = books
    .filter((book) => book.pages > 500)
    .filter((book) => book.hasMovieAdaptation);

const adventureBooks = books
    .filter((book) => book.genres.includes('adventure'))
    .map((book) => ({ title: book.title }));

//reduce: reduce the array into one value.
const totalBookPages = books.reduce((acc, book) => acc + book.pages, 0);

//sort: returns a sorted array ex: descending (b - a) or ascending (a - b); orig array will be sorted as well. use slice to get a copy. should be numeric.
const arr = [4, 5, 2, 9, 7];
const sortedArr = arr.slice().sort((a, b) => a - b);

const sortedBooksPerPage = books
    .slice()
    .sort((currentBook, nextBook) => nextBook.pages - currentBook.pages)
    .map((book) => ({
        title: book.title,
        pages: book.pages,
    }));

//Add a value in the array w/out changing the original array.
const newBook = {
    id: 6,
    title: 'Panhard and Levassor',
    author: 'Dre',
};

const addedBooks = [...books, newBook];

//Delete a value in the array w/out changing the original array.
const deletedBook = addedBooks.filter((book) => book.id !== 4);

//Update a value in the array w/out changing the original array.
const updateBook = deletedBook.map((book) =>
    book.id === 3 ? { ...book, title: 'Dius' } : book
);
updateBook;
*/

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => res.json())
//     .then((data) => console.log(data));

async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    console.log(data);
}

getTodos();
console.log('Dius');

let pageNumber = 0;

// content for pages

const pages = ['brooklyn design', 'kanye west', 'october', 'download my pdf'];

//pick the relevent tags
const nextTag = document.querySelector('footer img.next');
const previousTag = document.querySelector('footer img.prev');
const outputTag = document.querySelector('h2');

// make a next function to increase page number
const next = function () {
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 1;
  }

  updateSection();
};

const previous = function () {
  pageNumber = pageNumber - 1;

  if (pageNumber < pages.length - 1) {
    pageNumber = 3;
  }

  updateSection();
};

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber];
};

nextTag.addEventListener('click', function () {
  next();
});

previousTag.addEventListener('click', function () {
  previous();
});

let pageNumber = 0;

// content for pages

const pages = [
  {
    copy: 'A Brooklyn-based graphic designer',
    background: '#edc7a9',
    circle: '#3e78ed',
  },
  {
    copy: 'Kanye Wests biggest fan',
    background: '#a1fffe',
    circle: '#e34a47',
  },
  {
    copy: 'Looking for a job',
    background: '#d3c7f3',
    circle: '#f7fe00',
  },
  {
    copy: `letting you <a href="pdf.pdf">download her PDF</a>`,
    background: '#faffb8',
    circle: '#b472e6',
  },
];

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
  outputTag.innerHTML = pages[pageNumber].copy;
};

nextTag.addEventListener('click', function () {
  next();
});

previousTag.addEventListener('click', function () {
  previous();
});

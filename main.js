let pageNumber = 0;

const nextTag = document.querySelector('footer img.next');
const outputTag = document.querySelector('h2');

nextTag.addEventListener('click', function () {
  pageNumber = pageNumber + 1;

  outputTag.innerHTML = pageNumber;
});

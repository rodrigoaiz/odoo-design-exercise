document.addEventListener('DOMContentLoaded', function () {
  const starRatings = document.querySelectorAll('.star-rating');

  starRatings.forEach(starRating => {
    const stars = starRating.querySelectorAll('.star');
    let isClicked = false;

    stars.forEach(star => {
      star.addEventListener('click', function () {
        if (!isClicked) {
          const rating = star.dataset.rating;
          setRating(stars, rating);
          isClicked = true;
        }
      });

      star.addEventListener('mouseover', function () {
        if (!isClicked) {
          const rating = star.dataset.rating;
          highlightStars(stars, rating);
        }
      });

      star.addEventListener('mouseout', function () {
        if (!isClicked) {
          resetStars(stars);
        }
      });
    });
  });

  function setRating(stars, rating) {
    stars.forEach(star => {
      if (star.dataset.rating <= rating) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  }

  function highlightStars(stars, rating) {
    resetStars(stars);
    stars.forEach(star => {
      if (star.dataset.rating <= rating) {
        star.classList.add('active');
      }
    });
  }

  function resetStars(stars) {
    stars.forEach(star => {
      star.classList.remove('active');
    });
  }
});

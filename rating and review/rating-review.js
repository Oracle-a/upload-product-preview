
  const stars = document.querySelectorAll('.star');
  const nameInput = document.getElementById('reviewer-name');
  const commentInput = document.getElementById('review-comment');
  const submitButton = document.getElementById('submit-review');
  const reviewsContainer = document.getElementById('reviews-container');

  let currentRating = 0;

  // Highlight stars
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      currentRating = index + 1;
      stars.forEach((s, i) => {
        s.style.color = i < currentRating ? '#facc15' : '#d1d5db'; // yellow or gray
      });
    });
  });

  // Submit review
  submitButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (!name || !comment || currentRating === 0) {
      alert('Please provide your name, a rating, and a comment.');
      return;
    }

    const reviewHTML = `
      <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
        <div class="flex justify-between items-center mb-1">
          <span class="font-semibold text-gray-800">${name}</span>
          <div class="text-yellow-500 text-sm">
            ${'★'.repeat(currentRating)}${'☆'.repeat(5 - currentRating)}
          </div>
        </div>
        <p class="text-gray-700 text-sm">${comment}</p>
      </div>
    `;

    reviewsContainer.insertAdjacentHTML('afterbegin', reviewHTML);

    // Clear form
    nameInput.value = '';
    commentInput.value = '';
    currentRating = 0;
    stars.forEach(star => star.style.color = '#d1d5db');
  });


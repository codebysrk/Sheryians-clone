document.addEventListener('DOMContentLoaded', function () {
  // --- 1. Generate Course Cards ---
  const cardContainer = document.getElementById('card-container');
  const tagClasses = {
    'live batch': 'tag-live-batch',
    recorded: 'tag-recorded',
    'new-batch': 'tag-new-batch',
    'weekend batch': 'tag-weekend-batch',
    hinglish: 'tag-hinglish',
    english: 'tag-english',
  };

  coursesData.forEach((course) => {
    const card = document.createElement('div');
    card.className = 'scroll-item swiper-slide';

    // --- HTML for Tags ---
    const tagsHtml = course.tags
      .map(
        (tag) =>
          `<p class="tag tag-${tag.replace(' ', '-')}">${tag.toUpperCase()}</p>`
      )
      .join('');

    // --- HTML for Offer Text ---
    const offerHtml = course.offerText
      ? `<div class="left">
           <span class="highlight-text">${course.offerText}</span>
         </div>`
      : '';

    // --- HTML for GST Tag ---
    const gstHtml = course.gstApplicable
      ? `<span class="gst">(+GST)</span>`
      : '';

    // --- HTML for Status Badge on Image ---
    const statusHtml = course.status
      ? `<div class="status-badge">${course.status}</div>`
      : '';

    card.innerHTML = `
      <div class="card-header">
        ${statusHtml}
        <img src="${course.imageUrl}" alt="${course.title}" />
      </div>
      <div class="card-body">
        <div class="card-content-wrapper">
          <h2 class="card-title">${course.title}</h2>
          <div class="card-body-tags">
            ${tagsHtml}
          </div>
        </div>
        <div class="card-body-bottom">
          ${offerHtml}
          <div class="right">
            <div class="div-left">
              <p class="price">₹ ${course.price}</p>
              ${gstHtml}
              <del>₹ ${course.originalPrice}</del>
            </div>
            <div class="discount">${course.discount}</div>
          </div>
        </div>
        <button class="view-course-btn">View Details</button>
      </div>
    `;
    cardContainer.appendChild(card);
  });

  // --- 2. Initialize Swiper for Mobile ---
  let courseSwiper;
  const mediaQuery = window.matchMedia('(max-width: 767px)');

  function handleSwiper(e) {
    if (e.matches) {
      if (!courseSwiper) {
        courseSwiper = new Swiper('.course-swiper', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          centeredSlides: true,
          grabCursor: true,
        });
      }
    } else {
      if (courseSwiper) {
        courseSwiper.destroy(true, true);
        courseSwiper = undefined;
      }
    }
  }

  handleSwiper(mediaQuery);
  mediaQuery.addEventListener('change', handleSwiper);
});
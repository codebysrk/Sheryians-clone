document.addEventListener('DOMContentLoaded', function () {
  // --- Lenis Smooth Scroll ---
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // --- Hamburger Menu ---
  const hamburger = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.menu a');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

  // --- Generate Course Cards ---
  const cardContainer = document.getElementById('card-container');
  if (cardContainer) {
    coursesData.forEach((course) => {
      const card = document.createElement('div');
      card.className = 'scroll-item swiper-slide';

      const tagsHtml = course.tags
        .map(
          (tag) =>
            `<p class="tag tag-${tag.replace(' ', '-')}">${tag.toUpperCase()}</p>`
        )
        .join('');

      const offerHtml = course.offerText
        ? `<div class="left">
             <span class="highlight-text">${course.offerText}</span>
           </div>`
        : '';

      const gstHtml = course.gstApplicable
        ? `<span class="gst">(+GST)</span>`
        : '';

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
            <div class="card-body-tags">${tagsHtml}</div>
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
  }

  // --- Initialize Swiper for Mobile ---
  let courseSwiper;
  const mediaQuery = window.matchMedia('(max-width: 768px)');

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
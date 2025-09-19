document.addEventListener('DOMContentLoaded', function () {
  /**
   * SECTION 1: DYNAMIC COURSE CARD GENERATION
   * -----------------------------------------
   * This section reads course data and creates the corresponding HTML cards.
   */
  const cardContainer = document.getElementById('card-container');

  // Loop through each course object from the coursesData array (in data.js)
  coursesData.forEach((course) => {
    // Create the main container div for the card
    const card = document.createElement('div');
    card.className = 'scroll-item swiper-slide';

    // --- Prepare dynamic HTML parts ---

    // 1. Generate HTML for all the tags (e.g., LIVE BATCH, HINGLISH)
    const tagsHtml = course.tags
      .map(
        (tag) =>
          `<p class="tag tag-${tag.replace(' ', '-')}">${tag.toUpperCase()}</p>`
      )
      .join('');

    // 2. Generate HTML for the offer text, if it exists
    const offerHtml = course.offerText
      ? `<div class="left">
           <span class="highlight-text">${course.offerText}</span>
         </div>`
      : '';

    // 3. Generate HTML for the (+GST) text, if applicable
    const gstHtml = course.gstApplicable
      ? `<span class="gst">(+GST)</span>`
      : '';

    // 4. Generate HTML for the status badge on the image (e.g., JOB READY), if it exists
    const statusHtml = course.status
      ? `<div class="status-badge">${course.status}</div>`
      : '';

    // --- Assemble the final card HTML using template literals ---
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

    // Add the newly created card to the page
    cardContainer.appendChild(card);
  });

  /**
   * SECTION 2: MOBILE SLIDER (SWIPER.JS) INITIALIZATION
   * --------------------------------------------------
   * This section initializes a touch slider for screens narrower than 768px
   * and destroys it on wider screens to save resources.
   */
  let courseSwiper;
  const mediaQuery = window.matchMedia('(max-width: 767px)');

  function handleSwiper(event) {
    // If the media query matches (i.e., screen is mobile-sized)
    if (event.matches) {
      // And if the Swiper instance doesn't already exist, create it.
      if (!courseSwiper) {
        courseSwiper = new Swiper('.course-swiper', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          centeredSlides: true,
          grabCursor: true,
        });
      }
    } else {
      // If the screen is not mobile-sized and the Swiper instance exists, destroy it.
      if (courseSwiper) {
        courseSwiper.destroy(true, true);
        courseSwiper = undefined; // Clean up the variable
      }
    }
  }

  // Run the function once on initial page load
  handleSwiper(mediaQuery);

  // Add a listener to run the function whenever the screen size changes
  mediaQuery.addEventListener('change', handleSwiper);
});

/**
 * SECTION 3: ANIMATED MOBILE MENU
 * --------------------------------
 * This section handles the open/close logic for the slide-in menu.
 */
const hamburgerIcon = document.querySelector('.hamburger-menu .iconoir-menu');
const mobileMenu = document.querySelector('.menu');
const closeMenuButton = document.querySelector('.fa-xmark');
const menuLinks = document.querySelectorAll('.menu ul li a');

// Function to open the menu
const openMenu = () => {
  mobileMenu.classList.add('menu-active');
};

// Function to close the menu
const closeMenu = () => {
  mobileMenu.classList.remove('menu-active');
};

// Event listeners
hamburgerIcon.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);

// Close the menu when any of the links inside are clicked
menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

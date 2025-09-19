// 2. JavaScript Data: Your array of course objects
const courseData = [
  {
    id: 1,
    title: 'Full Stack Web Development with MERN',
    tags: ['Live Batch', 'Hinglish'],
    price: 7999,
    originalPrice: 15000,
    discount: 47,
    imageUrl: '/assets/img/cohort.webp',
    url: '/course/full-stack-mern',
  },
  {
    id: 2,
    title: 'DSA for Placements: From Zero to Hero',
    tags: ['Recorded', 'English'],
    price: 4500,
    originalPrice: 9000,
    discount: 50,
    imageUrl: '/assets/img/card2.webp',
    url: '/course/dsa-for-placements',
  },
  {
    id: 3,
    title: 'Complete Python & Django Backend Course',
    tags: ['Live Batch', 'Hinglish'],
    price: 6600,
    originalPrice: 12000,
    discount: 45,
    imageUrl: '/assets/img/card3.webp',
    url: '/course/python-django-backend',
  },
  {
    id: 4,
    title: 'Advanced DevOps with Kubernetes & Docker',
    tags: ['New Batch', 'English'],
    price: 9999,
    originalPrice: 18000,
    discount: 44,
    imageUrl: '/assets/img/card4.webp',
    url: '/course/advanced-devops',
  },
  {
    id: 5,
    title: 'Introduction to Machine Learning with Python',
    tags: ['Recorded', 'Hinglish'],
    price: 5500,
    originalPrice: 10000,
    discount: 45,
    imageUrl: '/assets/img/card5.webp',
    url: '/course/intro-to-ml',
  },
  {
    id: 6,
    title: 'React Native: Build Mobile Apps for iOS & Android',
    tags: ['Live Batch', 'English'],
    price: 7200,
    originalPrice: 13500,
    discount: 47,
    imageUrl: '/assets/img/card6.webp',
    url: '/course/react-native-mobile-apps',
  },
  {
    id: 7,
    title: 'System Design for Big Tech Interviews',
    tags: ['Weekend Batch', 'English'],
    price: 8500,
    originalPrice: 15000,
    discount: 43,
    imageUrl: '/assets/img/card7.webp',
    url: '/course/system-design-interviews',
  },
  // {
  //   id: 8,
  //   title: 'Data Analytics with SQL and PowerBI',
  //   tags: ['Recorded', 'Hinglish'],
  //   price: 3999,
  //   originalPrice: 8000,
  //   discount: 50,
  //   imageUrl: 'https://i.imgur.com/K5a2SAi.png',
  // },
  // {
  //   id: 9,
  //   title: 'Java with Spring Boot: The Complete Guide',
  //   tags: ['Live Batch', 'Hinglish'],
  //   price: 7500,
  //   originalPrice: 14000,
  //   discount: 46,
  //   imageUrl: 'https://i.imgur.com/K5a2SAi.png',
  // },
  // {
  //   id: 10,
  //   title: 'Cybersecurity Essentials & Ethical Hacking',
  //   tags: ['New Batch', 'English'],
  //   price: 9000,
  //   originalPrice: 16500,
  //   discount: 45,
  //   imageUrl: 'https://i.imgur.com/K5a2SAi.png',
  // },
];

// 3. JavaScript Logic: Function to generate and display cards
function displayCourses() {
  const container = document.getElementById('card-container');
  let allCardsHTML = '';

  // Loop through each course in the data array
  courseData.forEach((course) => {
    // Function to generate HTML for tags
    const tagsHTML = course.tags
      .map((tag) => {
        const tagClass = 'tag-' + tag.toLowerCase().replace(' ', '-');
        return `<span class="tag ${tagClass}">${tag}</span>`;
      })
      .join('');

    // Create the HTML for a single card
    const cardHTML = `
                    <div class="scroll-item">
                        <a href="${course.url}" class="card-link"></a>
                        <div class="card-header">
                            <img src="${course.imageUrl}" alt="${course.title}" />
                        </div>
                        <div class="card-body">
                            <div class="card-content-wrapper">
                                <h2>${course.title}</h2>
                                <div class="card-body-tags">
                                    ${tagsHTML}
                                </div>
                            </div>
                            <div class="card-body-bottom">
                                <div class="left">
                                    <span>Limited Time Discount</span>
                                </div>
                                <div class="right">
                                    <div class="div-left">
                                        <p class="price">₹${course.price}</p>
                                        <strong class="gst">(+GST)</strong>
                                        <del>₹${course.originalPrice}</del>
                                    </div>
                                    <div class="div-right">
                                        <span class="discount">${course.discount}% OFF</span>
                                    </div>
                                </div>
                            </div>
                            <a href="${course.url}" class="view-course-btn" style="position: relative; z-index: 2;">View Details</a>
                        </div>
                    </div>
                `;
    // Add the card's HTML to the main string
    allCardsHTML += cardHTML;
  });

  // Set the container's HTML to the generated cards
  container.innerHTML = allCardsHTML;
}

// Call the function when the page loads
window.onload = displayCourses;

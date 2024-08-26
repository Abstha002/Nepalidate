const todayBsDateEl = document.getElementById('today-bs-date');
const currentBsDatetimeEl = document.getElementById('current-bs-datetime');
const todayEnglishDateEl = document.getElementById('today-english-date');

// Function to fetch today's Bikram Sambat date
function fetchTodayBsDate() {
  fetch('https://nepali-datetime.amitgaru.me/date')
    .then(response => response.json())
    .then(data => {
      todayBsDateEl.textContent = `Today's Bikram Sambat Date: ${data.data}`;
    })
    .catch(error => {
      todayBsDateEl.textContent = 'Error fetching today\'s date.';
      console.error('Error fetching today\'s date:', error);
    });
}

// Function to fetch current date and time in Bikram Sambat
function fetchCurrentBsDatetime() {
  fetch('https://nepali-datetime.amitgaru.me/datetime')
    .then(response => response.json())
    .then(data => {
      currentBsDatetimeEl.textContent = `Current Bikram Sambat Date and Time: ${data.data}`;
    })
    .catch(error => {
      currentBsDatetimeEl.textContent = 'Error fetching date and time.';
      console.error('Error fetching date and time:', error);
    });
}

// Function to get today's English date
function getTodayEnglishDate() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  };
  return now.toLocaleDateString('en-US', options);
}

// Function to update the English date on the webpage
function updateEnglishDate() {
  todayEnglishDateEl.textContent = `Today's English Date: ${getTodayEnglishDate()}`;
}

// Initial fetch to set today's date and time immediately
fetchTodayBsDate();
fetchCurrentBsDatetime();
updateEnglishDate();

// Update the current Bikram Sambat date and time every second
setInterval(fetchCurrentBsDatetime, 1000);

// Optional: Update today's Bikram Sambat date once a day (24 hours)
setInterval(fetchTodayBsDate, 24 * 60 * 60 * 1000);

// Optional: Update today's English date once a day (24 hours)
setInterval(updateEnglishDate, 24 * 60 * 60 * 1000);


const todayEnglishDateEl = document.getElementById('todayenglish-date');

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
updateEnglishDate();

// Optional: Update today's English date once a day (24 hours)
setInterval(updateEnglishDate, 24 * 60 * 60 * 1000);


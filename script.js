// Fade in img on load
const img = document.querySelector('#background');
img.addEventListener('load', () => {
  img.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], 500);
  img.style.opacity = 1;
});

// Set img source
fetch('images.json')
  .then(response => response.json())
  .then(data => {
    const index = Math.floor(Math.random() * data.length);
    const id = data[index];
    img.src = `https://www.gstatic.com/prettyearth/assets/full/${id}.jpg`;
    document.querySelector('#download').href = img.src;
    document.querySelector('#source').href = 'https://g.co/ev/' + id;
  })
  .catch(error => console.error(error));

// Time
const time = document.querySelector('#time');
function updateTime() {
  time.textContent = (new Date()).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}
updateTime();
setInterval(updateTime, 1000);

// Date
const date = document.querySelector('#date');
function updateDate() {
  const d = new Date();
  const weekday = d.toLocaleDateString([], {weekday: 'short'}).toUpperCase();
  const day = d.toLocaleDateString([], {day: '2-digit'});
  const month = d.toLocaleDateString([], {month: 'short'}).toUpperCase();
  date.textContent = weekday + ' ' + day + ' ' + month;
}
updateDate();
setInterval(updateDate, 1000);

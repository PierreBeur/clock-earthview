fetch('images.json')
  .then(response => response.json())
  .then(data => {
    const index = Math.floor(Math.random() * data.length);
    const id = data[index];
    document.querySelector('img').src = `https://www.gstatic.com/prettyearth/assets/full/${id}.jpg`
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

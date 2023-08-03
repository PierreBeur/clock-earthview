fetch('images.json')
  .then(response => response.json())
  .then(data => {
    const index = Math.floor(Math.random() * data.length);
    const id = data[index];
    document.querySelector('img').src = `https://www.gstatic.com/prettyearth/assets/full/${id}.jpg`
  })
  .catch(error => console.error(error));
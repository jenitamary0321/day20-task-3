document.getElementById('changeBearButton').addEventListener('click', function() {
  const bearImage = document.getElementById('bearImage');
  const currentSrc = bearImage.src;
  
  // Array of Placebear image URLs
  const bearImages = [
      "https://placebear.com/600/400",
      "https://placebear.com/600/401",
      "https://placebear.com/600/402",
      "https://placebear.com/600/403",
      "https://placebear.com/600/404"
  ];

  // Get the index of the current image
  let currentIndex = bearImages.indexOf(currentSrc);
  
  // Calculate the next index
  let nextIndex = (currentIndex + 1) % bearImages.length;
  
  // Set the next image
  bearImage.src = bearImages[nextIndex];
});

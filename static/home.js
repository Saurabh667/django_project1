console.log("ayush")

  const images = [
      "media/user_data/OIP_1.webp",
      "media/user_data/OIP_2.webp",
      "media/user_data/OIP.webp",
      "media/user_data/Op3.webp",
      
    ];

    let index = 0;
    const slide = document.getElementById("slide");

    // Function to change image
    function changeImage() {
      slide.src = images[index];
      index = (index + 1) % images.length;  // loop back to start
    }

    // First image load
    changeImage();
    

    // Change every 3 seconds
    setInterval(changeImage, 3000);
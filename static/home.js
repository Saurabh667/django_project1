console.log("ayush")

  const images = [
      "media/user_data/barua.jpg",
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
    

    // let like_btn = document.querySelector(".like-btn")
    // const likeIcon = document.querySelector(".like .like-icon");
    // like_btn.addEventListener("click",()=>{

    // })

// function toggleLike(btn) {
//     const icon = btn.querySelector(".like-icon path");

//     // Check current color
//     if (icon.getAttribute("fill") === "#fc4e4e") {
//       icon.setAttribute("fill", "none"); // unliked (empty heart)
//     } else {
//       icon.setAttribute("fill", "#fc4e4e"); // liked (red heart)

//       // Small "pop" animation effect
//       btn.querySelector(".like-icon").animate(
//         [
//           { transform: "scale(1)" },
//           { transform: "scale(1.2)" },
//           { transform: "scale(1)" }
//         ],
//         {
//           duration: 200,
//           easing: "ease-out"
//         }
//       );
//     }
//   }
function toggleLike(btn) {
    const icon = btn.querySelector(".like-icon path");
    const placeId = btn.getAttribute("data-id");
  // console.log(placeId)
    // Get current liked items from localStorage
    let likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    // console.log(likedItems)

    if (likedItems.includes(placeId)) {
      // Unlike
      likedItems = likedItems.filter(id => id !== placeId);
      icon.setAttribute("fill", "none");
    } else {
      // Like
      likedItems.push(placeId);
      icon.setAttribute("fill", "#fc4e4e");

      // Small animation
      btn.querySelector(".like-icon").animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.2)" }, { transform: "scale(1)" }],
        { duration: 200, easing: "ease-out" }
      );
    }

    // Save updated state
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }

  // Restore liked state on page load
  window.onload = function () {
    let likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    likedItems.forEach(id => {
      const btn = document.querySelector(`.like-button[data-id='${id}']`);
      if (btn) {
        btn.querySelector(".like-icon path").setAttribute("fill", "#fc4e4e");
      }
    });
  };
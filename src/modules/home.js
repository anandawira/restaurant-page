function loadHome() {
  const contentDOM = document.getElementById("content");

  const restaurantImage = document.createElement("img");
  restaurantImage.setAttribute(
    "src",
    "https://pesona-batam.com/galleryculiner/1554795512.jpg"
  );
  restaurantImage.setAttribute("alt", "Love Seafood");

  const restaurantNameDOM = document.createElement("h1");
  restaurantNameDOM.innerText = "Love Seafood";

  const restaurantDescDOM = document.createElement("p");
  restaurantDescDOM.innerText = `Love Seafood is one of the most favorite restaurant in Batam. It is famous for serving fresh and delicious seafoods for affordable price.`;

  contentDOM.appendChild(restaurantImage);
  contentDOM.appendChild(restaurantNameDOM);
  contentDOM.appendChild(restaurantDescDOM);
}

export default loadHome;

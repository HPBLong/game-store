const product = [
  {
    Productname: "Call of Duty: Black Ops",
    Price: 1363500,
    Img: "../images/codbo.webp",
  },
  {
    Productname: "Call of Duty: Infinite Warfare",
    Price: 1363500,
    Img: "../images/codiw.jpg",
  },
  {
    Productname: "Call of Duty: Modern Warfare 3",
    Price: 1799000,
    Img: "../images/codmw3.jpg",
  },
  {
    Productname: "Call of Duty: Warzone",
    Price: "Free",
    Img: "../images/codw.avif",
  },
];

const mainproduct = {
  Productname: "Call of Duty: Modern Warfare 3",
  Price: 1799000,
  Img: "../images/codmw3.jpg",
  Description:
    "In the direct sequel to the record-breaking Call of Duty®: Modern Warfare® II, Captain Price and Task Force 141 face off against the ultimate threat.",
};

const productsItem = document.querySelector(".row");
const mainproductsItem = document.querySelector(".wrapper");

mainproductsItem.innerHTML += `<div class="wrapper">
<img class="product-img-main" src="${mainproduct.Img}" alt="" />
<div class="right">
  <div class="name-rate">
    <h3>${mainproduct.Productname}</h3>
    <div class="rate-product">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    </div>
  </div>
  
  <div class="desc">
    <button class="btn btn-clr" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Description
    </button>
  </p>
  <div class="collapse" id="collapseExample">
    <div class="card card-body"> <i>${mainproduct.Description}</i>
      
    </div>
  </div>
  </div>
  <div class="storage">
    <span class="product-price pricing">${mainproduct.Price}</span>
  </div>
  <div class="purchase">
    <button type="button" class="btn btn-outline-success">Buy</button>
    <button type="button" class="btn btn-outline-success cart">
      Add to cart
      </button>
  </div>
</div>
</div>`;

for (let i = 0; i < product.length; i++) {
  productsItem.innerHTML += `<div class="product-wrapper col-3">
  <div class="product">
    <a href="./product/product.html">
      <img src="${product[i].Img}" alt="" class="product-img" />
    </a>
    <a href="./product/product.html" class="product-name">
      <h4 class="product-name">${product[i].Productname}</h4>
    </a>
    <div class="rate">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    </div>

    <span class="product-price"><p class="price">${product[i].Price}</p></span>
  </div>
</div>
    `;
}

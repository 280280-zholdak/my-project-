let cart = [];

function addToCart() {
  const product = {
    name: "iPhone 17 Pro Max",
    price: 59999
  };

  cart.push(product);
  updateCartCount();
  alert("Produkt dodany do koszyka");
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  const itemsContainer = document.getElementById("cart-items");
  itemsContainer.innerHTML = "";

  if (cart.length === 0) {
    itemsContainer.innerHTML = "<li>Кошик порожній</li>";
  } else {
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = `${item.name} — ₴${item.price.toLocaleString()}`;
      itemsContainer.appendChild(li);
    });
  }

  modal.style.display = "block";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

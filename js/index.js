// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerText;
  
  const quantity = product.querySelector('.quantity input').value;

  product.querySelector(".subtotal span").innerText = Number(price) * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const moreProducts = document.querySelectorAll('.product');
  moreProducts.forEach(el => updateSubtotal(el))
  
  // ITERATION 3
  //... your code goes here
  const total = document.querySelectorAll('.subtotal span');
  let sum = 0;
  total.forEach(item => sum += Number(item.innerText));
  document.querySelector("#total-value span").innerText = sum
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  aBorrar = target.parentNode.parentNode
  aBorrar.parentNode.removeChild(aBorrar)
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const datos = document.querySelectorAll('.create-product input');
  const tbody = document.querySelector('#cart tbody')
  
  row = tbody.insertRow(-1);
  row.classList.add("product")
  let prod = `
          <td class="name">
            <span>${datos[0].value}</span>
          </td>
          <td class="price">$<span>${datos[1].value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td> `
  console.log(tbody.innerHTML)
  row.innerHTML += prod;
  document.querySelectorAll('.btn-remove').forEach(item => item.addEventListener('click', removeProduct));
  datos.forEach(item => item.value = "")

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(item => item.addEventListener('click', removeProduct));

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});

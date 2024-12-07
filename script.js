const btnCart = document.querySelector(".container-cart-icon")
const containerCartProducts = document.querySelector(".container-cart-products")
btnCart.addEventListener("click", () => {
 containerCartProducts.classList.toggle("hidden-cart")
})
const cartInfo = document.querySelector(".cart-product")
const rowProduct = document.querySelector(".row-product")

const productsList = document.querySelector(".container-items")

let allProducts = []

const valorTotal = document.querySelector(`.total-pagar`)

const countProducts = document.querySelector(`#contador-productos`)


productsList.addEventListener ("click", e => {

	if(e.target.classList.contains("btn-add-cart")){
		const product = e.target.parentElement

		const infoProduct = {
			quantity: 1,
			tittle: product.querySelector("h2").textContent,
			price: product.querySelector("p").textContent,
		}
		const exits = allProducts.some (product =>product.tittle === infoProduct.tittle)
		if (exits){
			const products = allProducts.map(product => {
				if(product.tittle === infoProduct.tittle){
					product.quantity++;
					return product
				} else{
					return product
				}
			})
			allProducts = [...products]
		} else{
		allProducts = [...allProducts, infoProduct]
	    }
	    showHTML()
	}
})

rowProduct.addEventListener (`click`, (e) => {
 if(e.target.classList.contains(`icon-close`)){
	const product = e.target.parentElement
	const tittle = product.querySelector(`p`).textContent
    
	allProducts = allProducts.filter(
		product => product.tittle !== tittle 
	);
	console.log (allProducts)
    showHTML()
 }
})


const showHTML = () =>{
	if (!allProducts.length){
		containerCartProducts.innerHTML=`
        <p class="cart-empty"> El carrito está vacío </p>
		`
	}

    rowProduct.innerHTML = ``;
	
	let total= 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement("div")
		containerProduct.classList.add("cart-product")
		
		containerProduct.innerHTML =  `
		<div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.tittle}</p>
            <span class="precio-producto-carrito">${product.price}</span>
        </div>
        <svg 
		   xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke-width="1.5" 
           stroke="currentColor" 
           class="icon-close"
        >
           <path 
               stroke-linecap="round" 
			   stroke-linejoin="round" 
               d="M6 18 18 6M6 6l12 12" 
			/>
       </svg>
		`
	 rowProduct.append(containerProduct)
     total = total + parseInt (product.quantity * product.price.slice(1));
       totalOfProducts = totalOfProducts + product.quantity;

	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;

}
 bars_search = document.getElementById("ctn-bars-search");
 cover_ctn_search = document.getElementById("cover-ctn-search");
 inputSearch = document.getElementById("inputSearch");
 box_search= document.getElementById("box-search");

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno)

function buscador_interno(){
	filter= inputSearch.value.toUpperCase();
	li = box_search.getElementsByTagName("li");

	for (i = 0; i < li.length; i++){

		a = li[i].getElementsByTagName("a")[0];
		textValue = a.textContent || a.innerText;

		if(textValue.toUpperCase().indexOf(filter) > -1){

			li[i].style.display = "";
			box_search.style.display = "block";

			if(inputSearch.value === ""){
				box_search.style.display = "none"
			}

		} else{
			li[i].style.display = "none";
		}
	}



}
import './App.css';
import {useState} from 'react';

function App() {

  let [cart,setCart] = useState(0);
  let [sp1Selected,setSp1Selected] =useState(false);
  let [sp2Selected,setSp2Selected] =useState(false);
  let [sal1Selected,setSal1Selected] =useState(false);
  let [sal2Selected,setSal2Selected] =useState(false);
  let [pop1Selected,setPop1Selected] =useState(false);
  let [pop2Selected,setPop2Selected] =useState(false);
  let [total,setTotal] = useState(0);
  let [cartItems, setItemsCart] = useState([]);

  // To check whether item is selected or not
  function condCheck(item){
    if(item.name==="special item 1")
      setSp1Selected(prev=>!prev);
    else if(item.name==="special item 2")
      setSp2Selected(prev=>!prev);
    else if(item.name==="sale item 1")
      setSal1Selected(prev=>!prev);
    else if(item.name==="sale item 2")
      setSal2Selected(prev=>!prev);
    else if(item.name==="popular item 1")
      setPop1Selected(prev=>!prev);
    else if(item.name==="popular item 2")
      setPop2Selected(prev=>!prev);
  }

  // to add items to cart
  function handleAddCart(item){
    setCart(cart+1);    
    // setSiSelected(prev=>!prev);
    condCheck(item);
    setTotal(prev=>prev+item.price);
    cartItems.push(item);
    console.log(cartItems);
  }

  // to remove items from cart
  function selectedCart(item){    
    setCart(prev=>prev- 1);
    // setSiSelected(prev=>!prev);
    condCheck(item);
    if(total>=item.price)
    {
      setTotal(prev=>{
        return prev-item.price;
      });
    }
   
  }
  
  return (
    <>
        {/* Navigation*/}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
                        </button>
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Total Price
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{total}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        {/* Header*/}
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        {/* Section*/}
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Product image*/}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details*/}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name*/}
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    {/* Product price*/}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Sale badge*/}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/* Product image*/}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details*/}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name*/}
                                    <h5 class="fw-bolder">Special Item 1</h5>
                                    {/* Product reviews*/}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* Product price*/}
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $15.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {/* <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div> */}
                                <div class="text-center">
                                  {
                                    sp1Selected?
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>selectedCart({name:"special item 1",price:15})}>Remove from cart</button> :
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>handleAddCart({name:"special item 1",price:15})}>Add to cart</button>
                                  }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Sale badge*/}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/* Product image*/}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details*/}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name*/}
                                    <h5 class="fw-bolder">Sale Item 1</h5>
                                    {/* Product price*/}
                                    <span class="text-muted text-decoration-line-through">$50.00</span>
                                    $21.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {/* <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div> */}
                                <div class="text-center">
                                  {
                                    sal1Selected?
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>selectedCart({name:"sale item 1",price:21})}>Remove from cart</button> :
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>handleAddCart({name:"sale item 1",price:21})}>Add to cart</button>
                                  }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Product image*/}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details*/}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name*/}
                                    <h5 class="fw-bolder">Popular Item 1</h5>
                                    {/* Product reviews*/}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* Product price*/}
                                    $30.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {/* <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div> */}
                                <div class="text-center">
                                  {
                                    pop1Selected?
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>selectedCart({name:"popular item 1",price:30})}>Remove from cart</button> :
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>handleAddCart({name:"popular item 1",price:30})}>Add to cart</button>
                                  }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Sale badge*/}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/* Product image*/}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details*/}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name*/}
                                    <h5 class="fw-bolder">Sale Item 2</h5>
                                    {/* Product price*/}
                                    <span class="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {/* <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div> */}
                                <div class="text-center">
                                  {
                                    sal2Selected?
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>selectedCart({name:"sale item 2",price:25})}>Remove from cart</button> :
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>handleAddCart({name:"sale item 2",price:25})}>Add to cart</button>
                                  }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Product image*/}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details*/}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name*/}
                                    <h5 class="fw-bolder">Fancy Product 2</h5>
                                    {/* Product price*/}
                                    $120.00 - $280.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Sale badge*/}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/* Product image*/}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details*/}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name*/}
                                    <h5 class="fw-bolder">Special Item 2</h5>
                                    {/* Product reviews*/}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* Product price*/}
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {/* <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div> */}
                                <div class="text-center">
                                  {
                                    sp2Selected?
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>selectedCart({name:"special item 2",price:18})}>Remove from cart</button> :
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>handleAddCart({name:"special item 2",price:18})}>Add to cart</button>
                                  }
                                  </div>
                                  
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Product image*/}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details*/}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name*/}
                                    <h5 class="fw-bolder">Popular Item 2</h5>
                                    {/* Product reviews*/}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* Product price*/}
                                    $40.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {/* <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div> */}
                                <div class="text-center">
                                  {
                                    pop2Selected?
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>selectedCart({name:"popular item 2",price:40})}>Remove from cart</button> :
                                    <button class="btn btn-outline-dark mt-auto" onClick={()=>handleAddCart({name:"popular item 2",price:40})}>Add to cart</button>
                                  }
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Footer*/}
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
        {/* Bootstrap core JS*/}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* Core theme JS*/}
        <script src="js/scripts.js"></script>
        </>    
  );
}

export default App;

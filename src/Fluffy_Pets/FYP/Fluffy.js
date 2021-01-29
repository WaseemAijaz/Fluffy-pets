import React from 'react';
import TopBar from './TopBar';
import Data from './Data';


const FluffyPets = () =>{
     return(
         <>
         <TopBar/>
          <div className="grid-container">
            <header className="row">
                <div>
                    <a href="/" > <img src="./Images/logo8.png" alt="logo" width="180px" height="115px"/> </a>
                </div>
                <div>
                   <button> <a href="/pets">Pets</a>  </button> 
                  <button> <a href="/Signin">Sign In</a> </button>  
                </div>
            </header>
            <main>
                <div className="row center">
                {
                    Data.product.map((product) => (
                        <div key={product._id} className="card">
                        <a href={`/product/${product._id}`}>
                            <img className="medium" src={product.image} alt={product.name} />
                        </a>
                        <div className="card-body">
                        <a href={`/product/${product._id}`}>
                                <h2>{product.name}</h2>
                            </a>
                            <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                            </div>
                            <div className="price">$ {product.price} </div>
                        </div>
                    </div>
                    ))
                }
                    

                </div>
            </main>
            <footer> Copyright ℗ All Right Reserved</footer>
        </div>
         </>
     );
}

export default FluffyPets;
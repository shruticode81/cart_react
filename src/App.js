import React from 'react';
//import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  
    constructor () {
      super();
      this.state = {
        products: [
          {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1102&q=80',
            id: 1
          },
          {
            price: 999,
            title: 'Mobile Phone',
            qty: 10,
            img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmxpZSUyMHBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 2
          },
          {
            price: 999,
            title: 'Laptop',
            qty: 4,
            img: 'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            id: 3
          }
        ]
      }
      // this.increaseQuantity = this.increaseQuantity.bind(this);
      // this.testing();
    }
    handleIncreaseQuantity = (product) => {
      console.log('Heyy please inc the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
  
      products[index].qty += 1;
  
      this.setState({
        products
      })
    }
    handleDecreaseQuantity = (product) => {
      console.log('Heyy please inc the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
  
      if (products[index].qty === 0) {
        return;
      }
  
      products[index].qty -= 1;
  
      this.setState({
        products
      })
    }
    handleDeleteProduct = (id) => {
      const { products } = this.state;
  
      const items = products.filter((item) => item.id !== id); // [{}]
  
      this.setState({
        products: items
      })
    }
    getCartCount=()=>{
      const {products} = this.state;
      let count=0;
      products.forEach((product)=>{
        count+=product.qty;
      })
      return count;
    }
    getCartTotal=()=>{
      const {products} = this.state;
      let cartTotal = 0;
      products.map((product)=>{
        cartTotal=cartTotal+product.qty*product.price
      })
      return cartTotal;
    }
  render(){
    const {products} = this.state;
  
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar count={ this.getCartCount()}/>
        <Cart
          products= {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity = {this.handleDeleteProduct}
        />
        <div style={{padding:10, fontSize:20}}>
          TOTAL:{this.getCartTotal()}
        </div>
      </div>

    );
  }
}

export default App;

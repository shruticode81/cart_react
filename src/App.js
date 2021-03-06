import React from 'react';
//import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
  
    constructor () {
      super();
      this.state = {
        products: [] ,// we will get the product data from firebase docs
        loading:true
      }
      this.db= firebase.firestore();
      // this.increaseQuantity = this.increaseQuantity.bind(this);
      // this.testing();
    }
    //we will load the or fetch the product inside lifecycle method
    //which is ComponentDidMount()
    componentDidMount(){
      // firebase
      //  .firestore()
      //  .collection('products')
      //  .get() // returns a promise
      //  .then((snapshot)=>{
      //    console.log(snapshot);
      //    snapshot.docs.map((doc)=>{
      //      console.log(doc.data());
      //    });
      //    //let collect the products from db and display it
      //    const products = snapshot.docs.map((doc)=>{
      //      const data = doc.data();
      //      data['id']=doc.id;
      //      return data;
      //    });
      //    this.setState({
      //      products,
      //      loading:false
      //    })
      //  })

        
      //firebase
       //.firestore()
      this.db
       .collection('products')
       //.onSnapshot helps in attaching event listener and whenever where is a change in 
       //firebase react get updated without refereshing
       .onSnapshot((snapshot)=>{
        console.log(snapshot);
        snapshot.docs.map((doc)=>{
          console.log(doc.data());
        });
        //let collect the products from db and display it
        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id']=doc.id;
          return data;
        });
        this.setState({
          products,
          loading:false
        })
      })
      
    }
    handleIncreaseQuantity = (product) => {
      console.log('Heyy please inc the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
      //we will find docRef of product in firbase those qty have to be increase
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
        .update({
          qty: products[index].qty+1
        })
        .then(()=>{
          console.log('updated successfully');
        })
        .catch((error)=>{
          console.log('Error:',error);
        })
      // products[index].qty += 1;
  
      // this.setState({
      //   products
      // })
    }
    handleDecreaseQuantity = (product) => {
      console.log('Heyy please inc the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
      if (products[index].qty === 0) {
        return;
      }

      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
          .update({
            qty:products[index].qty-1
          })
          .then(()=>{
            console.log('updated successfully decrese qty')
          })
          .catch((error)=>{
            console.log("Error:",error);
          })
      
  
      // products[index].qty -= 1;
  
      // this.setState({
      //   products
      //   //loading:false
      // })
    }
    handleDeleteProduct = (id) => {
      const { products } = this.state;
  
      // const items = products.filter((item) => item.id !== id); // [{}]
  
      // this.setState({
      //   products: items
      // })
      const docRef = this.db.collection('products').doc(id);
      docRef
        .delete()
        .then(()=>{
          console.log("Deleted Successfully");
        })
        .catch((error)=>{
          console.log("Error:",error);
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
        if(product.qty>0){
          cartTotal=cartTotal+product.qty*product.price
        }
        return '';
        
      });
      return cartTotal;
    }

    addProduct=()=>{
      this.db
        .collection('products')
        .add({
          img:'',
          price: 900,
          qty:3,
          title:"Washing Machine"
        })
        .then((docRef)=>{
          console.log('product has been added',docRef);
        })
        .catch((error)=>{
          console.log('Error:',error);
        })
    }
  render(){
    const {products,loading} = this.state;
  
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar count={ this.getCartCount()}/>
        {/* <button onClick={this.addProduct}>Add a product</button> */}
        <Cart
          products= {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity = {this.handleDeleteProduct}
        />
        {loading && <h1>loading...</h1>}
        <div style={{padding:10, fontSize:20}}>
          TOTAL:{this.getCartTotal()}
        </div>
      </div>

    );
  }
}

export default App;

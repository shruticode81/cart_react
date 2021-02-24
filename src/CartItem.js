import React from 'react';
class CartItem extends React.Component{
    constructor (){
        super();
        this.state={
            price: 996,
            title: 'Mobile phone',
            qty: 1,
            img :''
        }
       // this.testing();
    }
    // testing(){
    //     const promise =  new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(()=>{
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});

    //         console.log('state',this.state);
    //     });
    // }
    increaseQuantity=()=>{
        //console.log('this.state',this.state);
        //setState form 1 ---> setStatte func is inherit from Component class in react
        // this.setState({  // this setState can be used when prevState doesnot required
        //     qty: this.state.qty+1
        //      title: "use of phone"
        // });

        //setState form 2 ---> setState is used when prevState is required.
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1 // merge this with the this.state obj
            }
        },()=>{
            console.log('this.state',this.state);
        });
        

    }
    decreaseQuantity=()=>{
        console.log('this.state',this.state);
        const {qty} = this.state
        if(qty===0){
            return;
        }
        this.setState((prevState)=>{
            return{
                qty: prevState.qty-1 
            }
        })
    }
    render(){
        console.log('render');
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/*button */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1613832856~hmac=ad708fdd6c47ecee1f200af6befa90d5"
                            onClick={this.increaseQuantity}
                         />
                        <img
                            alt="decrease"
                            className="action-icons" 
                            src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg"
                            onClick={this.decreaseQuantity} 
                        />
                        <img 
                            alt="delete" 
                            className="action-icons"
                            src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                         />
                        
                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        
        background: '#ccc'
    }
}
export default CartItem;
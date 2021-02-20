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
    }
    render(){
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
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1613832856~hmac=ad708fdd6c47ecee1f200af6befa90d5" />
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg" />
                        <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" />
                        
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
import React from 'react';
const CartItem =(props)=>{
    
    

    
        //console.log(this.props);
        console.log('render');
        const {price,title,qty}=props.product;
        const { product,
                onIncreaseQuantity,
                onDecreaseQuantity,
                onDeleteQuantity
                }=props; // used this bz we donot have to write this.props.product 
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img} />
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
                            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1614446085~hmac=8b216a5d84cea5a4852f4c83c1d30414"
                            onClick={()=> onIncreaseQuantity(product)}
                         />
                        <img
                            alt="decrease"
                            className="action-icons" 
                            src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg"
                            onClick={()=> onDecreaseQuantity(product)} 
                        />
                        <img 
                            alt="delete" 
                            className="action-icons"
                            src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                            onClick={()=>onDeleteQuantity(product.id)}
                         />
                        
                    </div>
                </div>
            </div>
        )
    
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
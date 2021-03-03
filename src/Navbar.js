import React from 'react';
const Navbar =(props)=>{
    
    

    
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/34/34568.svg?token=exp=1614703290~hmac=2f293b1884df4eb1afba410fa2323606" alt="cart icon"/>
                    <span style={styles.cartCount}>3</span>
                </div>
            </div>
        );
        
    
       
}
const styles = {
    cartIcon:{
        height:30,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'

    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }

    
}
export default Navbar;
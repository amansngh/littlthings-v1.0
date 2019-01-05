import React from 'react'
import Header from './Header'

class Home extends React.Component{
    constructor(){
        super();
        this.state ={
            loading : false,
            customer : false,
            seller : false
             
        }
    }
    sellerPortal = () => 
    {
        this.setState({seller :true,
            customer:false})
            

    }
    customerPortal = () => {
        this.setState({seller : false,
        customer : true})
        
        
    
}

    render() {
        const {customer,seller } = this.state;
        return(
    <div>
    <button onClick={this.sellerPortal}> Seller </button>
    <button onClick={this.customerPortal}> Customer </button>
    {customer==true && <div> <Header seller={seller}
                                    customer={customer} /> </div>}
    {seller==true && <div> <Header seller={seller}
                                    customer={customer} /> </div>}
    </div>
    

        
    )
}
}
export default Home
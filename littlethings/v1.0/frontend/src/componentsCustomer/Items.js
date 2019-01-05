import React from 'react'
import './Items.css'

export default class Items extends React.Component{
    constructor(props){
        super(props)
        this.state={
            image:require('./pics/'+props.image),
            shopName: props.shopName,

        }  ///const {image,shopName}=this.state
    }
    render(){
        const { image,shopName }=this.state
        return(
            <div className="item">
                <div class="container ContainerStyle">
                    <div class="row">
                        <div class="col-lg-3">
                            <img class="ImageStyle " src={image} alt="image" />
                        </div>
                        <div class="col-lg-8 offset-lg-4">
                        <span>{shopName}</span>
                        <br/>
                        <span>Right swipped your Item</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
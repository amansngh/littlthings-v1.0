import React from 'react'
import Items from './Items.js'

export default class Dropdown extends React.Component{
    constructor(){
        super()
        this.state={
            datas:[
                {"id":'1',"image":"pic1.png","shopName":"abc"},
                {"id":"2","image":"pic1.png","shopName":"xyz"}
            ]
        }
        console.log(this.state)
    }
    createItem=(data)=>{
        console.log(data)
        return <Items image={data.image} shopName={data.shopName}/>
    }
    createItems=(datas)=>{
            console.log(datas)
            return datas.map((data)=>this.createItem(data))
    }
    render(){
        return(
            <div>
                 {this.createItems(this.state.datas)}
            </div>
        )
    }
}
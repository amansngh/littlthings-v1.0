/** neeche multiple buttons wala
 * <ol class="carousel-indicators">
                <li data-target="#carousel-example-multi" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-multi" data-slide-to="1"></li>
                <li data-target="#carousel-example-multi" data-slide-to="2"></li>
                <li data-target="#carousel-example-multi" data-slide-to="3"></li>
                <li data-target="#carousel-example-multi" data-slide-to="4"></li>
                <li data-target="#carousel-example-multi" data-slide-to="5"></li>
            </ol>
 */

 /** carausal k lie
  * <div id="carousel-example-multi" class="carousel slide carousel-multi-item v-2" data-ride="carousel">

        
            <div class="controls-top">
                <a class="btn-floating" href="#carousel-example-multi" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
                <a class="btn-floating" href="#carousel-example-multi" data-slide="next"><i class="fas fa-chevron-right"></i></a>
            </div>     

            <div class="carousel-inner" role="listbox">
                {this.createCarausal(this.state.datas)} 
                
                
  
            </div>

        </div>
  */
import React from 'react'
import Cards from './Cards.js'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class Demands extends React.Component{
    constructor(){
        super()
        this.state={
            datas:[
                {"id":'1',"image":"pic1.png","customerName":"abc"},
                {"id":'2',"image":"pic1.png","customerName":"abcdef"},
                {"id":'3',"image":"pic1.png","customerName":"abchijk"},
                {"id":"4","image":"pic1.png","customerName":"xyz"}
            ],
            current:0
        }
        console.log(this.state)
    }
    gettingDemandDetails=()=>{
        //ek baar yahan se demand ka api hit hoga
    }

    handleClick=(acceptOrNot)=>{
        if(acceptOrNot=='yes')
        this.setState((prevState)=>({current: prevState.current+1}))
       else
       this.setState((prevState)=>({current: prevState.current-1}))
    
        //const {page}=this.state
        /*if(acceptOrNot=='yes')
        {
            //customer k pass bhej do acceptance
        }*/
        /*fetch(`jo bhi api hai`)  //.then(handleResponse)
        .then((data)=>{
            const {image} = data;
            this.setState({
                image
                })    
            })
        .catch((error)=>{
            console.log('kuch gadbad hua')
            console.log(error)
            });*/
    }
    createCards=()=>{
        const {datas,current} =this.state
        console.log('bhej rahe')
        console.log(datas[current])
        //console.log(handleClick)
        return <Cards data={datas[current]} handleClick={this.handleClick}/>
    }

   // createCarausal=(datas)=>{
     //   return datas.map((data)=>this.createCards(data))
    //}
render(){
    return(
    <div>
        {this.createCards(this.state.datas[this.state.current])}
    </div>
            )}

}

export default  Demands;
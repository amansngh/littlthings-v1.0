import React from 'react'
import Profile from './Profile'
import Demands from './Demands.js'
import { Divider, Segment,Grid } from 'semantic-ui-react'
import axios from 'axios'

class MainBody extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datas:[
                {"id":'1',"image":"pic1.png","content":"abc"},
                {"id":"2","image":"pic1.png","content":"xyz"}
            ],
            image:'pic1.png'
          }
    }
    gettingDemandDetails=()=>{
        //ek baar yahan se demand ka api hit hoga
    }

    handleClick=(acceptOrNot)=>{
        if(acceptOrNot=='yes')
        {
           const sid=this.props.sid
           console.log(sid)
          var s='http://localhost:8019/seller/products?sid='+sid
          fetch(s) 
          .then((response)=>{
            console.log('aman',response)
              /* const {image} = response;
            this.setState({
                image:data.image_id
                })   */
            }) 
        .catch((error)=>{
            console.log('kuch gadbad hua')
            console.log(error)
            });
        }   
    }
    render(){
        const {datas,image}=this.state 
        const {username,email,sid}=this.props
        return(
            <Segment>
            <Grid columns={2} relaxed='very'>
              <Grid.Column width={4}>
                <Profile datas={datas} username={username} email={email}/>
              </Grid.Column>
              
              <Grid.Column width={9}>
                <Demands sid={sid} /> 
              </Grid.Column>
              
              
            </Grid>
        </Segment> 
        )
    }
}

export default MainBody

import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
//import {Pic} from './pics/pic1.png'

class Profile extends React.Component{
    constructor(props){
        super(props)
        console.log("checking")
        console.log(props)
        this.state={
            image:require('./pics/'+props.datas[0].image)
        }
    }
    render(){
        const {image}=this.state
        const {username,email}=this.props
        return(
        <div>
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{username}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>{email}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
</div>
        )}
}

export default Profile;
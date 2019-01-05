import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Divider, Segment } from 'semantic-ui-react'
import AddPic from './AddPic.js'
import Profile from './Profile.js'
import NewsFeed from './NewsFeed.js'
import './MainBody.css'

class MainBody extends React.Component{
  constructor(props){
    super(props)
  this.state={
    datas:[
        {"id":'1',"image":"pic1.png","content":"abc"},
        {"id":"2","image":"pic1.png","content":"xyz"}
    ]
  }
}
   
    render(){
      const {datas}=this.state
      const {username,email,cid}=this.props
      
      return(
        <Segment>
            <Grid columns={3} relaxed='very'>
              <Grid.Column width={4}>
                <Profile datas={datas} username={username} email={email} />
              </Grid.Column>
              
              <Grid.Column width={9}>
              <div >
                <NewsFeed datas={datas}/>
              </div>
              </Grid.Column>
              <Grid.Column width={3}>
                <AddPic cid={cid}/>
              </Grid.Column>
            </Grid>
        </Segment>
    )}
}

export default MainBody;
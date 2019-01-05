import React from 'react'
import { Item } from 'semantic-ui-react'

class NewsFeed extends React.Component {
    constructor(props){
        super(props)
        console.log('checkinggggggg')
        console.log(props)
        const {datas}=props
        
    }
    createItem=(data)=>{
        const {image,content}=data
        return (
        <div >
            <Item>
            <Item.Image size='small' src={require('./pics/'+image)} />
                <Item.Content>
                    <Item.Header as='a'>Cute Dog</Item.Header>
                    <Item.Description>
                        <p>{content}</p>
                        <p>Many people also have their own barometers for what makes a cute dog.</p>
                    </Item.Description>
                </Item.Content>
            </Item>
        </div>
        )}
    displayItems=(datas)=>{
        return datas.map((data)=>this.createItem(data))
    }
    render(){
        return(
            <Item.Group>
            {this.displayItems(this.props.datas)}
          </Item.Group>
        )
    }
} 

export default NewsFeed

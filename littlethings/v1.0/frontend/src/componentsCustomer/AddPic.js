import React from 'react'
import { Button } from 'semantic-ui-react'

class AddPic extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        category : ''
    }
  }
  onChangeHandler1= (event) => {
    this.setState({category:event.target.value},()=> {console.log(this.state.category)} )
    
}

  render(){
    const {cid}=this.props
    const s= 'http://localhost:8019?cid='+cid
    return(
    <div>
    <form action={s}  method="post" enctype="multipart/form-data">
    <input type='file' name='p'/>
    <input type="text" name='p1' placeholder="category" value={this.state.category} onChange = {this.onChangeHandler1}/>
    <Button type='submit' positive>Upload Image </Button>
    </form>
  </div>
)}
}

export default AddPic;

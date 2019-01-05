import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Checkbox, Segment } from 'semantic-ui-react'
import NextPrev from './NextPrev'
import { Button, Header, Modal } from 'semantic-ui-react'
import { getDisplayName } from 'recompose';
import './Display.css'
///className='modal-dialog'
class Cards extends React.Component{
    constructor(){
        super()
        console.log('mil gaya')
        //console.log(this.props)
       // console.log(props.handleClick)
        this.state={
           // image:require('./pics/'+this.props.data.image),
           // handleClick:props.handleClick
            //customerName: this.props.data.customerName,

        }
        //console.log(this.state.handleClick)
    }
render(){
    const {image,customerName}=this.props.data
    console.log('test')
    console.log(image)
    return(
            <center>
               <Modal  trigger={<Button>Show what people want</Button>}>
                <center >
                <Modal.Header style = {{fontSize:'2em', margin :'15px 15px 15px'}}>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={require('./pics/'+image)} />
                    <Modal.Description>
                        <Header>{customerName}</Header>
                        <p>Joined in 2015</p>
                    </Modal.Description>
                    <br/>
                    <NextPrev  handleClick={this.props.handleClick}/> 
                    <br/>
                </Modal.Content>
                </center>
            </Modal>
          </center>  
              
    )}
}
export default Cards

/**carausal wala card
 * <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card mb-2">
                            <img class="card-img-top" src={image} alt="Card image cap"></img>
                            <div class="card-body">
                                <h4 class="card-title font-weight-bold">{customerName}</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary btn-md btn-rounded">Button</a>
                            </div>
                        </div>
                    </div>
                </div>

 */
/**  testing for carausal 
 * <div className="App">

        <div id="carousel-example-multi" class="carousel slide carousel-multi-item v-2" data-ride="carousel">

  
          <div class="controls-top">
            <a class="btn-floating" href="#carousel-example-multi" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
            <a class="btn-floating" href="#carousel-example-multi" data-slide="next"><i class="fas fa-chevron-right"></i></a>
          </div>
  

          <ol class="carousel-indicators">
              <li data-target="#carousel-example-multi" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-multi" data-slide-to="1"></li>
              <li data-target="#carousel-example-multi" data-slide-to="2"></li>
              <li data-target="#carousel-example-multi" data-slide-to="3"></li>
              <li data-target="#carousel-example-multi" data-slide-to="4"></li>
              <li data-target="#carousel-example-multi" data-slide-to="5"></li>
          </ol>
  

          <div class="carousel-inner" role="listbox">

            <div class="carousel-item active">
             <div class="col-md-4">
              <div class="card mb-2">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (36).jpg"
                  alt="Card image cap"/>
                <div class="card-body">
                  <h4 class="card-title font-weight-bold">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                      card's content.</p>
                  <a class="btn btn-primary btn-md btn-rounded">Button</a>
                </div>
              </div>
            </div>
            </div>
    <div class="carousel-item">
      <div class="col-md-4">
        <div class="card mb-2">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (34).jpg"
            alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title font-weight-bold">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>
    
</div>
      </div>
      </div>
 */

 /** toggle wala box
  *  <Segment compact>
                        <Checkbox toggle />
                    </Segment>
  */

/* <Card>
                <Image src={require('./pics/'+image)} />
                <Card.Content>
                    <Card.Header>{customerName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                    <Icon name='user' />
                    22 Friends
                    </a>
                </Card.Content>
            </Card> */
            

            /**
             * 
             */
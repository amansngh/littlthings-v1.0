import React from 'react'
import { Button } from 'semantic-ui-react'
//import './Pagination.css'
//disabled={available=='no'}

const NextPrev=(props)=>{
    const {handleClick}=props ;
    //console.log('finally mil gaya')
    //console.log(props)
    return (
     <div>
        <Button.Group>
            <Button onClick={()=>handleClick("no")}>I don't have the item</Button>
            <Button.Or />
            <Button onClick={()=>handleClick("yes")}positive>I Have the item</Button>
        </Button.Group>
     </div>
    )
}

export default NextPrev
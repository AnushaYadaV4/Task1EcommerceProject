import { Fragment} from "react";
import { Button } from "react-bootstrap";

const EcommerceProducts = props => {
    const {productsArr} = props
    const {title,price,imageUrl,key} = productsArr;
    console.log(key)  // undefined
  
    return (

      <Fragment>
        <h1> {title} </h1>
       
        <div>
          
          <img src={imageUrl} alt="avatar" />
          <p> RS.{price} </p>
        </div>


      </Fragment>
    )
  }
  export default EcommerceProducts;
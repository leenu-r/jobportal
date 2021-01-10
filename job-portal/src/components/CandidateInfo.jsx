/* This component is used to select/reject a candidate */

import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


export default function UserInfo(props){

  
    var prevRoute="/";
    var cardElement;

    if (props.location.state !== undefined) {
      prevRoute = props.location.state.prevRoute;
      const {Image,name,id} = props.location.state.candidateDetails;

      cardElement = ( <Card  style={{ width: '20rem' }}>
 
    <Card.Body>
      <Card.Img variant="top" src={Image} />
     <Button>Shortlist</Button>
     <Button> Reject</Button>
    </Card.Body>

   
   </Card>);
  }
  else
  {
    cardElement = <div> Please Go Back to ther previous page and Select a Candidate. </div>;
  }

 return (
    <div className="parentDiv">

<header>
  <h2>User Information</h2>
</header>

<section>
  <nav>
  <Link to={prevRoute}><Button>Go Back</Button></Link>
  </nav>
  
  <article className="cardStyles">
  {cardElement}

    </article>
</section>

<footer>
  <p></p>
</footer>

    </div>
  ) 
}
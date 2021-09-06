import React  from 'react';
import Button from 'react-bootstrap/Button';
import './Card.css';

function Card(){

const clickHandler =() => {
	console.log("Click event!");
}

    return (<div class="card">
	<div class="imgBx">
	
	</div>
	<div class="content">
		<div class="details">
			<h2> <br /><span></span></h2>
			<img src="http://ebolofis.com/assets/img/profile-img.jpg" width="300" height="300" alt="Ebolofis React App"></img>
			<div>
      <Button onClick={clickHandler}  variant="primary">Click Me!</Button>
   </div>
		</div>
		<ul class="sci">
			<li>
				
			</li>
			<li>
				
			</li>
			<li>
				
			</li>
		</ul>
	</div>
</div> )


  
}

export default Card;
import React, { Component }  from 'react';
import './Card.css';

function Card(){
    return (<div class="card">
	<div class="imgBx">
	
	</div>
	<div class="content">
		<div class="details">
			<h2>Anna Smith<br /><span>Web girl</span></h2>
		</div>
		<ul class="sci">
			<li>
				<a href=""><i class="fab fa-facebook-f"></i></a>
			</li>
			<li>
				<a href=""><i class="fab fa-twitter"></i></a>
			</li>
			<li>
				<a href=""><i class="fab fa-instagram"></i></a>
			</li>
		</ul>
	</div>
</div> )


  
}

export default Card;
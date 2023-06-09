import React from "react"; 
import {motion as m} from "framer-motion";

function Modelo(props) {

	return (
		<m.div className="Model" 

			initial = {{opacity: 0}} 
			animate = {{opacity: 1}}
			exit={{opacity: 0}}
			transition = {{delay: .25, duration: .5, ease: 'easeOut'}}
		>

			<m.div className="title" 
			
				initial={{opacity: 0}} 
				animate={{opacity: 1}} 
				exit={{y: "-100"}}
				transition={{delay: .25, duration: .5, ease: 'easeOut'}}
			>{props.title}</m.div> 

			<m.div className="img-container" 
				initial={{y: "-100px"}}
				animate={{y: "0px"}} 
				exit={{x: "-200"}}
				transition={{delay: .25, duration: .5, ease: 'easeOut'}}
				>
				<img src={props.img} />
				<m.div className="square" 
					initial={{rotate: -90}} 
					animate={{rotate: 0}}
					exit={{rotate: -90}}
					transition={{delay: .25, duration: .5, ease: 'easeOut'}}
				>

				</m.div>
			</m.div>

			<m.div className="paragraph" 

				initial={{y: "100px"}}
				animate={{y: "0px"}}
				exit={{y: "100px"}}  
				transition={{delay: .25, duration: .5, ease: 'easeOut'}}
			>

				<p>{props.paragraph1}</p> 
				<p>{props.paragraph2}</p>
				<p>{props.paragraph3}</p>
				<p>{props.paragraph4}</p>
				<p>{props.paragraph5}</p>
				
			</m.div>

			
			
		</m.div>
	);
}

export default Modelo;
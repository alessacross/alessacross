import React from "react";
import Input from "./Input";

const NewFeed = ({ handleChange, handleClick, defaultValue }) => (
	<div className="new-feed">	
		<label htmlFor="new-feed"></label>
		<input 
			type="text" 
			className="new-feed"
			id="new-feed-textarea"
			defaultValue={defaultValue}
			placeholder="Create New Feed"
			onChange={handleChange}
			required
		/>
		<button 
			type="submit"
			onClick={handleClick}
			defaultValue={defaultValue}
			id="new-feed-button"
		>
		Create
		</button>
	</div>	
)

export default NewFeed;
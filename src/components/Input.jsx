import React from "react";
import { BsImage } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";

const Input = () => {
	return (
		<div className='input'>
			<input type='text' placeholder='Type something...' />
			<div className='send'>
				<span>
					<MdAttachFile />
				</span>
				<input type='file' style={{ display: "none" }} id='file' />
				<label htmlFor='file'>
					<span>
						<BsImage />
					</span>
				</label>
				<button>Send</button>
			</div>
		</div>
	);
};

export default Input;

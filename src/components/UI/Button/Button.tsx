import React from "react";

import classes from "./Button.module.scss";

interface IButtonProps {
	name: string;
	onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ name, onClick }) => {
	return (
		<button className={classes.button} onClick={onClick}>
			{name}
		</button>
	);
};

export default Button;

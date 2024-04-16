import React from "react";

import Button from "../UI/Button/Button";

interface IStartGameProps {
	startGame: () => void;
}

const StartGame: React.FC<IStartGameProps> = ({ startGame }) => {
	return (
		<>
			<Button name="StartGame" onClick={startGame} />
		</>
	);
};

export default StartGame;

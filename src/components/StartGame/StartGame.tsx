import React from "react";

import Button from "../UI/Button/Button";
import Statistic from "../Statistic/Statistic";

interface IStartGameProps {
	startGame: () => void;
}

const StartGame: React.FC<IStartGameProps> = ({ startGame }) => {
	return (
		<>
			<Button name="StartGame" onClick={startGame} />
			<Statistic />
		</>
	);
};

export default StartGame;

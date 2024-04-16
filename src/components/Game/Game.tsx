import React, { useState, MouseEvent } from "react";

import classes from "./Game.module.scss";

interface IGameProps {
	quizData: {
		question: string;
		options: { letter: string; option: string }[];
		correct: string;
	};
	gameOver: () => void;
	quizWin: () => void;
	quizLose: () => void
}

const Game: React.FC<IGameProps> = ({ quizData, gameOver, quizWin, quizLose }) => {
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const handleCorrectAnswer = (event: MouseEvent<HTMLButtonElement>) => {
		if (event.currentTarget.innerText.slice(1).toLocaleLowerCase().trim() === quizData.correct.toLocaleLowerCase()) {
			quizWin();
			gameOver();
		} else {
			setIsCorrect(false);
			quizLose();
			gameOver();
		}
	};

	return (
		<div className={classes.game}>
			<h2 className={classes["game__question"]}>{quizData.question}</h2>
			<div className={classes["game__options"]}>
				{quizData.options.map(({ letter, option }) => (
					<button className={classes["game__option"]} key={letter} onClick={handleCorrectAnswer}>
						<span className={classes["game__letter"]}>{letter} </span>
						{option}
					</button>
				))}
			</div>
		</div>
	);
};

export default Game;

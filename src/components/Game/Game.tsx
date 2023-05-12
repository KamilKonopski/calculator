import React, { useState, MouseEvent } from "react";

interface IGameProps {
	quizData: {
		question: string;
		options: { letter: string; option: string }[];
		correct: string;
	};
}

const Game: React.FC<IGameProps> = ({ quizData }) => {
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const handleCorrectAnswer = (event: MouseEvent<HTMLButtonElement>) => {
		console.log();

		if (event.currentTarget.innerText.slice(1) === quizData.correct) {
			setIsCorrect(true);
		} else {
			setIsCorrect(false);
		}
	};

	return (
		<div>
			<h2>{quizData.question}</h2>
			<ul>
				{quizData.options.map(({ letter, option }) => (
					// !null && !isCorrect ?? 'loose' : "win"
					<button onClick={handleCorrectAnswer}>
						<span>{letter}</span>
						{option}
					</button>
				))}
			</ul>
		</div>
	);
};

export default Game;

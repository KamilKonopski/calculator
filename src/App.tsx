import React, { useState } from "react";

import StartGame from "./components/StartGame/StartGame";
import Game from "./components/Game/Game";

import classes from "./App.module.scss";

const DUMMY_QUIZ = {
	question: "Kuala Lumpur is the capital of",
	options: [
		{ letter: "A", option: "Vietnam" },
		{ letter: "B", option: "Malaysia" },
		{ letter: "C", option: "Sweden" },
		{ letter: "D", option: "Austria" },
	],
	correct: "Malaysia",
};

const App: React.FC = () => {
	const [isInGame, setIsInGame] = useState(false);

	return (
		<>
			<h1 className={classes.heading}>Countries Quiz</h1>
			<div className={classes.app}>
				{!isInGame && <StartGame startGame={() => setIsInGame(true)} />}
				{isInGame && <Game quizData={DUMMY_QUIZ} />}
			</div>
		</>
	);
};

export default App;

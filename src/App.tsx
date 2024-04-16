import React, { useState } from "react";

import StartGame from "./components/StartGame/StartGame";
import Game from "./components/Game/Game";
import Statistic from "./components/Statistic/Statistic";

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
	const [isInGame, setIsInGame] = useState<boolean>(false);
	const [stats, setStats] = useState<{ wins: number; losses: number }>({
		wins: 0,
		losses: 0
	})

	
	return (
		<>
			<h1 className={classes.heading}>Countries Quiz</h1>
			<div className={classes.app}>
				{!isInGame && <StartGame startGame={() => setIsInGame(true)} />}
				{!isInGame && <Statistic stats={stats}/>}
				{isInGame && <Game quizData={DUMMY_QUIZ} quizWin={() => setStats({...stats, wins: stats.wins + 1})} quizLose={() => setStats({...stats, losses: stats.losses + 1})} gameOver={() => setIsInGame(false)}/>}
			</div>
		</>
	);
};

export default App;

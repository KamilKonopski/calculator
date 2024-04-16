import React from "react";

import classes from "./Statistic.module.scss";

interface IStatsProps {
	stats: { wins: number; losses: number }
}

const Statistic: React.FC<IStatsProps> = ({stats}) => {

	return (
		<div className={classes.stats}>
			<span className={classes["stats__text"]}>
				Number of wins: <span className={classes["stats__wins"]}>{stats.wins}</span>
			</span>
			<span className={classes["stats__text"]}>
				Number of losses: <span className={classes["stats__losses"]}>{stats.losses}</span>
			</span>
		</div>
	);
};

export default Statistic;

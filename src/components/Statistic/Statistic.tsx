import React, { useState } from "react";

import classes from "./Statistic.module.scss";

const Statistic: React.FC = () => {
	const [stats, setStats] = useState<{ wins: number; losses: number }>({
		wins: 0,
		losses: 0
	})

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

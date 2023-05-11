import React from "react";

import classes from "./Statistic.module.scss";

const Statistic: React.FC = () => {
	return (
		<div className={classes.stats}>
			<span className={classes["stats__text"]}>
				Number of wins: <span className={classes["stats__wins"]}>0</span>
			</span>
			<span className={classes["stats__text"]}>
				Number of losses: <span className={classes["stats__losses"]}>0</span>
			</span>
		</div>
	);
};

export default Statistic;

import React from "react";
import StatisticsSection from "../about/StatisticsSection";
import TechnologySection from "../about/TechnologySection";
import ProfileCard from "../about/ProfileCard";

const ColumnOne = () => {
	return (
		<div className="space-y-2 grid">
			<StatisticsSection className="lg:order-1 order-2 mt-2 lg:mt-0 h-60 " />
			<ProfileCard className="lg:order-2 order-1 h-72" />
			<TechnologySection className="lg:order-3 order-3 h-60 " />
		</div>
	);
};

export default ColumnOne;

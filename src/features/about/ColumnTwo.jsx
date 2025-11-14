import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import StatisticsSection from "./StatisticsSection";
import ProfileCard from "./ProfileCard";
import TechnologySection from "./TechnologySection";

const ColumnTwo = () => {
	return (
		<div className="space-y-2 grid">
			<StatisticsSection className="lg:order-1 order-2 mt-2 lg:mt-0 h-60 " />
			<ProfileCard className="lg:order-2 order-1 h-72" />
			<TechnologySection className="lg:order-3 order-3 h-60 " />
		</div>
	);
};

export default ColumnTwo;

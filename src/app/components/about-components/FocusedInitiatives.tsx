"use client";
import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

interface SustainabilityCardProps {
	imageSrc: string;
	title: string;
	description: string;
}

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({
	imageSrc,
	title,
	description,
}) => (
	<div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
		<div className="relative h-64">
			<Image
				src={imageSrc}
				alt={title}
				layout="fill"
				objectFit="cover"
				className="transition-transform duration-300 hover:scale-105"
			/>
		</div>
		<div className="p-6">
			<h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-3">
				{title}
			</h3>
			<p className="text-sm sm:text-base text-gray-600 mb-4">{description}</p>
			<Button
				color="green"
				variant="text"
				className="p-0 hover:p-4 flex items-center gap-2"
				placeholder=""
				onPointerEnterCapture=""
				onPointerLeaveCapture=""
			>
				Read More <ArrowRightIcon strokeWidth={2} className="w-3 h-3" />
			</Button>
		</div>
	</div>
);

export const FocusedInitiatives: React.FC = () => {
	const sustainabilityItems: SustainabilityCardProps[] = [
		{
			imageSrc: "/green-env.jpg",
			title: "Environmental Impact",
			description:
				"Explore our initiatives to reduce carbon footprint and promote sustainable practices across our operations.",
		},
		{
			imageSrc: "/green-envirnoment.jpg",
			title: "Social Responsibility",
			description:
				"Learn about our community engagement programs and how we're fostering positive social change.",
		},
		{
			imageSrc: "/re.jpg",
			title: "Sustainable Innovation",
			description:
				"Discover our cutting-edge research and development in renewable energy technologies.",
		},
	];

	return (
		<div className="my-16 px-4 lg:px-0 max-w-7xl mx-auto space-y-6">
			<div className="flex justify-start mb-8">
				<div className=" text-center pt-10">
					<h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">
						Focused Initiatives
					</h1>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{sustainabilityItems.map((item, index) => (
					<SustainabilityCard key={index} {...item} />
				))}
			</div>
		</div>
	);
};

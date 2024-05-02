import Button from '@/components/core/Button/Button';
import CardPannel from '@/components/module/CardPannel/CardPannel';
import Image from 'next/image';
import React from 'react';

const CompCard = ({ comp }: any) => {
	return (
		<div className="mr-[12px] rounded-[8px] bg-white p-[16px] shadow-md">
			<div className="mb-[16px] flex">
				<div className="mr-[16px] h-[88px] w-[88px] rounded-[8px]">
					<Image src={comp.image} width={18} height={18} alt="comp" />
				</div>
				<div className="flex w-[199px] flex-col gap-1 text-headline-6 text-gray-100">
					<span>{comp.name}</span>
					<div className="text-gary-80 flex flex-col gap-1 text-body-3">
						<span>{comp.date}</span>
						<span>
							{comp.category} · {comp.tier}
						</span>
						<span>{comp.location}</span>
					</div>
				</div>
			</div>
			{comp.status === 'ended' ? <Button /> : <CardPannel compInfo={comp} />}
		</div>
	);
};

export default CompCard;

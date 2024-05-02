import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NextMatchInfoPannel = ({ nextMatchInfo }: any) => {
	return (
		<div className="flex justify-between">
			<div className="flex gap-[4px] text-sub-headline-3 text-gray-80">
				{nextMatchInfo.teammate.map((player, index) => (
					<>
						<span key={player.id}>{player.name}</span>
						{index !== nextMatchInfo.teammate.length - 1 && <span>·</span>}
					</>
				))}
				<span>vs</span>
				{nextMatchInfo.opponent.map((player, index) => (
					<>
						<span key={player.id}>{player.name}</span>
						{index !== nextMatchInfo.teammate.length - 1 && <span>·</span>}
					</>
				))}
			</div>
			<span className="text-body-3 text-gray-60">{nextMatchInfo.court}번 코트</span>
		</div>
	);
};

export default NextMatchInfoPannel;

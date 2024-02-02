import React from 'react';

import JudgeTeam from '@/components/Pages/Hackathon/JudgeTeam';
import teamMemberListHome from '@/components/Pages/Home/HomeJudgeTeam/teamMemberList.json';

const Speakers = () => {
	return (
		<div>
			<JudgeTeam subtitle="AI + Web3 Convention 2024" teamMemberList={teamMemberListHome} />
		</div>
	);
};

export default Speakers;

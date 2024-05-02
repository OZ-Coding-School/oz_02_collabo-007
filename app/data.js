export const data = {
	userInfo: {
		accessToken: '엑세스 토큰',
		refreshToken: '리프레쉬 토큰',
		id: '고유 아이디',
		phone: '010-1234-1234',
		name: '김철수',
		image: null,
		club: {
			id: '클럽 아이디',
			name: '라온테니스',
		},
		team: {
			id: '팀 아이디',
			name: '라온테니스 초보 A',
		},
		tier: {
			id: '티어 아이디',
			single: '국화부',
			double: '개나리부',
			team: '국화부',
			title: 'single',
		},
		ranking: {
			id: '랭킹 아이디',
			single: { name: '남자 단식', tier: '국화부', rank: '5위' },
		},
		createdAt: '2024-04-22-',
		updatedAt: '2024-04-22-',
	},
	compList: {
		comp: [
			{
				id: '대회 아이디',
				name: '챔피언스리그',
				image: '이미지 url',
				date: '2024.04.10 14:00',
				location: '열우물 테니스장',
				category: '남자 복식',
				tier: {
					id: '부 아이디',
					name: '개나리부',
				},
				status: '진행 중',
				waiting: false,
			},
			{
				id: '대회 아이디',
				name: '챔피언스리그',
				image: '이미지 url',
				date: '2024.04.10 14:00',
				location: '열우물 테니스장',
				category: '남자 복식',
				tier: {
					id: '부 아이디',
					name: '개나리부',
				},
				status: '진행 중',
				waiting: false,
			},
		],
	},

	myComp: {
		myCompetition: [
			{
				id: '대회 아이디',
				name: '챔피언스리그',
				image: '/app/_asset/images/Rectangle4343.png',
				date: '2024.04.10 14:00',
				location: '열우물 테니스장',
				category: '남자 복식',
				tier: '개나리부',
				status: '진행 중',
				nextMatch: {
					id: null,
					teammate: [
						{ id: '유저아이디', name: '자신' },
						{ id: '유저아이디', name: '파트너' },
					],
					opponent: [
						{ id: '유저 아이디', name: '콩쥐' },
						{ id: '유저 아이디', name: '팥쥐' },
					],
					court: '1',
					round: 4,
				},
			},
			{
				id: '대회 아이디',
				name: '2024 초보 대회',
				image: '/app/_asset/images/Rectangle4343.png',
				date: '2024.04.10 14:00',
				location: '열우물 테니스장',
				category: '남자 복식',
				tier: '국화부',
				status: '진행 전',
				nextMatch: {
					id: '매치 아이디',
					teammate: [
						{ id: '유저아이디', name: '자신' },
						{ id: '유저아이디', name: '파트너' },
					],
					opponent: [
						{ id: '유저 아이디', name: '콩쥐' },
						{ id: '유저 아이디', name: '팥쥐' },
					],
					court: '1',
					round: 4,
				},
			},
			{
				id: '대회 아이디',
				name: '2024 초보 대회',
				image: '/app/_asset/images/Rectangle4343.png',
				date: '2024.04.10 14:00',
				location: '열우물 테니스장',
				category: '남자 복식',
				tier: '국화부',
				status: '종료',
				nextMatch: {
					id: '매치 아이디',
					teammate: [
						{ id: '유저아이디', name: '자신' },
						{ id: '유저아이디', name: '파트너' },
					],
					opponent: [
						{ id: '유저 아이디', name: '콩쥐' },
						{ id: '유저 아이디', name: '팥쥐' },
					],
					court: '1',
					round: 4,
				},
			},
			{
				id: '대회 아이디',
				name: '2024 초보 대회',
				image: '/app/_asset/images/Rectangle4343.png',
				date: '2024.04.10 14:00',
				location: '열우물 테니스장',
				category: '남자 복식',
				tier: '국화부',
				status: '진행 전',
				nextMatch: {
					id: '매치 아이디',
					teammate: [
						{ id: '유저아이디', name: '자신' },
						{ id: '유저아이디', name: '파트너' },
					],
					opponent: [
						{ id: '유저 아이디', name: '콩쥐' },
						{ id: '유저 아이디', name: '팥쥐' },
					],
					court: '1',
					round: 4,
				},
			},
		],
	},
};

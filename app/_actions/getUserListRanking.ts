import { Tier } from '@/@types/tier';
import { ISearchParams } from './getCompData';

export const getUserListRanking = async (searchParams: ISearchParams, tiers: Tier[]) => {
  try {
    const { gender = 'male', type = 'single' } = searchParams;

    const date = new Date();
    const currentYear = date.getFullYear().toString();
    const { year = currentYear } = searchParams;

    // team
    if (gender === 'team' && type === 'team') {
      const teamParams = new URLSearchParams();
      if (year !== currentYear) teamParams.set('year', year);

      const teamRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/ranking/team/?${teamParams.toString()}`,
        {
          method: 'GET',
          credentials: 'include',
        },
      );

      const teamData = await teamRes.json();

      return teamData;
    }

    const filteredTier = tiers.filter(
      ({ matchTypeDetails }) =>
        matchTypeDetails.gender === gender && matchTypeDetails.type === type,
    );

    const { tier = filteredTier[0].name } = searchParams;
    const tierId = filteredTier.find(({ name }) => name === tier)?.id;

    const params = new URLSearchParams();

    params.set('gender', gender);
    params.set('type', type);
    if (tierId) params.set('tier', `${tierId}`);
    if (year !== currentYear) params.set('year', year);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/ranking/user/?${params.toString()}`,
      {
        method: 'GET',
        credentials: 'include',
      },
    );

    if (!res.ok) {
      throw new Error('server errors');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

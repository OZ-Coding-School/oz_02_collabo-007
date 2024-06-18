import { MatchTypeDetails } from './competition';

export interface Applicant {
  userName: string;
  userPhone: string;
}

export interface ApplicantInfo {
  id: number;
  expiredDate: string;
  waitingNumber: number | null;
}

export interface AppliedCompetition {
  name: string;
  startDate: string;
  matchTypeDetails: MatchTypeDetails;
  tier: string;
  totalRounds: number;
  location: string;
  address: string;
  bankAccountName: string;
  bankName: string;
  bankAccountNumber: string;
  fee: number;
}

export interface ApplyResultData {
  applicants: Applicant[];
  applicantsInfo: ApplicantInfo;
  competitionInfo: AppliedCompetition;
}

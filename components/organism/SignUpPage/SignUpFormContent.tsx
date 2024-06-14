'use client';

import { useFormStatus } from 'react-dom';
import Button from '@/components/core/Button/Button';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import {
  BirthField,
  ClubField,
  ConfirmPasswordField,
  GenderField,
  NameField,
  PasswordField,
  PhoneField,
  ProfileField,
} from '@/components/organism/SignUpPage';
import { useFormContext } from 'react-hook-form';
import type { ClubSearchData } from '@/@types/club';
import type { UserData } from '@/@types/user';
import Dialog from '@/components/core/Dialog/Dialog';
import { AnimatePresence } from 'framer-motion';
import HelperText from '@/components/core/HelperText/HelperText';
import LoadingSpinner from '@/components/core/LoadingSpinner/LoadingSpinner';

export interface SignUpFormContentProps {
  clubList: ClubSearchData[];
  userData?: UserData;
  setIsChangePassword?: Dispatch<SetStateAction<boolean>>;
  editMode?: boolean;
}

const SignUpFormContent: FC<SignUpFormContentProps> = ({
  clubList,
  userData = null,
  setIsChangePassword,
  editMode = false,
}) => {
  const { pending } = useFormStatus();
  const [isOpen, setIsOpen] = useState(false);
  const [isUnique, setIsUnique] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const existClub = userData?.club ? true : false;

  const {
    formState: { isValid },
  } = useFormContext();

  const checkClubChange = () => {
    setIsAlert(() => true);
  };

  return (
    <>
      <div className="no-scrollbar flex w-full flex-1 flex-col items-center gap-[24px] overflow-scroll px-[20px] py-[24px]">
        <ProfileField
          currentImg={userData?.imageUrl ? [userData?.imageUrl] : undefined}
        />
        <PhoneField
          isUnique={isUnique}
          setIsUnique={setIsUnique}
          phoneData={userData?.phone}
        />
        {editMode && setIsChangePassword ? (
          <div className="flex w-full items-center justify-between text-sub-headline-2">
            <div>비밀번호</div>
            <div>
              <Button
                label="비밀번호 변경"
                variant="tertiary"
                size="sm"
                type="button"
                onClick={() => setIsChangePassword(() => true)}
              />
            </div>
          </div>
        ) : (
          <>
            <PasswordField />
            <ConfirmPasswordField />
          </>
        )}
        <NameField nameData={userData?.username} />
        <GenderField exitGender={userData?.gender} />
        <BirthField birthData={userData?.birth} />
        <ClubField
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          clubList={clubList}
          clubData={userData?.club}
          editMode={editMode}
          isChanged={isChanged}
          setIsChanged={setIsChanged}
        />

        <div className="w-full py-[20px]">
          {editMode ? (
            <Button
              label="완료"
              type={isChanged && existClub ? 'button' : 'submit'}
              disabled={pending || !isValid || isOpen}
              onClick={() => {
                if (isChanged && existClub) checkClubChange();
              }}
            />
          ) : (
            <Button
              label="회원 가입"
              type="submit"
              disabled={!isUnique || pending || !isValid || isOpen}
            />
          )}
        </div>
      </div>

      {pending && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <LoadingSpinner />
        </div>
      )}

      <AnimatePresence>
        {isAlert && (
          <Dialog
            setIsOpen={setIsAlert}
            title="클럽을 정말로 변경하시겠습니까?"
            outsideDisable
          >
            <>
              <div className="text-center">
                <HelperText
                  variant="error"
                  helperText="클럽을 변경하면 현재 소속된 클럽에서 탈퇴 처리됩니다."
                />
              </div>

              <div className="flex w-full items-center justify-center gap-[12px]">
                <Button
                  type="button"
                  label="취소"
                  variant="secondary"
                  colors="gray"
                  size="sm"
                  onClick={() => setIsAlert(() => false)}
                />
                <Button
                  type="submit"
                  label="확인"
                  size="sm"
                  className="bg-error-60"
                  onClick={() => setIsAlert(() => false)}
                />
              </div>
            </>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default SignUpFormContent;

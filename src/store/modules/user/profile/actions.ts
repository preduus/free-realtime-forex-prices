import { action } from 'typesafe-actions';
import { ProfileTypes, Profile } from './types';

export const getProfileHDispatch = () => action(ProfileTypes.GET_PROFILE);

export const ProfileSuccess = (data: Profile) => action(ProfileTypes.SUCCCES_PROFILE, { data });

export const ProfileError = () => action(ProfileTypes.ERROR_PROFILE);
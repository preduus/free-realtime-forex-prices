import { action } from 'typesafe-actions';
import { ActivesTypes, Actives } from './types';

export const getActivesDispatch = () => action(ActivesTypes.GET_ACTIVES);

export const ActivesSuccess = (data: Actives[]) => action(ActivesTypes.SUCCCES_ACTIVES, { data });

export const ActivesError = () => action(ActivesTypes.ERROR_ACTIVES);
import { combineReducers } from 'redux';
import { EarthResource } from '../model'
import { looserReducer, LooserState} from './looser.reducer';
import { earthResourceReducer } from './earth-resource.reducer';

export interface State {
  earthResources: EarthResource[];
  looserState : LooserState;
}

export const rootReducers = combineReducers<State>({
  earthResources: earthResourceReducer,
  looserState: looserReducer,
});

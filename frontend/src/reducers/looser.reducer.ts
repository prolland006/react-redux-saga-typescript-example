import { BaseAction, actionIds } from '../common';
import { Looser } from '../model';

export type LooserState = Looser[];

export const looserReducer = (
  state: LooserState = [],
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.LOOSER_UPDATE_RECEIVED:
      return handleLooserUpdateCompleted(state, action.payload);
    case actionIds.REMOVE_LOOSER_REQUEST:
      return handleRemoveLooser(state, action.payload);
  }

  return state;
};

const handleRemoveLooser = (
  state: LooserState,
  id: string
): LooserState => {
  const withoutTheId = state.filter(currency => currency.id != id);
  return [...withoutTheId];
};


const handleLooserUpdateCompleted = (
  state: LooserState,
  currencyUpdate: Looser
): LooserState => {
  const notUpdated = state.filter(currency => currency.id != currencyUpdate.id);
  return [currencyUpdate, ...notUpdated];
};

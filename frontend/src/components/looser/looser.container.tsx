import { connect } from 'react-redux';
import { LooserComponent } from './looser.component';
import {
  startSocketSubscriptionAction,
  stopSocketSubscriptionAction,
  removeLooserRequestAction,
} from '../../actions';
import { State } from '../../reducers';

const mapStateToProps = (state: State) => ({
  looserCollection: state.looserState,
});

const mapDispatchToProps = dispatch => ({
  connectCurrencyUpdateSockets: () => dispatch(startSocketSubscriptionAction()),
  disconnectCurrencyUpdateSockets: () => dispatch(stopSocketSubscriptionAction()),
  onRemoveLooserRequest: id => dispatch(removeLooserRequestAction(id)),
});

export const LooserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LooserComponent);

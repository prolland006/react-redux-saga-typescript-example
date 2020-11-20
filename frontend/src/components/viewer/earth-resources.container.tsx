import { connect } from 'react-redux';
import { removeResourceAction, confirmGetResourceAction } from '../../actions';
import { State } from '../../reducers';
import { EarthResourceComponent } from './earth-resource.component';

const mapStateToProps = (state: State) => ({
  earthResource: state.earthResources,
});

const mapDispatchToProps = dispatch => ({
  removeResource: id => dispatch(removeResourceAction(id)),
  onUserConfirmGetResourceRequest: confirm => dispatch(confirmGetResourceAction(confirm)),
});

export const EarthResourceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EarthResourceComponent);

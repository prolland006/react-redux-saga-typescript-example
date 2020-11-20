import * as React from 'react';
import { EarthResource } from '../../model'
import { earthResourceReducer } from '../../reducers/earth-resource.reducer';

interface Props {
  earthResource: EarthResource[];
  removeResource: (id: string)=>void;
  onUserConfirmGetResourceRequest: (result: boolean) => void;
}

export const EarthResourceComponent: React.FunctionComponent<Props> = props => {
  const {earthResource, removeResource, onUserConfirmGetResourceRequest} = props;
  const [showConfirm, setShowConfirm] = React.useState(false);

  const removeClicked = (id: string) => {
    setShowConfirm(true);
    removeResource(id);
  }

  const confirmClicked = (confirm: boolean) => {
    setShowConfirm(false);
    onUserConfirmGetResourceRequest(confirm);
  }

  return (
  <>
    <h2>Earth Resources</h2>
    <table>
      <thead>
        <th>Resource</th>
        <th>Quantity</th>
        <th>Action</th>
      </thead>
      <tbody>
        {earthResource.map(earthResource=>
          <tr><td>{earthResource.type}</td><td>{earthResource.quantity}</td><td><button onClick={() => removeClicked(earthResource.id)}>Get the resource</button></td></tr>
        )}
      </tbody>
    </table>
    {showConfirm && (
        <div style={{ background: '#ADD8E6' }}>
          <span>Destroy the earth ?</span>
          <button onClick={() => confirmClicked(true)}>Yes</button>
          <button onClick={() => confirmClicked(false)}>No</button>
        </div>
      )}
  </>
  )
};

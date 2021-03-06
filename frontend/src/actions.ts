import { BaseAction, actionIds } from './common';
import { Looser } from './model';

export const confirmGetResourceAction: (confirm: boolean) => BaseAction = confirm => ({
  type: actionIds.GET_RESOURCE_USER_CONFIRMATION,
  payload: confirm,
})

export const removeResourceAction: (id: string) => BaseAction = id => ({
  type: actionIds.REMOVE_RESOURCE_REQUEST,
  payload: id,
});

export const destroyNatureResourcesAction: 
  (resourceToDestroy: {id: string, quantity: number}) => BaseAction = resourceToDestroy => ({
    type: actionIds.DESTROY_NATURE_RESOURCES,
    payload: resourceToDestroy,
});


export const removeLooserRequestAction: (
  id: string
) => BaseAction = id => ({
  type: actionIds.REMOVE_LOOSER_REQUEST,
  payload: id,
});

export const startSocketSubscriptionAction: () => BaseAction = () => ({
  type: actionIds.START_SOCKET_SUBSCRIPTION,
});

export const stopSocketSubscriptionAction: () => BaseAction = () => ({
  type: actionIds.STOP_SOCKET_SUBSCRIPTION,
});

export const looserUpdateReceivedAction: (
  looser: Looser
) => BaseAction = looser => ({
  type: actionIds.LOOSER_UPDATE_RECEIVED,
  payload: looser,
});

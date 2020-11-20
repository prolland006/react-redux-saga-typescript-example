export const actionIds = {
  START_SOCKET_SUBSCRIPTION: 'Start listening to the web socket',
  STOP_SOCKET_SUBSCRIPTION: 'Close socket connection',
  LOOSER_UPDATE_RECEIVED: 'Got a looser update from the server',
  REMOVE_LOOSER_REQUEST: 'Remove looser',
  REMOVE_RESOURCE_REQUEST: 'Remove resource',
  GET_RESOURCE_USER_CONFIRMATION: 'Get resource user confirmation',
  DESTROY_NATURE_RESOURCES: 'Destroy nature resources',
};

export interface BaseAction {
  type: string;
  payload?;
}

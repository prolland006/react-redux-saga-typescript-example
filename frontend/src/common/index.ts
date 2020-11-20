export const actionIds = {
  GET_NUMBER_REQUEST_START: '[0] Request a new number to the NumberGenerator async service.',
  GET_NUMBER_REQUEST_COMPLETED: '[1] NumberGenerator async service returned a new number.',
  CANCEL_ONGOING_NUMBER_REQUEST: '[2] Cancelling and on going number request',
  GET_NUMBER_REQUEST_USER_CONFIRMATION: '[3] User has to confirm or cancel the number request before it gets fired',
  START_SOCKET_SUBSCRIPTION: '[4] Start listening to the web socket',
  STOP_SOCKET_SUBSCRIPTION: '[5] Close socket connection',
  LOOSER_UPDATE_RECEIVED: '[6] Got a looser update from the server',
  REMOVE_LOOSER_REQUEST: '[7] Remove looser',
  REMOVE_RESOURCE_REQUEST: '[8] Remove resource',
  GET_RESOURCE_USER_CONFIRMATION: '[9] Get resource user confirmation',
  DESTROY_NATURE_RESOURCES: '[10] Destroy nature resources',
};

export interface BaseAction {
  type: string;
  payload?;
}

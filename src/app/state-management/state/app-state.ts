export interface IAppState {
  counter: number;
  messaging?: {
    newMessages: number;
  }
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
  messaging: {
    newMessages: 5
  }
};

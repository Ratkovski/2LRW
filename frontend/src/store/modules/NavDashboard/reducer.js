import produce from 'immer';

const INITIAL_STATE = {
  dashboard: 1,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@navDashboard/SELECT_MENU': {
        draft.dashboard = action.payload.button;
        break;
      }
      default:
    }
  });
}

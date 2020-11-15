export function selectMenuRequest(button) {
  return {
    type: '@navDashboard/SELECT_MENU',
    payload: { button },
  };
}

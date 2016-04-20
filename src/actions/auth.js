export function updateAuthStatus(isAuthorized) {
  return {
    type: 'AUTH_STATUS',
    isAuthorized
  };
}
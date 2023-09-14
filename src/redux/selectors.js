
//Filter
export const selectFilter = state => state.filter.filterName;

//contacts
export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

//auth
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectRefreshing = state => state.auth.isRefreshing;

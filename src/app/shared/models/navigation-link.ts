export enum NavigationLink {
  SEARCH_RESULTS = '/search-results',
  ADD_WORD = '/add-word',
  EDIT_WORD = '/edit-word'
}

export const headerNavigationLinkSet: Set<NavigationLink> = new Set(Object.values(NavigationLink));

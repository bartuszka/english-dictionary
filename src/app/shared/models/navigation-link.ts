export enum NavigationLink {
  SEARCH_RESULTS = '/search-results',
  ADD_WORD = '/add-word'
}

export const headerNavigationLinkSet: Set<NavigationLink> = new Set(Object.values(NavigationLink));

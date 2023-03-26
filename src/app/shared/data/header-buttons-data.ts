import { HeaderButton } from '../../header/models/header-button';
import { NavigationLink } from '../models/navigation-link';

export const headerButtonsData: HeaderButton[] = [
  {
    message: 'Search Results',
    url: NavigationLink.SEARCH_RESULTS
  },
  {
    message: 'Add Word',
    url: NavigationLink.ADD_WORD
  }
];

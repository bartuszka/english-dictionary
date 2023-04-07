import { NavigationLink } from '../models/navigation-link';
import { BchDcHeaderButtonModel } from 'bch-dc-components';

export const headerButtonsData: BchDcHeaderButtonModel[] = [
  {
    message: 'Search Results',
    url: NavigationLink.SEARCH_RESULTS
  },
  {
    message: 'Add Word',
    url: NavigationLink.ADD_WORD
  }
];

import {createContext} from 'react';

const PageNameContext = createContext({
  pageName : 'PawnShop',
  changePageName: () => {}
});

export default PageNameContext;
import { createContext, useState } from 'react';

const PageNameContext = createContext({
  pageName: 'PawnShop',
  handlePageNameChange: () => { }
});




export default PageNameContext;
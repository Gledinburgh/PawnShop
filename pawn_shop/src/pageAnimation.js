import { unmountComponentAtNode, findDOMNode } from "react-dom";

 function pageAnimation ( pageOverType) {
  return new Promise(resolve => {

     var display;
     if (pageOverType === 'remove') {display = 'none'} ;
     if (pageOverType === 'add') {display = 'block'} ;

     const pages = document.getElementsByClassName('missing');
     const topPage = document.getElementById('top-page');

     for (let i = 0; i < pages.length; i++) {
       let page = pages[i];
       page = findDOMNode(page)
       unmountComponentAtNode(page);
      setTimeout(() => {page.style.display = display}, 250 + (50 * i));
   }
   if (pageOverType === 'add') topPage.style.display= display;

      setTimeout(() => {
         topPage.style.display= display;
         resolve('resolve')
      }, 3000);
  })


}

export default pageAnimation;
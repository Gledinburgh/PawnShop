import { unmountComponentAtNode, render, findDOMNode } from "react-dom";

async function addPages (handlePageChange) {
  const pages = document.getElementsByClassName('missing');
  const topPage = document.getElementById('top-page');

  for (let i = 0; i < pages.length; i++) {
    let page = pages[i];
    page = findDOMNode(page)
    unmountComponentAtNode(page);
    setTimeout(() => {page.style.display='block'}, 250 + (50 * i));

}

   setTimeout(() => {
      topPage.style.display='block';
      handlePageChange();
   }, 3000);


}

export default addPages;
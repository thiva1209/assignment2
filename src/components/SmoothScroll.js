export const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop,
      });
    }
  };
  
//the purpose of this page is to give smooth scrolling effect when we press on buttons in navbar

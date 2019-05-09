import navbarDrawer from './navbarDrawer';

/**
 * Navbar Burger Button Click interactions.
 */

/**
 *
 * @param {string} [className]- selector for navbarButton
 */
function navbarButton(className = '.js-BurgerButton') {
  const burgerButton = document.querySelector(className);
  burgerButton.addEventListener('click', () => navbarDrawer.openNavbarDrawer());
}

export default navbarButton;

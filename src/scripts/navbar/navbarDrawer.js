import PubSub from 'pubsub-js';
import { stopEventBubblingAnd } from '../helpers/index';

const ON_NAVBAR_DRAWER_CLOSE = 'onNavbarDrawerClose';

/**
 *
 * @param {string} navbarDrawerSelector - Drawer Component
 * @param {string} navbarSpacerSelector - Spacer Component
 */

function navbarDrawer(
  navbarDrawerSelector = '.js-NavbarDrawer',
  navbarSpacerSelector = '.js-Spacer',
  closeIconSelector = '.js-CloseIcon'
) {
  const NavbarDrawer = document.querySelector(navbarDrawerSelector);
  const Spacer = NavbarDrawer.querySelector(navbarSpacerSelector);
  const CloseIcon = NavbarDrawer.querySelector(closeIconSelector);

  Spacer.addEventListener(
    'click',
    stopEventBubblingAnd(() => {
      emitNavbarDrawerOnClose();
    })
  );

  CloseIcon.addEventListener(
    'click',
    stopEventBubblingAnd(() => {
      emitNavbarDrawerOnClose();
    })
  );

  onNavbarDrawerClose(() => {
    closeNavbarDrawer();
  });
}

/**
 *
 * @param {string} [navbarDrawerSelector] - selector for navbarDrawer
 * @param {string} isOpen - is open class for drawer.
 */

function openNavbarDrawer(
  navbarDrawerSelector = '.js-NavbarDrawer',
  isOpen = 'is-open'
) {
  const NavbarDrawer = document.querySelector(navbarDrawerSelector);
  NavbarDrawer.classList.add(isOpen);
}

/**
 *
 * @param {string} [navbarDrawerSelector] - selector for navbarDrawer
 * @param {string} isOpen - is open class for drawer.
 */
function closeNavbarDrawer(
  navbarDrawerSelector = '.js-NavbarDrawer',
  isOpen = 'is-open'
) {
  const NavbarDrawer = document.querySelector(navbarDrawerSelector);
  NavbarDrawer.classList.remove(isOpen);
}

/**
 *
 * @param {Function} func
 */

function onNavbarDrawerClose(func) {
  return PubSub.subscribe(ON_NAVBAR_DRAWER_CLOSE, func);
}

/**
 *
 * @param {*} data - any
 */

function emitNavbarDrawerOnClose(data = null) {
  PubSub.publish(ON_NAVBAR_DRAWER_CLOSE, data);
}

export { ON_NAVBAR_DRAWER_CLOSE };

export default {
  initialize: navbarDrawer,
  openNavbarDrawer,
  closeNavbarDrawer,
  onNavbarDrawerClose,
  ON_NAVBAR_DRAWER_CLOSE
};

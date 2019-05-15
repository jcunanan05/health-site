function stopEventBubblingAnd(func = null) {
  return event => {
    event.preventDefault();
    event.stopPropagation();
    if (!func) return;
    func();
  };
}

export { stopEventBubblingAnd };
export default {
  stopEventBubblingAnd
};

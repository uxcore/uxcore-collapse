import cssAni from 'css-animation';

/* eslint-disable no-param-reassign */
const toggleHeightAnim = (node, show, done) => {
  let height;
  cssAni(node, '__css-animation__', {
    start() {
      node.style.overflow = 'hidden';
      if (!show) {
        node.style.height = `${node.offsetHeight}px`;
        node.style.opacity = 0;
      } else {
        height = node.offsetHeight;
        node.style.height = 0;
        node.style.opacity = 1;
      }
    },
    active() {
      node.style.height = `${show ? height : 0}px`;
    },
    end() {
      node.style.height = '';
      node.style.overflow = '';
      done();
    },
  });
};

export default {
  toggleHeightAnim,
  noop() {},
};

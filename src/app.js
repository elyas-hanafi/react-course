function throttle(fn, delay) {
  let lastInvoke = null;

  return (...args) => {
    if (lastInvoke + delay < Date.now()) {
      lastInvoke = Date.now();
      fn(...args);
    }
  };
}

function debounce(fn, delay) {
  let timeout = null;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const number = 1;
const name = 'elyas';

const data = {
  id: 1,
  name: 'elyas',
};

const userData = [{}, {}, {}];

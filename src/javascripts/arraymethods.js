import c from './helpers/data/color';

const colors = c.getColors();

const forEachFunc = () => {
  for (let i = 0; i < colors.length; i += 1) {
    console.error('for', colors[i].name);
  }
};

const init = () => {
  forEachFunc();
};

export default { init };

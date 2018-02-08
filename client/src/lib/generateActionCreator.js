export default function generateActionCreator(type, ...propNames) {
  return function actionCreator(...args) {
    const actionProps = {};

    propNames.forEach((prop, idx) => {
      actionProps[prop] = args[idx];
    });

    return { type, ...actionProps };
  };
}

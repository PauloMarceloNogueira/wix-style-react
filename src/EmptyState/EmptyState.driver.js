import ReactTestUtils from 'react-dom/test-utils';

const emptyStateDriverFactory = ({element}) => {
  const byDataHook = dataHook => element.querySelector(`[data-hook="${dataHook}"]`);

  return {
    exists: () => !!element,
    element: () => element,
    getTextContent: () => byDataHook('empty-state-name').textContent,
    click: () => ReactTestUtils.Simulate.click(element)
  };
};

export default emptyStateDriverFactory;


const emptyStateDriverFactory = ({element}) => {
  const byDataHook = dataHook => element.querySelector(`[data-hook="${dataHook}"]`);

  const getImageContainer = () => byDataHook('empty-state-image-container');
  const getTitleContainer = () => byDataHook('empty-state-title-container');
  const getSubtitleContainer = () => byDataHook('empty-state-subtitle-container');
  const getChildrenContainer = () => byDataHook('empty-state-children-container');

  const getTitle = () => getTitleContainer().firstChild;
  const getSubtitle = () => getSubtitleContainer().firstChild;
  const getImageElement = () => getImageContainer().firstChild;

  return {
    exists: () => !!element,
    element: () => element,

    getTitleText: () => getTitle().textContent,
    getSubtitleText: () => getSubtitle().textContent,

    getImageUrl: () => getImageElement().src || '',
    getImageContainerContent: () => getImageContainer().innerHTML,
    getChildrenContent: () => getChildrenContainer().innerHTML
  };
};

export default emptyStateDriverFactory;


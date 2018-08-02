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
    /** Returns `true` wheter the elemnt exists or not */
    exists: () => !!element,

    /** Returns the element */
    element: () => element,

    /** Returns the text of the title */
    getTitleText: () => getTitle().textContent,

    /** Returns the text of the subtitle */
    getSubtitleText: () => getSubtitle().textContent,

    /** Returns the URL of the image element (if persist) */
    getImageUrl: () => getImageElement().src || '',

    /** Get the contents of the element which conatins the image element */
    getImageContainerContent: () => getImageContainer().innerHTML,

    /** Get the contents of the element which conatins the children */
    getChildrenContent: () => getChildrenContainer().innerHTML
  };
};

export default emptyStateDriverFactory;


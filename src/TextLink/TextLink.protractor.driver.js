const TextLinkFactory = component => {

  return {
    element: () => component,
    getText: () => component.getText()
  };
};

export default TextLinkFactory;

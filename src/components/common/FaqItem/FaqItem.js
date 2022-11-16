import React from 'react';
import Collapsible from 'react-collapsible';

import Wrapper from './style';

// eslint-disable-next-line react/prop-types
function FaqItem({ title, children }) {
  return (
    <Wrapper>
      <Collapsible
        className="faq"
        openedClassName="faq active"
        triggerClassName="faq-title"
        triggerOpenedClassName="faq-title active"
        triggerTagName="button"
        contentInnerClassName="faq-content"
        trigger={title}
        transitionTime={300}
        easing="ease-out"
      >
        {children}
      </Collapsible>
    </Wrapper>
  );
}

export default FaqItem;

import React, { ReactElement } from 'react';
import Collapsible from 'react-collapsible';

import Wrapper from './style';

function FaqItem({
  title,
  children,
}: {
  title: string;
  children: ReactElement;
}) {
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

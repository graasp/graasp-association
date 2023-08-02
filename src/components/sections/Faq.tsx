import React from 'react';

import { Container, Section } from '@components/global';

import FaqItem from '@common/FaqItem';
import { useAssociationTranslation } from '@config/i18n/i18n';
import { ASSOCIATION, namespaces } from '@graasp/translations';
import { Trans } from 'react-i18next';

import {
  MAILTO_CONTACT_GRAASP,
  URL_GRAASP_ORG,
  URL_GRAASP_SIGNUP,
} from '@config/hrefs';

const Faq = () => {
  const { t: translateAssociation } = useAssociationTranslation();

  return (
    <Section id="faq">
      <Container>
        <h1 style={{ marginBottom: 40, color: '#211E26' }}>
          {translateAssociation(ASSOCIATION.HEADER_FAQ)}
        </h1>
        <div>
          <FaqItem title={translateAssociation(ASSOCIATION.QUESTION_PLATFORMS)}>
            <Trans
              ns={namespaces.association}
              components={[
                <a
                  href={URL_GRAASP_ORG}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Graasp
                </a>,
              ]}
            >
              {ASSOCIATION.ANSWER_PLATFORMS}
            </Trans>
          </FaqItem>
          <FaqItem title={translateAssociation(ASSOCIATION.QUESTION_GRAASP)}>
            <Trans
              ns={namespaces.association}
              components={[
                <a
                  href={URL_GRAASP_ORG}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Graasp
                </a>,
              ]}
            >
              {ASSOCIATION.ANSWER_GRAASP}
            </Trans>
          </FaqItem>
          <FaqItem
            title={translateAssociation(ASSOCIATION.QUESTION_GETTING_STARTED)}
          >
            <Trans
              ns={namespaces.association}
              components={[
                <a
                  href={URL_GRAASP_SIGNUP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>,
              ]}
            >
              {ASSOCIATION.ANSWER_GETTING_STARTED}
            </Trans>
          </FaqItem>
          <FaqItem title={translateAssociation(ASSOCIATION.QUESTION_COST)}>
            <Trans
              ns={namespaces.association}
              components={[
                <a
                  href={URL_GRAASP_ORG}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Graasp
                </a>,
                <a href={MAILTO_CONTACT_GRAASP}>contact@graasp.org</a>,
              ]}
            >
              {ASSOCIATION.ANSWER_COST}
            </Trans>
          </FaqItem>
          <FaqItem title={translateAssociation(ASSOCIATION.QUESTION_TRAINING)}>
            <Trans
              ns={namespaces.association}
              components={[
                <a href={MAILTO_CONTACT_GRAASP}>contact@graasp.org</a>,
              ]}
            >
              {ASSOCIATION.ANSWER_TRAINING}
            </Trans>
          </FaqItem>
          <FaqItem title={translateAssociation(ASSOCIATION.QUESTION_BASE)}>
            <Trans ns={namespaces.association}>{ASSOCIATION.ANSWER_BASE}</Trans>
          </FaqItem>
        </div>
      </Container>
    </Section>
  );
};

export default Faq;

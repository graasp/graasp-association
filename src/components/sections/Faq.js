import React from 'react';

import { Section, Container } from '@components/global';

import { useTranslation } from 'react-i18next';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'What does Graasp do?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    title: "What are Graasp's products?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    title: 'Who uses Graasp?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    title: 'How can I get started?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    title: 'How much does it cost?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    title: 'Where is Graasp based?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
];

const Faq = () => {
  const { t } = useTranslation();

  return (
    <Section id="faq">
      <Container>
        <h1 style={{ marginBottom: 40, color: '#211E26' }}>
          {t('Frequently Asked Questions')}
        </h1>
        <div>
          {FAQS.map(({ title, content }) => (
            <FaqItem title={t(title)} key={title}>
              {t(content)}
            </FaqItem>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Faq;

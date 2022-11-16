import React from 'react';
import PropTypes from 'prop-types';

function TranslationPair({ englishCallback, frenchCallback }) {
  return (
    <div style={{ display: 'flex', marginRight: 20, marginLeft: 0 }}>
      <button
        style={{
          color: 'white',
          opacity: 0.7,
          fontSize: 14,
          marginRight: 2,
          cursor: 'pointer',
        }}
        type="button"
        onClick={englishCallback}
      >
        {' '}
        EN
      </button>
      <button
        style={{
          color: 'white',
          opacity: 0.7,
          fontSize: 14,
          cursor: 'default',
        }}
        type="button"
      >
        |
      </button>
      <button
        style={{
          color: 'white',
          opacity: 0.7,
          fontSize: 14,
          marginLeft: 2,
          cursor: 'pointer',
        }}
        type="button"
        onClick={frenchCallback}
      >
        FR
      </button>
    </div>
  );
}

TranslationPair.propTypes = {
  englishCallback: PropTypes.func.isRequired,
  frenchCallback: PropTypes.func.isRequired,
};

export default TranslationPair;

import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  width: PropTypes.number,
};

function AutoHeightFastImage({source, width}) {
  const [uri, setUri] = useState('');
  const [dimension, setDimension] = useState({
    width: 1,
    height: 1,
  });

  useEffect(function () {
    const {uri} = Image.resolveAssetSource(source);
    Image.getSize(uri, function (width, height) {
      setDimension({
        width: Number(width),
        height: Number(height),
      });
    });

    setUri(uri);
  }, []);

  return (
    !!uri && (
      <FastImage
        source={{uri}}
        style={{width, height: (width * dimension.height) / dimension.width}}
      />
    )
  );
}

AutoHeightFastImage.propTypes = propTypes;

export default React.memo(AutoHeightFastImage);

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { PlaceholderLoading, PlaceholderContent } from './styles';

export default function Loading({ ...rest }) {
  return (
    <PlaceholderLoading {...rest}>
      <PlaceholderContent />
    </PlaceholderLoading>
  );
}

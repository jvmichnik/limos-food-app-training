import React from 'react';
import PropTypes from 'prop-types';
import {
  LinkButtonContainer,
  PrimaryButtonContainer,
  ActionButtonContainer,
} from './styles';

export default function PrimaryButton({ children, loading, ...rest }) {
  return (
    <PrimaryButtonContainer disabled={loading} {...rest}>
      {loading ? 'Carregando' : children}
    </PrimaryButtonContainer>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
PrimaryButton.defaultProps = {
  loading: false,
};

export function LinkButton({ children, linkTo }) {
  return <LinkButtonContainer to={linkTo}>{children}</LinkButtonContainer>;
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export function ActionButton({ children, active, ...rest }) {
  return (
    <ActionButtonContainer active={active} {...rest}>
      {children}
    </ActionButtonContainer>
  );
}

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

ActionButton.defaultProps = {
  active: false,
};

import React from 'react';
import { useSelector } from 'react-redux';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

import styled from 'styled-components';
import {StyledMessage} from "./StyledSnackbarComponents";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const backgroundColors = {
  success: 'green',
  error: 'red',
  info: 'blue',
  warning: 'orange',
};

const StyledSnackbarContent = styled(SnackbarContent)`
  && {
    ${ props => props.variantbg && `background: ${backgroundColors[props.variantbg]}` };
  }
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SnackbarContentWrapper = props => {
  const { onClose } = props;
  const { variant, message } = useSelector(state => state.snackbar);
  const Icon = variantIcon[variant];

  return (
    <StyledSnackbarContent
      variantbg={variant}
      message={
        <StyledSpan>
          <Icon/>
          <StyledMessage>{message}</StyledMessage>
        </StyledSpan>
      }
      action={[
        <IconButton key="close" color="inherit" onClick={onClose}>
          <CloseIcon/>
        </IconButton>,
      ]}
    />
  );
};

export default SnackbarContentWrapper;
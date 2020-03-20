import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Card, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const StyledCard = styled(Card)`
  background: ${({ theme }) => theme.colors.grey};
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

function InviteView(props) {
  const [copied, copy] = useState(false);
  const input = useRef();

  const handleClick = () => {
    input.current.focus();
    input.current.select();
    input.current.setSelectionRange(0, 99999);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  };

  return (
    <StyledCard className="p-5">
      <h1 className="mb-5">Send this link to your friend and play together</h1>
      <InputGroup size="lg">
        <Input innerRef={input} readOnly value={window.location.href} />
        <InputGroupAddon addonType="append">
          <Button onClick={handleClick} color="success">
            Copy link
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </StyledCard>
  );
}

InviteView.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(InviteView);

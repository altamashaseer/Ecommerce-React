import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { styled } from 'styled-components';

const CartAmountToggle = ({ amount, setAmount }) => {
  const handleIncrease = () => {
    if (amount < 5) {
      setAmount((prevAmount) => prevAmount + 1);
    }
  };

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  return (
    <Wrapper className="amount-toggle">
      <button onClick={handleDecrease}>
        <FaMinus className="amount-icon" />
      </button>
      <span className="amount-style">{amount}</span>
      <button onClick={handleIncrease}>
        <FaPlus className="amount-icon" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .amount-style {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.btn};
  }

  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }

  .amount-icon {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.btn};
  }
`;

export default CartAmountToggle;

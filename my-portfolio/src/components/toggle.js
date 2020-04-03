// Toggle.js
import React from "react";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "../images/moon.svg";
import { ReactComponent as SunIcon } from "../images/sun.svg";
// import { lightTheme, darkTheme } from "./theme";

const Toggle = ({ theme, toggleMode }) => {
  const isLight = theme === "light";
  return (
    <ToggleButton onClick={toggleMode}>
      <SunIcon />
      <MoonIcon />
    </ToggleButton>
  );
};

export default Toggle;

const ToggleButton = styled.button`
  background: #fff;
   /* ${({ theme }) => theme.gradient}; */
  /* border: 2px solid ${({ theme }) => theme.toggleBorder}; */
  border-radius: 30px;
  border-style: none;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 4rem;
  height: 2.2rem;

  svg {
    height: auto;
    width: 1.2rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }
  }
`;

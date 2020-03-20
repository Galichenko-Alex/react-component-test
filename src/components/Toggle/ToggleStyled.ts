import React from "react";
import styled from 'styled-components';
import { IToggle } from "./Toggle";

export const ToggleWrap: React.FC<IToggle> = styled.label`
    position: relative;
    display: inline-flex;
    flex-shrink: 0;
    height: 26px;
    width: 47px;
    border-radius: 32px;
    background: ${({ notActiveBg }) => notActiveBg || '#d6d6d6'};
    overflow: hidden;
    cursor: pointer;
    
    ${({ disabled }) => disabled && `
        opacity: 0.6;
        cursor: not-allowed;
    `};
    
    input {
      display: none;
    }

    input:checked ~ .active-bg {
       opacity: 1;
    }
    
    input:checked ~ .toggle-inner .indicator {
      right: calc(100% - 19px - 5px);
    }
    
    .toggle-inner {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 2;
    }
    
    .active-bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${({ activeBgColor }: IToggle) => activeBgColor || '#19A8E0'};
      opacity: 0;
      transition: opacity 0.35s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    }
    
    .indicator {
      position: absolute;
      top: 50%;
      right: 5px;
      height: 19px;
      width: 19px;
      background: ${({ indicatorColor } : IToggle) => indicatorColor || '#fff'};
      border-radius: 50%;
      transform: translateY(-50%);
      transition: right 0.35s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    }
`;

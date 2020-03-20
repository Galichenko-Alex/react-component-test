import React from 'react';
import { ToggleWrap } from './ToggleStyled'

export interface IToggle {
    className?: string;
    activeBgColor?: string;
    notActiveBg?: string;
    indicatorColor?: string;
    disabled?: boolean;
    checked?: boolean;
    name?: string;
    tabIndex?: string;
    onChange?: (e: React.SyntheticEvent) => void;
    onFocus?: (e: React.SyntheticEvent) => void;
    onBlur?: (e: React.SyntheticEvent) => void;
}

function Toggle({
    className,
    name,
    checked,
    tabIndex,
    disabled,
    onChange,
    onFocus,
    onBlur,
    activeBgColor,
    notActiveBg,
    indicatorColor
}: IToggle) {

    return (
        <ToggleWrap
            className={className}
            activeBgColor={activeBgColor}
            notActiveBg={notActiveBg}
            indicatorColor={indicatorColor}
            disabled={disabled}
            tabIndex={tabIndex}
            onFocus={onFocus}
            onBlur={onBlur}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                name={name}
                disabled={disabled}
            />
            <div className="toggle-inner">
                <div className="indicator"/>
            </div>
            <div className="active-bg"/>
        </ToggleWrap>
    )
}

Toggle.defaultProps = {
    checked: false,
    tabIndex: '0'
};

export { Toggle };

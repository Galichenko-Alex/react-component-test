import React from 'react';
import {Toggle} from "../../components/Toggle/Toggle";
import {
    OptionSectionWrap,
    OptionSectionBody,
    OptionSectionTitle,
    OptionSectionSubTitle,
    OptionSectionToggle,
    OptionSectionToggleText,
    OptionSectionDescription,
} from './OptionSectionStyled';

interface IOptionSection {
    className?: string;
    title?: string | React.ReactNode;
    question?: string | React.ReactNode;
    description?: string | React.ReactNode;
    optionText?:string | React.ReactNode;
    textColor?: string;
    bgColorSection?: string;
    bgColorOptionSection?: string;
    activeOptionBgColor?: string;
    notActiveOptionBgColor?: string;
    disabledOption?: boolean;
    isCheckedOption?: boolean;
    onChangeOption?: (e: React.SyntheticEvent) => void;
    onFocusOption?: (e: React.SyntheticEvent) => void;
    onBlurOption?: (e: React.SyntheticEvent) => void;
}

function OptionSection({
    className,
    title,
    question,
    description,
    textColor,
    bgColorSection,
    bgColorOptionSection,
    optionText,
    isCheckedOption,
    disabledOption,
    activeOptionBgColor,
    notActiveOptionBgColor,
    onChangeOption,
    onFocusOption,
    onBlurOption,
}: IOptionSection) {

    const textOption = optionText || (isCheckedOption ? 'Enabled' : 'Disabled');

    return (
        <OptionSectionWrap
            className={className}
            textColor={textColor}
            bgColorSection={bgColorSection}
        >
            { title && <OptionSectionTitle>{title }</OptionSectionTitle> }
            <OptionSectionBody>
                {
                    question && (
                        <OptionSectionSubTitle>
                            { question }
                        </OptionSectionSubTitle>
                    )
                }

                <OptionSectionToggle bgColorOptionSection={bgColorOptionSection}>
                    <OptionSectionToggleText>
                        { textOption }
                    </OptionSectionToggleText>
                    <Toggle
                        checked={isCheckedOption}
                        onChange={onChangeOption}
                        onFocus={onFocusOption}
                        onBlur={onBlurOption}
                        disabled={disabledOption}
                        activeBgColor={activeOptionBgColor}
                        notActiveBg={notActiveOptionBgColor}
                    />
                </OptionSectionToggle>

                {
                    description && (
                        <OptionSectionDescription>
                            { description }
                        </OptionSectionDescription>
                    )
                }
            </OptionSectionBody>
        </OptionSectionWrap>
    );
}

export { OptionSection };

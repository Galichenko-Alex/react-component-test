import React from 'react';
import { action } from '@storybook/addon-actions';
import { Store, State } from "@sambego/storybook-state";
import { OptionSection } from "./OptionSection";

export default {
    title: 'OptionCard',
    component: OptionSection
};

const store = new Store({
    active: true,
});

export const OptionCard = () => (
    <State store={store}>
        {
            state => [
                <OptionSection
                    isCheckedOption={state.active}
                    onChangeOption={(e) => {
                        store.set({ active: !state.active })
                        action(`onChange toggle, checked ${!state.active}`)(e);
                    }}
                    onFocusOption={action('onFocus toggle')}
                    onBlurOption={action('onBlur toggle')}
                    title={<span>Eat Now Features &#127869;</span>}
                    question='Do you want diners to be able to request tables?'
                    description='This setting determines whether or not diners can request to ‘Eat Now’ at your restaurant.'
                />,
                <OptionSection
                    isCheckedOption={state.active}
                    onChangeOption={(e) => {
                        store.set({ active: !state.active })
                        action(`onChange toggle, checked ${!state.active}`)(e);
                    }}
                    title={<span>Eat Now Features 2</span>}
                    question='Do you want diners?'
                    description='This setting determines'
                    textColor='purple'
                    bgColorSection='#19A8E0'
                />,
                <OptionSection
                    isCheckedOption={state.active}
                    onChangeOption={(e) => {
                        store.set({ active: !state.active })
                        action(`onChange toggle, checked ${!state.active}`)(e);
                    }}
                    title={<span>Eat Now Features 2</span>}
                    bgColorOptionSection='purple'
                />
            ]
        }
    </State>
);

/* <Meta title="OptionSection" />

Here's some _markdown_!

# Preview

<Preview>
  <Story name="OptionSection">
    <OptionSection
        isCheckedOption={state.active}
        onChangeOption={(e) => {
            store.set({ active: !state.active })
            action(`onChange toggle, checked ${!state.active}`)(e);
        }}
        title={<span>Eat Now Features &#127869;</span>}
        question='Do you want diners to be able to request tables?'
        description='This setting determines whether or not diners can request to ‘Eat Now’ at your restaurant.'
    />
  </Story>
</Preview>

# Props

<Props of={OptionSection} */



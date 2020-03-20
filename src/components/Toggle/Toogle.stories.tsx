import React from "react";
import { State, Store } from "@sambego/storybook-state";
import { Toggle } from "./Toggle";
import { action } from "@storybook/addon-actions";

export default {
    title: 'ToggleButton',
    component: Toggle
};

const store = new Store({
    active: true,
});

export const ToggleButton = () => (
    <State store={store}>
        {
            state => [
                <div>
                    <Toggle
                        checked={state.active}
                        onChange={(e) => {
                            store.set({ active: !state.active });
                            action(`onChange toggle, checked ${!state.active}`)(e);
                        }}
                    />
                </div>,
                <div>
                    <Toggle
                        checked={state.active}
                        onChange={(e) => {
                            store.set({ active: !state.active });
                            action(`onChange toggle, checked ${!state.active}`)(e);
                        }}
                        indicatorColor='black'

                    />
                </div>,
                <div>
                    <Toggle
                        checked={state.active}
                        onChange={(e) => {
                            store.set({ active: !state.active });
                            action(`onChange toggle, checked ${!state.active}`)(e);
                        }}
                        activeBgColor='purple'
                        notActiveBg='red'
                    />
                </div>,
                <div>
                    <Toggle
                        checked={state.active}
                        onChange={(e) => {
                            store.set({ active: !state.active });
                            action(`onChange toggle, checked ${!state.active}`)(e);
                        }}
                        activeBgColor='purple'
                        notActiveBg='red'
                        disabled
                    />
                </div>,
            ]
        }
    </State>
);

/* <Meta title="OptionSection" />

Here's some _markdown_!

# Preview

<Preview>
  <Story name="Toggle">
    <Toggle
        checked={state.active}
        onChange={(e) => {
            store.set({ active: !state.active })
            action(`onChange toggle, checked ${!state.active}`)(e);
        }}
    />
  </Story>
</Preview>

# Props

<Props of={Toggle}  */

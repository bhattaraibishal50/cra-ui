import React from "react"
import { action } from "@storybook/addon-actions"
import { ButtonComponent } from "."

export default {
    title: "Components/Atoms",
    component: ButtonComponent,
    parameters: {
        docs: {
            description: {
                component: "A simple button component",
            },
        },
    },
    args: {
        type: "primary",
    },
    argTypes: {
        color: {
            description: "Color of the text",
            control: "color",
        },
    },
}
const Template = (args: any) => (
    <ButtonComponent onClick={action("onClickAction")} {...args}>
        {"Button"}
    </ButtonComponent>
)
export const Button = Template.bind({})

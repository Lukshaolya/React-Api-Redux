import UIButton from "./UIButton";

export default {
  title: 'Ui-Kit/UIButton',
  component: UIButton,
}

const Template = (args) => <UIButton {...args} />

export const Primary = Template.bind({});

Primary.args = {
  text: 'Hello',
  theme: 'dark',
}
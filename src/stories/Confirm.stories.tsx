import { Story, Meta } from '@storybook/react';
import Confirm, { ConfirmProps } from '../components/Confirm/Confirm';

export default {
  title: 'Example/Confirm',
  component: Confirm,
} as Meta;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({})
Default.args = {
  title: 'Post não encontrado',
  description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.'
}
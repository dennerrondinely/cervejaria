import { Story, Meta } from '@storybook/react/types-6-0';

import Message, { MessageProps } from '.';

export default {
  title: 'Message',
  component: Message
} as Meta;

export const Default: Story<MessageProps> = (args) => <Message {...args} />;

Default.args = {
  text: 'A lista de cervejaria não foi encontrada'
};

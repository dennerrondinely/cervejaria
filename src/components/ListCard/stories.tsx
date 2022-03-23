import { Story, Meta } from '@storybook/react/types-6-0';
import { brewery } from 'mock/breweries';

import ListCard, { ListCardProps } from '.';

export default {
  title: 'ListCard',
  component: ListCard,
  argTypes: {
    brewery: {
      type: ''
    }
  }
} as Meta;

export const Default: Story<ListCardProps> = (args) => <ListCard {...args} />;

Default.args = {
  brewery
};

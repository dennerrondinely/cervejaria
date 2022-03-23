import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Rating, { RatingProps } from '.';

export default {
  title: 'Rating',
  component: Rating
} as Meta;

export const Default: Story<RatingProps> = (args) => <Rating {...args} />;

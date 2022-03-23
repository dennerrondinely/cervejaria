import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import List, { ListProps } from '.';
import { breweries } from 'mock/breweries';
import styled from 'styled-components';

export default {
  title: 'List',
  component: List,
  argTypes: {
    breweries: {
      type: ''
    }
  }
} as Meta;

const Wrapper = styled.div`
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Default: Story<ListProps> = (args) => (
  <Wrapper>
    <List {...args} />
  </Wrapper>
);

Default.args = {
  breweries,
  pageSize: 25,
  total: 200
};

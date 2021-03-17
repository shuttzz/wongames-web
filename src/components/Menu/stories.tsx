import Menu, { MenuProps } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Default: Story<MenuProps> = (args) => <Menu {...args} />;

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
  },
};

import Logo, { LogoProps } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Logo',
  component: Logo,
} as Meta;

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />;

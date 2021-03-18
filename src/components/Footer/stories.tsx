import Footer from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
);

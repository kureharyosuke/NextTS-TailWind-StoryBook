import React from 'react'
import { Card, CardProps } from './Card'
import { Meta, Story } from '@storybook/react'

// 스토리북에 스토리를 나열하고 정보를 제공하는 방법을 설명합니다.
export default {
  title: 'atoms/Card',
  component: Card,
  argTypes: {
    variant: { control: 'select' },
  },
} as Meta
// 명명된 내보내기를 사용하여 구성 요소의 스토리 정의
export const Default: Story<CardProps> = (args) => <Card {...args} />
// 기본 스토리에 대한 기본 인수 정의
Default.args = {
  variant: 'elevation',
  classes: 'w-64 h-64',
}

//
export const WithText: Story<CardProps> = (args) => (
  <Card {...args}>
    <div>
      <span>Story that shows Card component with text</span>
    </div>
  </Card>
)

// WithText 구성 요소의 기본 인수 정의 및 기본 구성 요소에서 인수 상속
WithText.args = {
  ...Default.args,
  classes: 'w-64 h-64 text-xl',
}

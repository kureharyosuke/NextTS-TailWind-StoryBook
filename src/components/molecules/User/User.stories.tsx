import React from 'react'
import { Meta, Story } from '@storybook/react'
import { User, UserProps } from './User'

const UserMockData = {
  id: 1,
  fullName: 'Luke Skywalker',
  imgUrl:
    'https://pbs.twimg.com/profile_images/1173120083553484800/oyQ6z42t_400x400.jpg',
  occupation: 'Developer',
}

export default {
  title: 'molecules/User',
  component: User,
} as Meta

export const Default: Story<UserProps> = (args) => <User {...args} />
Default.args = {
  user: UserMockData,
}

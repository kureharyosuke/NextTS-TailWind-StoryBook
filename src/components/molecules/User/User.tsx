import React, { FC } from 'react'
// import dynamic from 'next/dynamic'
// import Image from 'next/image'
import { Card } from '../../atoms/Card/Card'
import { Pill } from '../../atoms/Pill/Pill'
// const DynamicCard = dynamic(() => import('../../atoms/Card'))
// const DynamicPill = dynamic(() => import('../../atoms/Pill/Pill'))

export interface UserProps {
  user: {
    id: number
    imgUrl: string
    fullName: string
    occupation: string
  }
}

export const User: FC<UserProps> = ({ user }) => {
  return (
    <div className="flex flex-col">
      <Card
        variant="elevation"
        classes="w-64 h-64 flex flex-col items-center py-10"
      >
        {/* <Image
          src={user.imgUrl}
          alt="user"
          className="w-24 h-24 mb-2 rounded-full object-cover"
          layout="fill"
        /> */}
        {/* <Image src="/me.png" alt="Picture of the author" width={500} height={500} /> */}
        <img
          className="w-24 h-24 mb-2 rounded-full object-cover"
          src={user.imgUrl}
          alt="user"
        />
        <Pill
          classes="bg-black text-white "
          text={user.occupation}
          size="small"
        />
        <span className="text-xl mt-4">{user.fullName}</span>
      </Card>
    </div>
  )
}

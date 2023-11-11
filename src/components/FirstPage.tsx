import React from 'react'
import Image from 'next/image'

import { cn } from '@/utils/cn'

import HumanImage from '../assets/images/human.webp'
import Human1Image from '../assets/images/img1.webp'
import Human2Image from '../assets/images/img2.webp'
import Human3Image from '../assets/images/img3.webp'
import Human4Image from '../assets/images/img4.webp'
import Human5Image from '../assets/images/img5.webp'
import Human6Image from '../assets/images/img6.webp'
import Human7Image from '../assets/images/img7.webp'
import Human8Image from '../assets/images/img8.webp'
import Human9Image from '../assets/images/img9.webp'
import Human10Image from '../assets/images/img10.webp'
import Human11Image from '../assets/images/img11.webp'
import Human12Image from '../assets/images/img12.webp'
import Human13Image from '../assets/images/img13.webp'
import Human14Image from '../assets/images/img14.webp'
import Human15Image from '../assets/images/img15.webp'
import Human16Image from '../assets/images/img16.webp'

const OFFSET_Y = 10
const OFFSET_X = 4

let images = [
  { src: Human9Image, pos: { top: 20 - OFFSET_X * 0, left: 10 } },
  { src: Human8Image, pos: { top: 20 - OFFSET_X * 1, left: 30 } },
  { src: Human7Image, pos: { top: 20 - OFFSET_X * 2, left: 50 } },
  { src: Human6Image, pos: { top: 20 - OFFSET_X * 3, left: 70 } },
  { src: Human5Image, pos: { top: 20 - OFFSET_X * 4, left: 90 } },

  { src: Human4Image, pos: { top: 40 - OFFSET_X * 0, left: 20 } },
  { src: Human3Image, pos: { top: 40 - OFFSET_X * 1, left: 40 } },
  { src: Human2Image, pos: { top: 40 - OFFSET_X * 2, left: 60 } },
  { src: Human13Image, pos: { top: 40 - OFFSET_X * 3, left: 80 } },
  { src: Human16Image, pos: { top: 40 - OFFSET_X * 4, left: 100 } },

  { src: Human10Image, pos: { top: 60 - OFFSET_X * -1, left: 0 } },
  { src: Human15Image, pos: { top: 60 - OFFSET_X * 0, left: 10 } },
  { src: Human14Image, pos: { top: 60 - OFFSET_X * 1, left: 30 } },
  { src: HumanImage, pos: { top: 94, left: 50 } },
  { src: Human12Image, pos: { top: 60 - OFFSET_X * 3, left: 70 } },
  { src: Human11Image, pos: { top: 60 - OFFSET_X * 4, left: 90 } },

  { src: Human10Image, pos: { top: 80 - OFFSET_X * 0, left: 20 } },
  { src: Human9Image, pos: { top: 80 - OFFSET_X * 1, left: 40 } },
  { src: Human8Image, pos: { top: 80 - OFFSET_X * 2, left: 60 } },
  { src: Human7Image, pos: { top: 80 - OFFSET_X * 3, left: 80 } },
  { src: Human6Image, pos: { top: 80 - OFFSET_X * 4, left: 100 } },

  { src: Human5Image, pos: { top: 100 - OFFSET_X * 0, left: 10 } },
  { src: Human4Image, pos: { top: 100 - OFFSET_X * 1, left: 30 } },
  { src: Human3Image, pos: { top: 100 - OFFSET_X * 2, left: 50 } },
  { src: Human2Image, pos: { top: 100 - OFFSET_X * 3, left: 70 } },
  { src: Human1Image, pos: { top: 100 - OFFSET_X * 4, left: 90 } },
]

const FirstPage = () => {
  return (
    <div className="w-full h-full relative bg-pink-100">
      <div
        className={cn(
          'absolute',
          'min-w-full min-h-full aspect-[1.5/1]',
          'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        )}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            className={cn('absolute top-0 w-[45%]', 'animate-jump')}
            style={{
              top: image.pos.top + '%',
              left: image.pos.left + '%',
              animationDelay: `${-0.1 * idx}s`,
            }}
          >
            <div
              className={cn(
                'absolute w-full -translate-x-1/2 -translate-y-1/2'
              )}
            >
              <Image
                src={image.src}
                alt=""
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FirstPage

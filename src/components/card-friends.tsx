'use client'
import React from 'react'
import Image from 'next/image'

import { GiftIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

import type { UserCard } from '@/types'
import Link from 'next/link'

export const CardFriends = ({
  image,
  description,
  name,
  birthdate,
}: UserCard) => {
  const [textOpen, setTextOpen] = React.useState(false)

  return (
    <Link
      href={`/u/${name}`}
      className="w-full flex gap-4 flex-col py-4 px-8 rounded-lg bg-zinc-900"
    >
      <div className="flex gap-6 items-center justify-between">
        <Image
          src={image}
          alt={`Ìmagem do ${name}`}
          width={64}
          height={64}
          className="rounded-md"
        />
        <div>
          <h1 className="text-xl font-bold text-zinc-200">{name}</h1>
          <p className="text-sm text-zinc-300">
            O aniversário de{' '}
            <span className="font-bold text-zinc-200">{name}</span> é dia{' '}
            <span className="font-bold text-zinc-200">{birthdate}</span> e ele
            gosta de {description}
          </p>
        </div>
        {textOpen ? (
          <XCircleIcon
            onClick={() => setTextOpen(false)}
            className="w-12 h-12 p-2 rounded-md hover:bg-zinc-800 ease-out duration-150 cursor-pointer"
          />
        ) : (
          <GiftIcon
            onClick={() => setTextOpen(true)}
            className="w-12 h-12 p-2 rounded-md hover:bg-zinc-800 ease-out duration-150 cursor-pointer"
          />
        )}
      </div>
      <div>
        {textOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <textarea
              className="w-full h-full rounded-lg bg-zinc-950 px-4 py-2"
              placeholder="Deseje um feliz aniversário para seu amigo!"
            />
          </motion.div>
        )}
      </div>
    </Link>
  )
}

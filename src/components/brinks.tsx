'use client'
import Image from 'next/image'
import React from 'react'

interface PageProps {
  params: string
}

const followers: string[] = []

const Brinks = ({ params }: PageProps) => {
  const [, rerender] = React.useState({})

  const handleFollowing = (event: any) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries()) as any

    if (followers.includes(data.follower)) {
      followers.splice(followers.indexOf(data.follower))
      rerender({})
    } else {
      followers.push(data.follower)
      rerender({})
    }

    return true
  }

  return (
    <div className="w-full min-h-screen flex center relative">
      <h1>@{params}</h1>
      <div className="w-16 h-16 bg-gray-500 rounded-lg overflow-hidden">
        <Image
          src={`https://github.com/${params}.png`}
          className="w-full"
          alt={`Imagem de perfil do ${params}`}
          width={64}
          height={64}
        />
      </div>
      <form onSubmit={handleFollowing}>
        <input type="hidden" name="follower" value={params} />
        <button type="submit" className="h-10 px-4 bg-indigo-500 rounded-lg">
          {followers.includes(params) ? 'Deixar de seguir' : 'Adicionar'}
        </button>
      </form>
    </div>
  )
}

export default Brinks

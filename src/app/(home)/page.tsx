import React from 'react'

import { CardFriends } from '@/components/card-friends'
import { Home } from '@/components/containers'

// isso aqui é uma array function que é uma funcção
const HomePage = () => {
  // aqui retorna o componente
  return (
    // aqui usa um React.Fragment
    <React.Fragment>
      <Home.Header />
      <main className="flex flex-col justify-start items-center min-h-screen md:p-24 p-8">
        <div className="w-full flex flex-col gap-4 max-w-2xl">
          <CardFriends
            name="Daniel Gabriel"
            image="https://github.com/revogabe.png"
            birthdate="12/12"
            description="comer banana"
            nickname="revogabe"
          />
          <CardFriends
            name="João Pedro"
            image="https://github.com/joaom00.png"
            birthdate="12/12"
            description="brincar com briquendos 🔥"
            nickname="joaom00"
          />
          <CardFriends
            name="Luiz Felipe"
            image="https://github.com/meluiz.png"
            birthdate="12/12"
            description="xingar pessoas"
            nickname="meluiz"
          />
          <CardFriends
            name="Caixeta"
            image="https://github.com/caixetadev.png"
            birthdate="12/12"
            description="amar pessoas"
            nickname="caixetadev"
          />
        </div>
        <div className="w-16 h-16 bg-gray-500"></div>
      </main>
    </React.Fragment>
  )
}

export default HomePage

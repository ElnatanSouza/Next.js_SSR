import React from 'react'
import Link from 'next/link'

import GlobalStyle from '../components/GlobalStyles'

import Ameno from './EraAmeno'
import Saudacao from './Saudacao'



const Home = (props) => {
  return (

    <div>
      <GlobalStyle />
      <header className="headerContainer">
        <img src={props.avatar_url} />
        <Link href="https://github.com/ElnatanSouza?tab=repositories">
          <a target="_blank"><h1>Elnatan Souza</h1></a>
        </Link>
      </header>
      <div>
        <Saudacao />

        <p>Clica no nome da musica para ouvir-la no Youtube, assim vc pode <br /> acompanhar a letra aqui.😆</p>
        <hr />

        <Ameno />

        <p>Acho que é isso então! Fui. . .</p>
      </div>
    </div>

  )
}

/* 
Essa API precisa de autenticação, e tem limites diarios de requisição por IP
então se retornar erro no avatar_url é porque suas requisições já chegou no limite,
para resolver isso é so trocar de IP (usar outra internet) ou aguardar o tempo para
nova requisição na API. . .
*/

export async function getStaticProps() {
  const githubResp = await fetch('https://api.github.com/users/ElnatanSouza').then(res => res.json())
  return {
    props: {
      avatar_url: githubResp.avatar_url,
    }
  }
}

export default Home

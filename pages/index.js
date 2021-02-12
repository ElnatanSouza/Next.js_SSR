import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import GlobalStyle from '../components/GlobalStyles'

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
        <h3>Olá seja bem vindo(a) a minha pagina!</h3>
        <p>Esta página foi desenvolvida para testar meus conhecimentos em Next/SSR.🤗</p>
        <hr />
        <p>Se você clicar no meu nome, vai redirecionar para a pagina de repositorios <br /> do meu GitHub. 😍</p>
        <hr />
        <p>Vou colocar aqui varias informações, porque não quero colocar lorem ipsum. . . 😙</p>
        <hr />
        <p>Bem que eu poderia colocar um dorimé aqui neh? Então lá vai. . . 😎</p>

        <Link href="https://www.youtube.com/watch?v=onjPLuZp6hY">
          <a target="_blank"><h1>Era - Ameno</h1></a>
        </Link>

        <p>Clica no nome da musica para ouvir-la no Youtube, assim vc pode <br /> acompanhar a letra aqui.😆</p>
        <hr />

        <p className="letra">
          Dori me
          Interimo adapare
          Dori me
          Ameno ameno
          Latire latiremo
          Dori me
          <br />
          <br />

          Ameno
          Omenare imperavi
          Ameno
          Dimere dimere
          Matiro matiremo
          Ameno
          <br />
          <br />

          Omenare imperavi emulari
          Ameno
          Omenare imperavi emulari
          <br />
          <br />
          Ameno
          Ameno dore
          Ameno dori me
          Ameno dori me
          <br />
          <br />
          Ameno dom
          Dori me reo
          Ameno dori me
          Ameno dori me
          Dori me am
          <br />
          <br />
          Ameno
          Ameno
          <br />
          <br />
          Ameno
          Omenare imperavi ameno
          Dimere dimere matiro
          Matiremo
          Ameno
          <br />
          <br />
          Omenare imperavi emulari
          Ameno
          Omenare imperavi emulari
          <br />
          <br />
          Ameno
          Ameno dore
          Ameno dori me
          Ameno dori me
          <br />
          <br />
          Ameno dom
          Dori me reo
          Ameno dori me
          Ameno dori me
          Dori me am
          <br />
          <br />
          Ameno
          Ameno
          Ameno dori me
          Ameno dori me
          Dori me
          <br />
          <br />
          Ameno
          Ameno dore
          Ameno dori me
          Ameno dori me
          <br />
          <br />
          Ameno dom
          Dori me reo
          Ameno dori me
          Ameno dori me
          <br />
          <br />
          Ameno
          Ameno
          Ameno
          Ameno dori me
          Ameno
          Ameno dori me
          <br />
          <br />
          Ameno dom
          Dori me reo
          Ameno
          Ameno dori me
          Ameno
          Ameno dori me
          <br />
          <br />
          Dori me am
        </p>
        <hr />

        <p>Acho que é isso então! Fui. . .</p>
      </div>
    </div>

  )
}

export async function getStaticProps() {
  const githubResp = await fetch('https://api.github.com/users/ElnatanSouza').then(res => res.json())
  return {
    props: {
      avatar_url: githubResp.avatar_url,
    }
  }
}

export default Home

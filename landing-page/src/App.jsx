import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import "./App.css"

function App() {
  return (
    <div>

      <header>
        <div className="logo">DEV<span>+</span></div>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#aprendizado">Aprendizados</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#mercado">Mercado</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>


      <main>

        <section className="hero" id="inicio">
          <div className="hero-text">
            <p className="destaque">TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</p>

            <h1>
              Transforme ideias em <span>sistemas.</span>
            </h1>

            <p>
              Aprenda programação, tecnologia e desenvolvimento de sistemas
              para construir soluções e começar sua jornada na área de TI.
            </p>

            <a href="#sobre" className="botao">
              Conheça o curso
            </a>
          </div>

          <div className="hero-card">
            <div className="codigo">
              <p>&lt;desenvolvedor&gt;</p>
              <h2>Seu futuro começa aqui.</h2>
              <p>Aprender • Criar • Desenvolver</p>
              <p>&lt;/desenvolvedor&gt;</p>
            </div>
          </div>
        </section>


        <section className="sobre" id="sobre">
          <div>
            <p className="titulo-pequeno">SOBRE O CURSO</p>
            <h2>O que é Desenvolvimento de Sistemas?</h2>
          </div>

          <div className="sobre-texto">
            <p>
              Desenvolvimento de Sistemas é a área responsável pela criação,
              manutenção e evolução de sistemas e aplicações utilizados
              no dia a dia.
            </p>

            <p>
              Durante o curso, o aluno aprende conceitos de programação,
              desenvolvimento web, banco de dados, APIs e outras tecnologias.
            </p>

            <p>
              O profissional da área pode participar da criação de sites,
              aplicativos, sistemas empresariais e diversas outras soluções
              tecnológicas.
            </p>
          </div>
        </section>


        <section className="aprendizado" id="aprendizado">
          <p className="titulo-pequeno">O QUE VOCÊ APRENDE</p>

          <h2>Conhecimentos para entrar no mundo da tecnologia</h2>

          <div className="cards">

            <div className="card">
              <div className="icone">&lt;/&gt;</div>
              <h3>Lógica de programação</h3>
              <p>
                Aprenda a organizar ideias e criar soluções utilizando
                conceitos de programação.
              </p>
            </div>

            <div className="card">
              <div className="icone">WEB</div>
              <h3>Desenvolvimento Web</h3>
              <p>
                Crie páginas e aplicações utilizando tecnologias da web.
              </p>
            </div>

            <div className="card">
              <div className="icone">DB</div>
              <h3>Banco de dados</h3>
              <p>
                Aprenda a armazenar, organizar e consultar informações.
              </p>
            </div>

            <div className="card">
              <div className="icone">API</div>
              <h3>Desenvolvimento de APIs</h3>
              <p>
                Entenda como sistemas podem se comunicar e trocar dados.
              </p>
            </div>

            <div className="card">
              <div className="icone">APP</div>
              <h3>Aplicativos</h3>
              <p>
                Conheça conceitos utilizados no desenvolvimento de aplicações.
              </p>
            </div>

            <div className="card">
              <div className="icone">GIT</div>
              <h3>Versionamento</h3>
              <p>
                Aprenda a controlar versões dos seus projetos com Git e GitHub.
              </p>
            </div>

          </div>
        </section>


        <section className="tecnologias" id="tecnologias">
          <p className="titulo-pequeno">TECNOLOGIAS</p>

          <h2>Ferramentas que fazem parte da área</h2>

          <div className="tech-list">
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>React</div>
            <div>Node.js</div>
            <div>SQL</div>
            <div>Git</div>
            <div>GitHub</div>
          </div>
        </section>


        <section className="mercado" id="mercado">
          <p className="titulo-pequeno">ÁREAS DE ATUAÇÃO</p>

          <h2>Onde você pode trabalhar?</h2>

          <div className="areas">

            <div className="area">
              <span>01</span>
              <h3>Desenvolvimento Frontend</h3>
              <p>Criação da parte visual e interativa de sites e sistemas.</p>
            </div>

            <div className="area">
              <span>02</span>
              <h3>Desenvolvimento Backend</h3>
              <p>Desenvolvimento da parte responsável pelo funcionamento dos sistemas.</p>
            </div>

            <div className="area">
              <span>03</span>
              <h3>Desenvolvimento Full Stack</h3>
              <p>Trabalho envolvendo Frontend e Backend.</p>
            </div>

            <div className="area">
              <span>04</span>
              <h3>Banco de dados</h3>
              <p>Organização, armazenamento e gerenciamento de informações.</p>
            </div>

            <div className="area">
              <span>05</span>
              <h3>Aplicações</h3>
              <p>Criação de sistemas e aplicações para diferentes necessidades.</p>
            </div>

            <div className="area">
              <span>06</span>
              <h3>Suporte e manutenção</h3>
              <p>Correção, atualização e manutenção de sistemas.</p>
            </div>

          </div>
        </section>


        <section className="projetos" id="projetos">
          <p className="titulo-pequeno">PROJETOS</p>

          <h2>O que você pode criar?</h2>

          <div className="projeto-lista">

            <div className="projeto">
              <span>01</span>
              <h3>Sistema de cadastro</h3>
              <p>Cadastro e gerenciamento de clientes.</p>
            </div>

            <div className="projeto">
              <span>02</span>
              <h3>Sistema de estoque</h3>
              <p>Controle de produtos e informações de estoque.</p>
            </div>

            <div className="projeto">
              <span>03</span>
              <h3>Aplicação de agendamentos</h3>
              <p>Organização de horários e agendamentos.</p>
            </div>

            <div className="projeto">
              <span>04</span>
              <h3>Loja virtual</h3>
              <p>Uma plataforma para apresentar e vender produtos.</p>
            </div>

            <div className="projeto">
              <span>05</span>
              <h3>Dashboard administrativo</h3>
              <p>Visualização e organização de informações.</p>
            </div>

            <div className="projeto">
              <span>06</span>
              <h3>Aplicativo de tarefas</h3>
              <p>Organização de tarefas e atividades.</p>
            </div>

          </div>
        </section>


        <section className="cta">
          <p className="titulo-pequeno">COMECE SUA JORNADA</p>

          <h2>Seu futuro na tecnologia pode começar aqui.</h2>

          <p>
            Conheça o curso Técnico em Desenvolvimento de Sistemas
            e descubra novas possibilidades na área de tecnologia.
          </p>

          <a href="#inicio" className="botao">
            Voltar ao início
          </a>
        </section>

      </main>


      <footer>
        <div>
          <h2>DEV<span>+</span></h2>
          <p>Técnico em Desenvolvimento de Sistemas</p>
        </div>

        <div className="footer-info">
          <p>SENAI</p>
          <p>2026</p>
          <p>Aluno: Seu Nome</p>
        </div>
      </footer>

    </div>
  )
}

export default App

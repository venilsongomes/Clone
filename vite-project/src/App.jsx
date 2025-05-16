import { useState } from 'react'
import './App.css'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import perfil from './assets/perfil.png';
import Ambiente from './assets/ambientes.png';
import Bolsas from './assets/bolsas.png';
import ensino from './assets/ensino.png';
import estagio from './assets/estagio.png';
import minitoria from './assets/monitoria.png';
import outros from './assets/outros.png';
import pesquisa from './assets/pesquisa.png';
import extensao from './assets/extensao.png';





function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='container'>

        <section className='sub-container'>


          <nav className='nav1'>

            <ul className='nav'>
              <li className='ufg'>
                <a href="/">UFG - SIGAA - <span>Sistema Integrado de Gestão de Atividades Acadêmica </span> </a>
              </li>

              <li className='net'>
                <a href="/about"> UFGNET A+ A- Tempo de Sessão: 10:00</a>
                <a></a>
                <button> SAIR</button>
              </li>
            </ul>

            <section className='sub-menu'>
              <div className='TXT'> <p className=''> VENILSON GOMES ROCHA  <a href="/#"> <span> Alterar Vinculo</span></a> </p>
                <p className='y'> INSTITUTO DE INFORMATICA(11:30) </p>
              </div>

              <div className='sub-menu1'>
                <label>Semestre atual: 2025.1 </label>
                <div className='x'><a href="">Módulos</a></div>
                <div className='x'><a href="">Cx. Postal</a></div>
                <div className='x'><a href="">Abrir Chamado</a></div>
                <div className='x'><a href="">Menu Discente</a></div>
              </div> 
              </section>

          </nav>


          <nav className='menu'>

            <div className="dropdown">
              <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={ensino} alt="" /> Ensino 
               
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>


            <div class="dropdown">
              <button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={pesquisa} alt="" />  Pesquisa
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               <img src={extensao} alt="" /> Extensão
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               <img src={minitoria} alt="" /> Monitoria
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               <img src={Bolsas} alt="" /> Bolsas
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               <img src={outros} alt="" /> Atividades Complementares
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               <img src={estagio} alt="" /> Estágio
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={Ambiente} alt="" />Ambientes Virtuais
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Acessibilidade
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={outros} alt="" /> Outros
              </button>
              <ul class="dropdown-menu">
                <li><a class="" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </nav>

          <section className='principal'>

            <section className='noticias'>

              <div className='noticiasCadastradas'>
                <p>Não há notícias Cadastrada</p>
              </div>


              <div className='turmasSemestre'>
                <p className='p1'>  Turmas Semestre</p>
                <p className='p2'>  <p>Ultimas Atualizações</p><button className='parar'> Parar </button>  <button className='continuar'>Continuar</button>      </p>
              </div>

              <table>

                <thead>
                  <tr className='espaco'>
                    <th >Componente Curricular</th>
                    <th>Local</th>
                    <th>Horário</th>
                    <th>Chat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='x'>
                    <td> DESENVOLVIMENTO FULL STACK</td>
                    <td> 153, INF, CAS, Goiánia</td>
                    <td> 4N2345</td>
                    <td> <a href=""> Chat</a></td>
                  </tr>
                </tbody>
              </table>

              <section className='comunidade'>
                <div> <p> Comunidades Virtuais que Participa</p></div>
              </section>

              <h2> Minhas Atividades</h2>

              <table>
                <thead>
                  <tr>
                    <th> data</th>
                    <th> data</th>
                  </tr>

                </thead>
                <tbody className='atividades'>
                  <tr>
                    <td> 07/05/2025 17:59 (2 Dias)</td>
                    <td> <h2> DESENVOLVIMENTO FULL STACK</h2>   <a href=""> <span>Tarefa: </span> Trabalho Incremental De software (TIS) 1</a> </td>
                  </tr>
                </tbody>

              </table>
              <a className='atv' href="#"> <p> Minhas avaliaçães não aparecem!? Clique Aqui!</p></a>


              <div className='forum'>

                <h1>FÓRUM DO CURSO DE SISTEMAS DE INFORMAÇÃO </h1>
                <p className='caro'>Caro Aluno, este fórum é destinado para discussões relacionadas ao seu curso. Todos os alunos do curso e a coordenação tem acesso a ele.</p>

                <div className='forumLinks'>
                  <a href=""> Cadastrar um novo tópico para esse fórum</a>
                  <a href=""> Visualizar todos os tópicos para este fórum</a>
                </div>




                <table className=''>
                  <thead className=''>
                    <tr className='espaco'>
                      <th>Titulo</th>
                      <th>Autor</th>
                      <th>Respostas</th>
                      <th>Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='x'>
                      <td> Pré-inscrição em PFC I e II - 2024/2</td>
                      <td> ana_limeira</td>
                      <td> 1</td>
                      <td>20/08/2024 15:01:57</td>
                    </tr>

                    <tr className='x'>
                      <td> INF0309 - BANCO DE DADOS 2 - Turma A</td>
                      <td> fredericoafonso</td>
                      <td> 0</td>
                      <td> 22/05/2023 14:04:25</td>
                    </tr>

                    <tr className='x'>
                      <td> Prováveis formandos 2023/2</td>
                      <td> valdemarneto</td>
                      <td> 3</td>
                      <td> 22/05/2023 14:04:25</td>
                    </tr>
                  </tbody>
                </table>


              </div>


            </section>


            <section perfil className='perfil'>

              <div className='sub-perfil'>
                <div>
                  <a href=" "><p>Mensagens </p></a>
                  <a href=" "> <p> Atualizar Foto e Perfil</p></a>
                  <a href=""><p> Meus Dados</p></a>

                </div>

                <div>
                  <img src={perfil} alt="" />
                </div>
              </div>

              <div className='nome'>
                <h2> VENILSON GOMES ROCHA - </h2>
              </div>

              

              <div>

                <div className='regulamento'>
                  <p> <a href=" #">Regulamento dos Cursos de Graduação</a></p>
                  <p> <a href=" ">Calendário Acadêmico de Graduação</a></p>

                </div>

                <div className='dados'>

                  <div> <p>Matrícula:	201912649 </p>
                    <div className='curso'> Curso:  SISTEMAS DE INFORMAÇÃO - Bacharelado - Presencial - Goiânia - N</div>
                    <p> Nível:GRADUAÇÃO </p>
                    <p>Status: 	ATIVO</p>
                    <p> E-Mail:venilsongomes@disce...</p>
                    <p>Entrada:	2019.1</p>

                  </div>


                  <div >
                    <h2>  Índices Acadêmicos </h2>

                    <div className='dad'>

                      <div className=''>
                        <p className='dad'>  <h4> IP: </h4>   <h4> 96,50</h4>  </p>
                        <p className='dad'>  <h4>TI:</h4> <h4> 0,95  </h4> </p>
                        <p className='dad'>   <h4>MGE:</h4> <h4> 7,1  </h4 > </p>
                        <p className='dad'>   <h4>PMF:</h4> <h4>98,21 </h4>  </p>

                      </div>


                      <div>

                        <p className='dad'> <h4>TA:</h4> <h4>0,87</h4>  </p>
                        <p className='dad'> <h4>QR:</h4> <h4>0,00 </h4></p>
                        <p className='dad'> <h4>MRE:</h4> <h4> 0,30</h4></p>

                      </div>

                    </div>

                  </div>

                  <div>

                  </div>

                  <div className='x' >
                    <h2 href='#'>Detalhar </h2>

                    <h2> Integralizações:  </h2>

                    <div className='b'>

                      <p className='dad'> <h4>CH. Exigida </h4>
                        <h4>3000 </h4>
                      </p>


                      <p className='dad'> <h4>CH. Cursada </h4> <h4> 2844 </h4> </p>
                      <div className='progress' role='progressbar' aria-label='Example with labe' aria-valuenow='95' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar'>95%</div>
                      </div>


                    </div>


                    <h2> 95% Integralizado   </h2>

                  </div>

                </div>


              </div>


            </section>


          </section>


          <div className='dados'>

            <h2> Portal do Discente</h2>
          </div>
          <footer className='footer'>

            <div>  <p> SIGAA | CERCOMP - CENTRO DE RECURSOS COMPUTACIONAIS - (62) 3521-1079 / (62)3521 - 1090
              &copy; | UFG | srv-app1.ufg.br.srv1inst1 - v4.2502 | 13/05/2025 - 10:37</p>
            </div>



          </footer>
          
        </section>
      </div>

    </>
  )
}

export default App

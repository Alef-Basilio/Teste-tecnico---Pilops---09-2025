<h2 align="center">Link do deploy:</h2>

@[Pilops]()

```

```


<h1 align="center" style="font-weight: bold;">Pilops</h1>
<p align="center">
Tópicos: 
<a href="#tech">Tecnologias</a> |
<a href="#howMade">Como foi feito</a> |
<a href="#obj">Objetivo</a> |
<a href="#if">Se eu tivesse mais tempo</a> |
<a href="#howRun">Como rodar o front-end e back-end</a>
</p>


<p align="center">
<b>Um desafio técnico para vaga de Engenheiro(a) de software fullstack (estágio/Júnior) com 7 dias a partir do 
recebimento do teste de prazo.</b>
<b>!Algumas coisas poderiam ter sido diferentes caso eu pudesse tirar dúvidas de template! Houve a minha 
interpretação do design.</b>
</p>


<p align="center">
  <p align="center">
    <img alt="Error: reload the page to see the image" src="./client/public/interface.jpg" width="100%">
  </p>
</p>


<h2 id="tech" align="center">Tecnologias</h2>
Node.js, Express.js, React, TypeScript, HTML and CSS.


<h2 id="howMade" align="center">Como foi feito</h2>
Utilizando modelos Figma fornecidos pela Pilops, construí uma interface com um front-end que exibe os dados de uma API e um back-end que os disponibiliza.
</br>
O mais essencial foi a atenção aos detalhes de cada elemento na tela, incluindo: fontes, tamanhos, disposição, 
espaçamentos, cores, ícones etc.
</br>
Também mantive os diretórios organizados ao seguir convenções profissionais.
</br>
O lazy loading possibilitou uma significativa otimização.


<h2 id="obj" align="center">Objetivo</h2>
Implementar as melhores soluções de performance e escalabilidade em adequação a cada componente e de acordo com as regras obrigatórias do teste técnico.


<h2 id="if" align="center">Se eu tivesse mais tempo</h2>
Primeiro eu mudaria a ordem dos cards para que fossem do mais recentes ao mais antigos em relação às datas.
</br>
Também aperfeiçoaria o componente que altera o saldo, especificamente a solução de adicionar os pontos (".") para que fosse mais adaptável independente dos valores.
</br>
Como foquei nos itens obrigatórios do teste, certamente complementaria com os itens opcionais posteriormente: testes unitários, paginação da lista de voos, endpoint para calcular o saldo total acumulado dos voos etc.
</br>
Por causa da quantidade de cards, penso que um botão para o topo seria algo bom de acrescentar, além de atualizar a página ao clicar no logo, mas mantendo o posicionamento vertical do usuário e a tela de detalhes do voo caso fizessem sentido.
</br>
Estes são os que eu considero os mais críticos, porém não os únicos.


<h2 id="howRun" align="center">Como rodar o front-end e back-end</h2>
Primeiramente, estando no diretório "server", execute o comando "npm run dev" ou "yarn dev".
Segundamente, estando no diretório "client", execute o comando "npm start" ou "yarn start".

Se for preciso baixar dependências, recomendo o comando "npm list --depth=0" (ou "yarn list --depth=0") em ambos os diretórios conforme as suas versões.
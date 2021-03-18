# Testes automatizados para o site do Zé Delivery

Projeto de exemplo para implementação de testes para o site Zé Delivery utilizando o CodeceptJS (Node) + WebDriver + Selenium Server Standalone

#
## Tutorial, Instalação e execução

#### **Ter previamente o Node instalado em sua máquina**
**Windows/MacOS:** [Node](https://nodejs.org/en/  "Node Installer")

#
#### Clonar projeto
`git clone <url_git>`

#### Instalar as dependecias
`npm install`

#
####  Para executar os testes: 
`npm run test --grep "<TAG_DA_FEATURE>"` 


### Exemplo: 


Todos os testes com report: `npm run test --reporter mochawesome` 

Tag especifica: `npx codeceptjs run --grep "@order_success" --reporter mochawesome`


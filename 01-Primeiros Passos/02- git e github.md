comando de navegação no prompt de comando 

comando para listar - para pdoer navegar dentro do sistema operacional e saber onde a pasta esta

dir - lista de diretorios dentro da pasta onde estamos situados

todos os comandos eles possuem variancias "flags" que são complemetos que passamos para esses comandos , acrescentam, 
modificam ou formatam os comandos

  cd -chance directory possibilita a navegação das pastas
  cd *nome da pasta* -  para entrar na pasta desejada
  cd.. - para retroceder um nivel na navegação
  cls - comando para limpar a tela 
  TECLA tap - função de auto completar
  mkdir *nome da pasta* - comando para criar uma pasta
  echo *texto* - ele printa na tela o comando que eu fizer
  echo *texto* > *nome do arquivo* vai criar o aruivo e vai  jogar o texto dentro do arquivo
  del *o que você deseja apagar* - para deletar arquivos, se colocar esse comando e indicar uma pasta,
ele vai apagar tudos os arquivos da pasta, menos a pasta
  rmdir * nome da pasta* = para apagar a pasta com tudo o que tem dentro

--------------------------------------------------------------------------------------------------------------------------------
  sha1 é um algoritimo de encriptação, ele vai pegar o arquivo e vai embaralhar de uma forma muito especifica, para poder ideintifica rumafor
segura e rapida, forma curta de representar o estado de um arquivo.

  openssl sha1 *nome do arquivo* - para passar o arquivo se encriptação usndo o sha1
  objetos internos do GIT (blobs, trees, commits)  
  blobs(obejto): ele contem meta dados do git, ele contem o tamanho do objeto, tipo, arquivos entre outros, obejeto basicos
so guarda o sha do arquivo. ele é um objeto que encapsulaess comportamento de diretorios, ele é usado para apontar dirotoris que tem arquivos e diretorios tambem
  hash-object função que envia arquivo
  --stdin (flag) essa função espera receber um arquivo
  tree: armazenam blobs , tambem contem meta dados, apoonta para um blob, que por sua vez tem um sha1 e tambem guarda o nome do arquivo
pode apontar tanto para o blob quanto para outra tree, as tree tambem tem um sha1 dos metadados
  commit: é o objeto que vai juntar tudo, ele apota par auma arvore, para um parente (ultimo commit realizado antes dele),
para um autor, para uma mensagem.  você pode escrever uma mensagem que vai indicar as auteraçoes feitas, timestamp(carimbo de tempo)
os commits tambem possuem um sha1, ou seja, se tiver qualqer alteração , ele vai gerar um sha1 difeten.
--------------------------------------------------------------------------------------------------------------------------------

  CHAVES SSH E TOKENS github
  
  chave ssh: forma de estabelecer uma conexão segura e encriptada entre duas maquinas.
  
  como fazer para gerar uma chave ssh: 
  1- (git bash) ssh-keygen -t ed25519 -C *email do github*
  2- criar uma senha
  3- navegar ate a pasta onde foi criada a chave para identifica-la
  4- usar o comando cat para visualizar o conteudo das chaves (cat id_ed25519.pub)
  5- copiar a chave ecolar no github
  6- inicializar o ssh agente comando (eval $(ssh-agent -s)
  7-  entregar a chave para o agente pid que foi gerado com o comando (ssh-add id_ed25519) passar a chave privada

  tokens de acesso pessoal
--------------------------------------------------------------------------------------------------------------------------------  
  
  PRIMEIROS COMANDOS COM O GIT
  
  git init : para poder iniciar o repositorio do git,  
  git add : para poder mover arquivos e dar inicio aos versionamento e usar os primeiros comandos
  git commit: para poder fazer os primeiros commits
  ls -a: mostrar arquivos ocultos
   
  criar um nickname e um email
  git config --global user.email "lucasmacedo9@hotmail.com"
  git config --global user.name Lucas
--------------------------------------------------------------------------------------------------------------------------------
  git init: inicializa um repositorio
  traked  ou untraked
  traked: arquivos rastreados, arquivos que o git tem ciencia dele (unmodified, modified, staged)
    unmodified: arquivo que ainda não foi modificados. 
    modified: aqueivo que foi modificado. 
    staged: é onde ficam os arquivos que estao se preparando para fazer parte de outro tipo de grupamento.
  qunado usamos o git add tinhamos um arquivo untraked e movemos o arquivo para o staged,  
 
  git status: vai ajudar a monitorar os status dos aquivos  (unmodified, modified, staged)
  mv: mover aquivos para pastas (mv *nome do arquivo* *./nome da pasta*)
  git add *: pega tudo que esta no diretorio de trabalho de adiciona no staged
  
--------------------------------------------------------------------------------------------------------------------------------

  git pull: puxar o conteudo do repositorio para a maquina
  git pull origin master
  --------------------------------------------------------------------------------------------------------------------------------
  # Revisão
  
  criar um novo repositorio no github
  - criar novo repositorio
  - nome do repositorio
  - descrição
  - deixar publico
  - adicionar o readme

  






  

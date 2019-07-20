import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';
import user4 from '../assets/images/user4.png';
import user5 from '../assets/images/user5.png';

export default [
  {
    id: 1,
    name: "Júlio Alcantara",
    date: "04 Jun 2019",
    image: user1,
    msg: "Pessoal, alguém sabe se a Rocketseat está contratando?",
    comments: [
      {
        id: 1, 
        name: "Diego Fernandes",
        image: user2,
        msg: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
      }
    ]
  },
  {
    id: 2,
    name: "Gabriel Lisboa",
    date: "04 Jun 2019",
    image: user3,
    msg: `Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
    comments: [
      {
        id: 1,
        name: "Clara Lisboa",
        image: user4,
        msg: "Clara Lisboa Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
      },
      {
        id: 2,
        name: "Cézar Toledo",
        image: user5,
        msg: "Cézar Toledo Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
      }
    ]
  },
  {
    id: 3,
    name: "Gabriel Lisboa",
    date: "04 Jun 2019",
    image: user3,
    msg: `Fala galera, beleza? 
    Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
    comments: [
      {
        id: 1,
        name: "Clara Lisboa",
        image: user4,
        msg: "Clara Lisboa Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
      },
      {
        id: 2,
        name: "Cézar Toledo",
        image: user5,
        msg: "Cézar Toledo Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
      }
    ]
  }
]
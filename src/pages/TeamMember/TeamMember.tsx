import React from 'react';
import TeamMemberList from './TeamMemberList';

const TeamMember = () => {
  return (
    <div className="teamMember">
      {TEAMMEMBER_LIST_DATA.map(({ id, src, writer, content }) => {
        return (
          <TeamMemberList
            key={id}
            src={src}
            writer={writer}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default TeamMember;

const TEAMMEMBER_LIST_DATA = [
  {
    id: 1,
    src: '/images/han1.jpg',
    writer: 'puppy__good__cuuuuute',
    content: '왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈',
  },
  {
    id: 2,
    src: '/images/nam2.jpg',
    writer: 'run_runrun_runrun_runrun_runrun_runrun_run',
    content: '개발자가 바로 앞이다 전속력으로 달려!!!',
  },
  {
    id: 3,
    src: '/images/kim3.jpg',
    writer: 'feel__so_goooooood',
    content: '느낌 지이이이이이려',
  },
  {
    id: 4,
    src: '/images/ryu4.jpg',
    writer: 'ryuDrangon___ryudrangon',
    content: '성장하고 나아가는 개발자가 되겠습니다',
  },
  {
    id: 5,
    src: '/images/ryu5.jpg',
    writer: 'travel__go__soon#',
    content: '비행기 언제 와 삘리와라 지금 설레니깐',
  },
  {
    id: 6,
    src: '/images/no1.png',
    writer: 'Soju_eat_soju_eat',
    content: '나아가는 개발자 성장하는 개발자 될 것을 다짐합니다.',
  },
  {
    id: 7,
    src: '/images/kim1.png',
    writer: 'front__front__front_fron',
    content: 'front 개발자가 제 목표이며 이룰것을 약속합니다',
  },
  {
    id: 8,
    src: '/images/han2.png',
    writer: 'sooooooo cute ^^',
    content: '성장하는 개발자 최고가 될 것을 다짐합니다 지켜봐주세여~~~~',
  },
  {
    id: 9,
    src: '/images/1.jpg',
    writer: 'cat pink nose cute',
    content: '냐야야야야야야야야오오오오오오옹',
  },
  {
    id: 10,
    src: '/images/nam1.png',
    writer: 's___t____d-____u_____y',
    content: '스스로 나아가는 방향성 제가 만들어 가겠습니다.',
  },
  {
    id: 11,
    src: '/images/cafe.jpg',
    writer: 'cafe_feel-jifida',
    content: '카페 너무 이쁘다 여기 임대인가 아니겠지 땅을 사겠지',
  },
  {
    id: 12,
    src: '/images/2.jpg',
    writer: 'tower_t_o_w_e_r',
    content:
      '좋은것만 보고 살아야지 그래야 나도 좋아지지 힐링되어버려 그것도 아주',
  },
  {
    id: 13,
    src: '/images/3.jpg',
    writer: 'weqrasdxczxcvzvcz_1234_123',
    content: '밤 하늘을 날아서~ 궁전으로 갈 수 도 있어 ~',
  },
  {
    id: 14,
    src: '/images/sea.jpg',
    writer: 'Sea_S_e_a_sea',
    content: '바다 너무 이쁘다 힐링 된다 진짜 왤케 이뻐',
  },
  {
    id: 15,
    src: '/images/cafe1.jpg',
    writer: 'cafe__forest__namu',
    content: '평____온____미____러',
  },
  {
    id: 16,
    src: '/images/comu.jpg',
    writer: 'wecode_rounge__!!!',
    content: '어뗗게든 해결한다 진짜로 그런 마음가짐 가지면서',
  },
  {
    id: 17,
    src: '/images/namcat.jpg',
    writer: 'C___A___T___c___a___t',
    content: '나도 냐아아아옹 너도 냐아아아아옹',
  },
  {
    id: 18,
    src: '/images/kim4.jpg',
    writer: 'w___o___w',
    content: '왤케 뿌옇지 그래도 나는 집중중 항상 진지하게 임하겠습니다',
  },
  {
    id: 19,
    src: '/images/flower.jpg',
    writer: 'flower_so_so-so',
    content: '이!!쁘!!다!!',
  },
  {
    id: 20,
    src: '/images/back.jpg',
    writer: 'back__head__dariggozima',
    content: '뒷통수만 보이는거 신의 한수인듯 ㅋㅋ 다리는 그만 꼬아라',
  },
  {
    id: 21,
    src: '/images/pie.jpg',
    writer: 'ppppp_iiiiii_pppppp_iiiii',
    content: '맛있엉 어떠케 너무 맛있엉 코드칠때 먹으면 울화통 확실히 사라져',
  },
  {
    id: 22,
    src: '/images/5.jpg',
    writer: 'ryu',
    content: '저는 류미류입니다 사진 4번째',
  },
  {
    id: 23,
    src: '/images/park.jpg',
    writer: 'ching_ul_geo_ryu',
    content: '어쩌라고',
  },
  {
    id: 24,
    src: '/images/hoon.jpeg',
    writer: 'huni__cute__h_u_n_i',
    content: '꼴아보지마 ',
  },
  {
    id: 25,
    src: '/images/neck.jpg',
    writer: 'Zara_Z_a_r_a',
    content:
      '거북목 다들 조심해여 다들 어깨피고 목 세우고 허리피고 다 같이 화이팅!!!~~ 할 수 있다!!!',
  },
];

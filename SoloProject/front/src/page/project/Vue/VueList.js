import schedule from './VueImage/VueSchedule.png';

export const accordionData = [
    { 
      no : '1',
      title: '일정',
      content: `일정 내용`,
      img : <img src={schedule} alt='schedule' />
    },
    {
      title: 'Q. 회원정보를 변경하고 싶어요.',
      content: `A. 마이페이지 -> 정보 수정에서 닉네임과 비밀번호를 변경할 수 있습니다.`
    },
    {
      title: 'Q. 글쓰기 버튼이 안보여요.',
      content: `A. 글쓰기 버튼은 로그인 후에 사용하실 수 있습니다.`
    },
    {
      title: 'Q. IT 기술에 댓글을 달 수 있나요?',
      content: `A. 현재는 댓글은 달 수 없고, 추후 개발할 예정입니다.`
    }
  ];
  
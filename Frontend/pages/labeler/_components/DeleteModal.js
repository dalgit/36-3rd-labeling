import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const DeleteModal = ({
  filteredLabeler,
  setIsModalOpen,
  setClickedDeleteBtn,
  setSelectedLabeler,
}) => {
  const router = useRouter();

  const deleteHandler = () => {
    setIsModalOpen(false);
    setClickedDeleteBtn(false);
    setSelectedLabeler({});
    router.replace(router.asPath);
  };

  const modalCancle = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrap>
      <Title>정말 삭제 하시겠습니까?</Title>
      <Text>삭제할 라벨러</Text>
      <SubWrap>
        <ul>
          {filteredLabeler.map(labeler => {
            return <li>{labeler}</li>;
          })}
        </ul>
      </SubWrap>
      <BtnWrap>
        <DeleteBtn onClick={() => deleteHandler()}>삭제하기</DeleteBtn>
        <CancleBtn onClick={() => modalCancle()}>취소</CancleBtn>
      </BtnWrap>
    </Wrap>
  );
};

export default DeleteModal;

const Wrap = styled.div`
  background-color: #606060;
  height: 22rem;
  width: 30rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 15px;
  justify-content: space-between;
`;

const Title = styled.div`
  color: white;
  font-size: 1.4rem;
`;

const Text = styled.div`
  margin-top: 0.7rem;
  font-size: 1.3rem;
  color: #ccccff;
`;

const SubWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  border: 1px solid #ccccff;
  height: 9rem;
  border-radius: 7px;
  padding: 0.3rem;
  color: #ccccff;
`;

const BtnWrap = styled.div`
  display: flex;
`;

const DeleteBtn = styled.button`
  height: 3rem;
  width: 7rem;
  margin-right: 2rem;
`;

const CancleBtn = styled.button`
  height: 3rem;
  width: 7rem;
`;

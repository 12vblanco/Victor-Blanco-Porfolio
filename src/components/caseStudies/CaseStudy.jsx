import styled from "styled-components";

const CaseStudy = (oneCase) => {
  return (
    <Div>
      <Column>
        <Title>{oneCase.title}</Title>
        <SubTitle>{oneCase.subTitle}</SubTitle>
        <Text>{oneCase.text}</Text>
        <RowLink>
          <Link>
            <a href={oneCase.link} target="_blank">
              {oneCase.link}
            </a>
          </Link>
        </RowLink>
      </Column>
      <Column>
        <Row>
          <ImgDiv>
            <Img src={oneCase.img1} />
            <Img src={oneCase.img2} />
            <Img src={oneCase.img3} />
          </ImgDiv>
        </Row>
        <SkillRow>
          <Skill>{oneCase.skill1}</Skill>
          <Skill>{oneCase.skill2}</Skill>
          <Skill>{oneCase.skill3}</Skill>
        </SkillRow>
      </Column>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 405px;
  max-width: 900px;
  border: solid 1px #000;
  margin: 30px 10px 0 10px;
  padding: 0 12px;
  @media (max-width: 860px) {
    height: auto;
  }
  @media (max-width: 816px) {
    flex-direction: column;
  }
`;

const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: space-between;
  height: 100%;
`;
const SkillRow = styled.div`
  width: 100%;
  max-width: 90vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-between;
  height: 100%;
  @media (max-width: 750px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 816px) {
    max-width: 60%;
  }
  @media (max-width: 650px) {
    max-width: 90%;
  }
  @media (max-width: 470px) {
    max-width: 98%;
  }
`;

const RowLink = styled.div`
  text-align: center;
  margin: 12px 0;
  @media (max-width: 750px) {
    margin: 0;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: -18px;
  margin-left: 12px;
  margin-top: 8%;
  @media (max-width: 750px) {
    margin: 2%;
  }
  @media (max-width: 380px) {
    font-size: 36px;
  }
`;

const SubTitle = styled.div`
  font-size: 22px;
  letter-spacing: -1.2px;
  font-weight: 500;
  margin-left: 14px;
  @media (max-width: 750px) {
    margin: -6% 3% 0 3%;
  }
`;

const Text = styled.div`
  font-size: 14.4px;
  line-height: 1.5;
  margin-top: 18px;
  padding: 0 32px 0 12px;
  text-align: left;
  @media (max-width: 750px) {
    padding-left: 2px;
  }
`;

const Img = styled.img`
  width: 140px;
  margin: 22px 6px;
  border: 1px #023c71 solid;
  object-fit: contain;

  @media (max-width: 870px) {
    width: 130px;
  }
  @media (max-width: 816px) {
    width: 31%;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: flex-start;
`;

const Skill = styled.div`
  width: 146px;
  height: 40px;
  padding: 8px;
  margin: 0 6px;
  border: 1px solid #000;
  margin-bottom: 18px;
  text-align: center;
  @media (max-width: 870px) {
    width: 30%;
    font-size: 14px;
  }
  @media (max-width: 816px) {
    width: 33%;
    font-size: 16px;
  }
  @media (max-width: 740px) {
    width: 31%;
    font-size: 13px;
  }
  @media (max-width: 390px) {
    width: 31%;
    font-size: 12px;
    height: fit-content;
    padding: 4px;
  }
`;

const Link = styled.div`
  cursor: pointer;
  font-size: 21px;
  margin: 6px 0 4px 14px;
  a {
    color: #e86464;
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export default CaseStudy;

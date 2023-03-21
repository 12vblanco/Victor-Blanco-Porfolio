import styled from "styled-components";
// import Skill from "./Skill";

const CaseStudy = (oneCase) => {
  return (
    <Div>
      <Column>
        <Row>
          <Column>
            <Img src={oneCase.img1} />
            <Pad />
          </Column>
          <Column>
            <Img src={oneCase.img2} />
          </Column>
          <Column>
            <Img src={oneCase.img3} />
          </Column>
        </Row>
        <Row>
          <Column>
            <Skill>{oneCase.skill1}</Skill>
            <Skill>{oneCase.skill2}</Skill>
            <Skill>{oneCase.skill3}</Skill>
          </Column>
          <Column>
            <Column>
              <Title>{oneCase.title}</Title>
            </Column>
            <Column>
              <SubTitle>{oneCase.subTitle}</SubTitle>
            </Column>
            <Row>
              <Text>{oneCase.text}</Text>
            </Row>
            <Row>
              <Link>
                <a href={oneCase.link} target="_blank">
                  {oneCase.title}
                </a>
              </Link>
            </Row>
          </Column>
        </Row>
      </Column>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  border: solid;
  justify-content: center;
  align-items: center;
  width: 640px;
  height: auto;
  border: solid 1px #000;
  margin: 30px;
  padding: 0 12px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: auto;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 20px;
`;

const Title = styled.div`
  font-size: 38px;
  letter-spacing: -1.7px;
  font-weight: 700;
  margin-bottom: -18px;
  padding-left: 32px;
  text-align: left;
`;

const SubTitle = styled.div`
  font-size: 22px;
  letter-spacing: -1.2px;
  font-weight: 500;
  margin-left: 14px;
  padding-left: 28px;
`;

const Text = styled.div`
  font-size: 15px;
  line-height: 1.2;
  margin-top: 16px;
  padding-right: 10px;
  padding-left: 12px;
  text-align: left;
`;

const Img = styled.img`
  width: 160px;
  /* height: 300px; */
  padding: 8px;
  margin: 22px 0;
`;

const Pad = styled.div`
  padding-bottom: 42px;
`;

const Skill = styled.div`
  width: 146px;
  height: 40px;
  padding: 8px;
  border: 1px solid #000;
  margin-bottom: 18px;
  text-align: center;
`;

const Link = styled.div`
  padding-top: 8px;
  padding-left: 12px;
  cursor: pointer;
  font-size: 22px;
  a {
    color: red;
  }
`;

export default CaseStudy;

import styled from "styled-components";

const CaseStudy = (oneCase) => {
  return (
    <Div>
      <Column1>
        <Column>
          <Img src={oneCase.img1} />
          <Pad />
        </Column>
        <Column>
          <Skill>{oneCase.skill1}</Skill>
          <Skill>{oneCase.skill2}</Skill>
          <Skill>{oneCase.skill3}</Skill>
        </Column>
      </Column1>
      <Column2>
        <Row>
          <Column>
            <Img src={oneCase.img2} />
          </Column>
          <Column>
            <Img src={oneCase.img3} />
          </Column>
        </Row>
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
          <RowLink>
            <Link>
              <a href={oneCase.link} target="_blank">
                {oneCase.title}
              </a>
            </Link>
          </RowLink>
        </Column>
      </Column2>
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
  justify-content: center;
`;
const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  align-items: center;
  width: 164px;
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(2 * 164px);
`;

const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const RowLink = styled.div`
  text-align: left;
  margin: 12px 0;
`;

const Title = styled.div`
  font-size: 38px;
  letter-spacing: -1.7px;
  font-weight: 700;
  margin-bottom: -18px;
  margin-left: 12px;
`;

const SubTitle = styled.div`
  font-size: 22px;
  letter-spacing: -1.2px;
  font-weight: 500;
  margin-left: 14px;
  margin-bottom: -12px;
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
  width: 140px;
  margin: 22px 12px 0 12px;
  border: 1px #023c71 solid;
`;

const Pad = styled.div`
  padding-bottom: 22px;
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
  cursor: pointer;
  font-size: 21px;
  margin: 6px 0 4px 14px;
  a {
    color: #f74848;
  }
`;

export default CaseStudy;

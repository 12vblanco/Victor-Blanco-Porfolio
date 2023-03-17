import React from "react";
import styled from "styled-components";
import img1 from "../../assets/caseStudies/orchard1.png";
import img2 from "../../assets/caseStudies/orchard2.png";
import img3 from "../../assets/caseStudies/orchard3.png";
import orchard from "../../assets/orchard.png";
import Skill from "../elements/Skill";

const CaseStudy1 = () => {
  return (
    <Div>
      <Column>
        <Row>
          <Img src={img1} />
        </Row>
        <Column>
          <Row>
            <Skill />
          </Row>
          <Row>
            <Skill />
          </Row>
          <Row>
            <Skill />
          </Row>
        </Column>
      </Column>
      <Column>
        <Row>
          <Row>
            <Img src={img2} />
          </Row>
          <Row>
            <Img src={img3} />
          </Row>
        </Row>
        <Column>
          <LineText src={orchard} />
          <SubTitle>Bar & Restaurant</SubTitle>
          <Text>
            Text bla text bla bla anything here Text bla text bla bla anything
            here Text bla text bla bla anything here Text bla text bla bla
            anything here Text bla text bla bla anything here
          </Text>
          <Text>
            Text bla text bla bla anything here Text bla text bla bla anything
            here Text bla text bla bla anything here Text bla text bla bla
            anything here Text bla text bla bla anything here
          </Text>
          <span>www.theorchardbar.co.uk</span>
        </Column>
      </Column>
    </Div>
  );
};

// const Div = styled.div`
//   position: relative;
//   text-align: left;
//   display: flex;
//   border: solid;
//   height: auto;
//   border: solid 1px #000;
//   width: 560px;
//   padding: 18px 30px;
//   margin: 30px;

//   span {
//     padding-top: 8px;
//     padding-left: 12px;
//     color: red;
//     cursor: pointer;
//     font-size: 22px;
//   }
// `;

const Div = styled.div`
  position: relative;
  text-align: left;
  display: flex;
  border: solid;
  justify-content: center;
  align-items: center;
  height: 710px;
  /* border: solid 1px #000; */
  width: 720px;
  /* height: 618.48px; */
  /* padding: 18px 30px; */
  margin: 30px;
  span {
    padding-top: 8px;
    padding-left: 12px;
    color: red;
    cursor: pointer;
    font-size: 22px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.div`
  font-size: 38px;
  letter-spacing: -1.7px;
  font-weight: 700;
  padding-left: 12px;
  margin-bottom: -18px;
`;
const SubTitle = styled.div`
  font-size: 38px;
  letter-spacing: -1.7px;
  font-weight: 700;
  padding-left: 12px;
`;
const Text = styled.div`
  font-size: 15px;
  line-height: 1.2;
  margin-top: 16px;
  max-width: 400px;
  padding-right: 10px;
  padding-left: 12px;
`;

const Img = styled.img`
  width: 160px;
  padding: 8px;
`;

const LineText = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 240px;
  margin-left: 4px;
  margin-bottom: -8px;
`;

export default CaseStudy1;

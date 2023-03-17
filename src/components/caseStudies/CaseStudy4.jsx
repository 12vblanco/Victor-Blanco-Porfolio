import React from "react";
import styled from "styled-components";
import cs4 from "../../assets/cs4.png";

const CaseStudy4 = () => {
  return (
    <Div>
      <ImgCs src={cs4} />
      {/* <Column>
        <Row>
          <Img src={img4} />
        </Row>

        <Column>
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
          <Column>
            <Img src={img1} />

            <Img src={img2} />
          </Column>
        </Row>
        <Column>
          <Row>Title</Row>
          <Row>SubTitle</Row>
          <Row>Text</Row>
        </Column>
      </Column> */}
    </Div>
  );
};

const Div = styled.div`
  position: relative;
  text-align: left;
  display: flex;
  border: solid;
  /* height: 710px; */
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

const ImgCs = styled.img`
  height: 100%;
  object-fit: cover;
  overflow: hidden;

  /* padding: 8px; */
`;

// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
// const Title = styled.div`
//   font-size: 38px;
//   letter-spacing: -1.7px;
//   font-weight: 700;
//   padding-left: 12px;
//   margin-bottom: -18px;
// `;
// const SubTitle = styled.div`
//   font-size: 38px;
//   letter-spacing: -1.7px;
//   font-weight: 700;
//   padding-left: 12px;
// `;
// const Text = styled.div`
//   font-size: 15px;
//   line-height: 1.2;
//   margin-top: 16px;
//   padding-right: 10px;
//   padding-left: 12px;
// `;

// const Img = styled.img`
//   width: 160px;
//   padding: 8px;
// `;

// const LineText = styled.img`
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
//   max-width: 240px;
//   margin-left: 4px;
//   margin-bottom: -8px;
// `;

export default CaseStudy4;

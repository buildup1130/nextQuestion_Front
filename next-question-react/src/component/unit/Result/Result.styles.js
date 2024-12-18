import styled from "@emotion/styled";

export const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const CircleContainer = styled.div`
  margin: 20px;
`;

export const Circle = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 100%;
    max-height: 250px;
  }

  .circle-bg {
    stroke-linecap: round;
    transition: stroke-dasharray 0.3s ease;
  }

  .circle {
    stroke-linecap: round;
    transition: stroke-dasharray 0.3s ease;
  }
`;

export const CircleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const CompleteButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CirleBorder = styled.div`
  width: 400px;
  height: 400px;

  border: 0.5px solid black;
  border-radius: 500px;

  background: ${({ percentage }) =>
    `conic-gradient(
      #00C8FF ${percentage}%, 
      #FF0000 ${percentage}% 100%
    )`};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 32px;
`;

export const InnerCircle = styled.div`
  width: 330px;
  height: 330px;
  background-color: white;
  border-radius: 50%;

  position: absolute;
  z-index: 0;
`;

export const Circlefont = styled.div`
  z-index: 1;
`;

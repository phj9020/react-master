import styled from "styled-components";

const Container = styled.div`
  display: flex;
`

const Box = styled.div`
  // props를 통해 컴포넌트 스타일 설정    
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`

// Box 컴포넌트 확장 
const Circle = styled(Box)`
  border-radius: 50%;
`  

function App() {
  return (
    <Container>
      {/* prop 이름을 bgColor로 설정함 */}
      <Box bgColor="teal"/>
      <Box bgColor="tomato" />
      <Circle bgColor="red" />
    </Container>
  );
}

export default App;

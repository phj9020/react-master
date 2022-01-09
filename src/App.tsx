import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height:100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`
const TitleHa = styled.h1`
  color: ${(props) => props.theme.textColor};
`


function App() {

  return (
    <Container>
      <TitleHa>Hello</TitleHa>
      
    </Container>
  );
}

export default App;

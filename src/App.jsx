import styled from "styled-components";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import {MyRoutes} from "./routers/routes"

function App() {
  return (<AuthContextProvider>
    <Container>
      <MyRoutes/>
    </Container>
  </AuthContextProvider>)
}

export default App;

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
`;

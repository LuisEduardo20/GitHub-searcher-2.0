import { UserProvider } from "./contexts/UserContext";

import Main from "./pages/Main";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Main />
        <GlobalStyle />
      </UserProvider>
    </div>
  );
}

export default App;

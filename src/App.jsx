import GithubForm from "./components/GithubForm"
import Container from 'react-bootstrap/Container';

function App() {


  return (
    <>
    <Container style={{width: '50%'}}>
      <h1 className="text-center mt-2">Github Users & Repos</h1>
    <GithubForm />
    </Container>
      
    </>
  )
}

export default App

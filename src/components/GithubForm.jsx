import { useState } from "react";
import UserData from "./UserData";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Repositories from "./Repositories";

const GithubForm = () => {
  const [users, setUsers] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [showUserAndRepoData, setshowUserAndRepoData] = useState(false);

  const handleClick = () => {
    setshowUserAndRepoData(false);
    setShowForm(true);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputValue}`
      );
      if (response.ok) {
        const userData = await response.json();
        const repositoriesResponse = await fetch(userData.repos_url);
        if (repositoriesResponse.ok) {
          const repositoriesData = await repositoriesResponse.json();
          setUsers([userData]);
          setShowForm(false);
          setRepositories(repositoriesData);
          setshowUserAndRepoData(true);
        } else {
          console.error("Failed to fetch user repositories");
        }
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error occurred while fetching user data", error);
    }
  };

  const handleButtonClick = () => {
    if (inputValue) {
      fetchData();
      setInputValue("");
    }
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      {showForm && (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>GitHub username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. facebook"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button
              variant="primary"
              onClick={handleButtonClick}
              style={{ width: "100%", marginTop: "10px" }}
            >
              Go
            </Button>
          </Form.Group>
        </Form>
      )}
      

      {showUserAndRepoData &&
        users.map((user) => <UserData user={user} key={user.id} />)}
      {showUserAndRepoData && repositories.length > 0 && (
        <Repositories repositories={repositories} />
      )}

      {showUserAndRepoData && (
        <Button
          variant="secondary"
          onClick={handleClick}
          style={{ width: "50%", marginTop: "10px" }}
        >
          RESET
        </Button>
      )}
    </>
  );
};

export default GithubForm;

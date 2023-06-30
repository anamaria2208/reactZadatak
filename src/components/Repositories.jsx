import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const Repositories = ({ repositories }) => {
  return (
    <>
      <h1>Repo</h1>
      <Table>
        <tbody>
          {repositories &&
            repositories.map((repo) => {
              return (
                <tr key={repo.id}>
                  <td>{repo.full_name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object),
};

export default Repositories;

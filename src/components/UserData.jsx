import Card from "react-bootstrap/Card";

import PropTypes from "prop-types";
import { useState } from "react";

const UserData = ({ user }) => {
  

  return (
    <>
      { (
        <>
          <Card style={{ width: "50%", marginTop: "10px" }}>
            <Card.Img
              variant="top"
              src={user.avatar_url}
              style={{ width: "200px" }}
            />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                <strong>BIO:</strong> {user.bio}
              </Card.Text>
              <Card.Text>
                <strong>LOCATION:</strong> {user.location}
              </Card.Text>
            </Card.Body>
          </Card>
          
        </>
      )}
    </>
  );
};

UserData.propTypes = {
  user: PropTypes.object,
};

export default UserData;

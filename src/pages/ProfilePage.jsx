import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileDetailed';
import Container from '../components/UI/ListItem';

import API from '../utils/API';

export default function ProfilePage() {
  const [user, setUser] = useState({});

  const { id } = useParams();

  const fetchData = async () => {
    const { data } = await API.getSingleUser(id);

    setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container>
        {}
        {user.name ? <Profile user={user} /> : <p>Loading...</p>}
      </Container>
      <footer className="profile-footer">
        {}
        <Link to="/">← Go Back</Link>
      </footer>
    </>
  );
}

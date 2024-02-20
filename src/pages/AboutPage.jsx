import { Outlet, Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>About us</h1>
      <div style={{ display: "flex", columnGap: "2rem" }}>
        <ul>
          <li>
            <Link to="contacts">Our Contacts</Link>
          </li>
          <li>
            <Link to="team">Our Team</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export { AboutPage };

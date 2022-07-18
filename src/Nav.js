import React from "react";
import { Link } from "react-router-dom";

/** Show links for each dog in the doglist
 *
 *  Props:
 *  - doglist
 */

function Nav({ doglist }) {
  console.log("doglist, Nav", doglist);
  return (
    <nav>
      {doglist.map((dog) => (
        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      ))}
    </nav>
  );
}

export default Nav;

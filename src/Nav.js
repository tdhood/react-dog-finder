import React from "react";
import { Link } from "react-router-dom";

/** Show links for each dog in the doglist as NavBar
 *
 *  Props:
 *  - doglist
 * 
 * App -> Nav
 */

function Nav({ doglist }) {
  console.log("doglist, Nav", doglist);
  return (
    <nav>
      {doglist.map((dog) => (
        <Link key={dog.name} to={`/dogs/${dog.name}`}>{dog.name}</Link>
      ))}
    </nav>
  );
}

export default Nav;

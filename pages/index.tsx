import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Teamlist from "../components/Teamslist";

export default function Home() {
  const [teams, setTeams] = useState(null);

  // fetch data
  useEffect(() => {
    const teams_res = localStorage.getItem("teams");
    const teams = !!teams_res ? JSON.parse(teams_res) : undefined;
    setTeams(teams);
  }, []);

  return (
    <div className="px-4 py-5">
      <h1>Hi trainer!</h1>
      <h6>This are your build up team.</h6>

      <Teamlist teams={teams} />
    </div>
  );
}

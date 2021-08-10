import { useRouter } from "next/router";

const Teamlist = ({ teams }: any) => {
  const router = useRouter();

  const goToGenerator = () => {
    router.push("/generator");
  }

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        {teams &&
          teams.length > 0 &&
          teams.map((team: any) => <div className="col-4" key={team.name}>{team.name}</div>)}

        {(!teams || teams.length == 0) && (
          <div className="col-12">
            <p>You have no team...</p>
            <button className="btn button-primary shadow-lg" onClick={goToGenerator}>
              Create one!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teamlist;

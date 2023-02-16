import { useSearchParams } from "react-router-dom";

const TeamDetail = () => {
  const [searchParams, _] = useSearchParams();
  const teamId = searchParams.get("id");
  console.log(teamId);
  return null;
};

export default TeamDetail;

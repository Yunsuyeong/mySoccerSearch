import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getLeagueStanding, IGetStandings } from "./api";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 150vh;
  background-size: cover;
  background-position: center center;
`;

const Cols = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Col = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  color: white;
  padding: 15px;
`;

const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
    cursor: pointer;
  }
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  padding-right: 20px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid white;
`;

const StandingBox = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

const TeamBox = styled.div`
  width: 100%;
  display: flex;
  font-weight: bold;
  background-color: rgba(144, 238, 144, 0.5);
  padding: 10px;
  :hover {
    font-weight: bold;
  }
`;

const Lname = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

const Trank = styled.h3`
  width: 5%;
  font-size: 16px;
  text-align: center;
`;

const Tname = styled.h3`
  width: 15%;
  font-size: 16px;
  text-align: center;
`;

const Tall = styled.h3`
  width: 10%;
  font-size: 16px;
  text-align: center;
`;

const Tgoal = styled.h3`
  width: 10%;
  font-size: 16px;
  text-align: center;
`;

interface IForm {
  name: string;
}

const LeagueDetail = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IForm>();
  const [searchParams, _] = useSearchParams();
  const leagueId = searchParams.get("id");
  const { data: StandingData, isLoading } = useQuery<IGetStandings>(
    ["league", "standings"],
    () => getLeagueStanding(leagueId!)
  );
  const Response = StandingData?.response;
  const onValid = (data: IForm) => {
    navigate(`/search/player?id=${leagueId}&name=${data.name}`);
  };
  return (
    <Wrapper
      style={{
        backgroundImage: `url("https://wallpapercave.com/dwp2x/wp9116447.jpg")`,
      }}
    >
      <Cols>
        <Col>
          {Response?.map((res) => (
            <Box key={res.league.id}>
              <Lname>{res.league.name} - Standings</Lname>
              <StandingBox>
                <TeamBox
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <Trank>Rank</Trank>
                  <Tname>Team</Tname>
                  <Tall>Played</Tall>
                  <Tall>Won</Tall>
                  <Tall>Draw</Tall>
                  <Tall>Loss</Tall>
                  <Tgoal>GF</Tgoal>
                  <Tgoal>GA</Tgoal>
                  <Tgoal>GD</Tgoal>
                  <Tall>Points</Tall>
                </TeamBox>
                {res.league.standings[0].map((team) => (
                  <TeamBox
                    key={team.team.id}
                    style={{ borderBottom: "0.5px solid white" }}
                  >
                    <Trank>{team.rank}</Trank>
                    <Tname>{team.team.name}</Tname>
                    <Tall>{team.all.played}</Tall>
                    <Tall>{team.all.win}</Tall>
                    <Tall>{team.all.draw}</Tall>
                    <Tall>{team.all.lose}</Tall>
                    <Tgoal>{team.all.goals.for}</Tgoal>
                    <Tgoal>{team.all.goals.against}</Tgoal>
                    <Tgoal>{team.goalsDiff}</Tgoal>
                    <Tall>{team.points}</Tall>
                  </TeamBox>
                ))}
              </StandingBox>
            </Box>
          ))}
        </Col>
        <Col>
          <Box>
            <Search onSubmit={handleSubmit(onValid)}>
              <motion.svg
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </motion.svg>
              <Input
                {...register("name", { required: true, minLength: 2 })}
                placeholder="Search for Player"
              />
            </Search>
          </Box>
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default LeagueDetail;

import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getLeagueStanding, getTeams, IGetStandings, IgetTeams } from "./api";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { makeImagePath } from "../../utils";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 100px;
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
  background-color: white;
  color: black;
  padding: 15px;
`;

const StandingBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid white;
  background-color: rgba(189, 195, 199, 1);
  opacity: 0.8;
  padding: 20px;
`;

const TeamBox = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding-top: 3px;
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

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const Bigbox = styled(motion.div)`
  position: absolute;
  background-color: black;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
`;

const Bcover = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center center;
`;

const Blogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Bname = styled.h3`
  position: relative;
  top: -60px;
  color: white;
  font-size: 36px;
  padding: 10px;
`;

const InfoBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: purple;
`;

const Binfo = styled.p`
  color: white;
  font-size: 20px;
  padding: 15px;
`;

const VenueBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: lightgreen;
`;

const Bvenue = styled.p`
  color: white;
  font-size: 20px;
  padding: 15px;
`;

const BundesTeams = () => {
  const navigate = useNavigate();
  const { data: BundesData, isLoading } = useQuery<IGetStandings>(
    ["league", "bundes"],
    () => getLeagueStanding("78")
  );
  const { data: BundesTeamData } = useQuery<IgetTeams>(
    ["teams", "germany"],
    () => getTeams(78)
  );
  const { scrollY } = useScroll();
  const teamMatch = useMatch("/team/78/:teamId");
  const Response = BundesData?.response;
  const onBoxClick = (teamId: number) => {
    navigate(`/team/78/${teamId}`);
  };
  const onOverlayClick = () => {
    navigate("/team/78");
  };
  const clickedTeam =
    teamMatch?.params.teamId &&
    BundesTeamData?.response.find(
      (team) => String(team.team.id) === teamMatch?.params.teamId
    );
  return (
    <Wrapper>
      <Cols>
        <Col>
          {Response?.map((res) => (
            <Box key={res.league.id}>
              <Lname>{res.league.name}</Lname>
              <StandingBox>
                <TeamBox style={{ marginBottom: "10px" }}>
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
                    onClick={() => onBoxClick(team.team.id)}
                    key={team.team.id}
                    style={{
                      borderBottom: "0.1px solid white",
                      cursor: "pointer",
                    }}
                    layoutId={team.team.id + ""}
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
      </Cols>
      <AnimatePresence>
        {teamMatch ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Bigbox
              style={{ top: scrollY.get() + 100 }}
              layoutId={teamMatch.params.teamId}
            >
              {clickedTeam && (
                <>
                  <Bcover
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent),
                  url(${makeImagePath(clickedTeam.venue.id)})
                `,
                    }}
                  />
                  <Bname>
                    <Blogo src={clickedTeam.team.logo} />
                    {clickedTeam.team.name}
                  </Bname>
                  <div
                    style={{
                      position: "relative",
                      height: "50%",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <InfoBox>
                      <Binfo style={{ fontSize: "24px", textAlign: "center" }}>
                        Information
                      </Binfo>
                      <Binfo>Country : {clickedTeam.team.country}</Binfo>
                      <Binfo>Founded : {clickedTeam.team.founded}</Binfo>
                    </InfoBox>
                    <VenueBox>
                      <Bvenue style={{ fontSize: "24px", textAlign: "center" }}>
                        Venue
                      </Bvenue>
                      <Bvenue>Name : {clickedTeam.venue.name}</Bvenue>
                      <Bvenue>Address : {clickedTeam.venue.address}</Bvenue>
                      <Bvenue>Capacity : {clickedTeam.venue.capacity}</Bvenue>
                    </VenueBox>
                  </div>
                </>
              )}
            </Bigbox>
          </>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default BundesTeams;

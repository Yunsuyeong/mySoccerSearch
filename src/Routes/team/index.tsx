import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getLeagueStanding, getTeams, IGetStandings, IgetTeams } from "./api";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { makeImagePath } from "../../utils";
import { useState } from "react";

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

const StandingBox = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

const TeamBox = styled(motion.div)`
  width: 100%;
  display: flex;
  font-weight: bold;
  background-color: rgba(173, 216, 230, 0.5);
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
  width: 25%;
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
  width: 50vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: rgba(173, 216, 230, 0.8);
  font-weight: 500;
  border-radius: 15px;
  overflow: hidden;
`;

const Bcover = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
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
  top: -10px;
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
  background-color: rgba(30, 139, 195, 0.8);
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
  background-color: rgba(0, 181, 204, 0.8);
`;

const Bvenue = styled.p`
  color: white;
  font-size: 20px;
  padding: 15px;
`;

const Select = styled.select`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #444;
  background-color: #fff;
  padding: 0.6em 1.4em 0.5em 0.8em;
  margin: 0;
  border: 1px solid #aaa;
  border-radius: 0.5em;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
`;

const Team = () => {
  const navigate = useNavigate();
  const { data: PremierData, isLoading } = useQuery<IGetStandings>(
    ["league", "premier"],
    () => getLeagueStanding("39")
  );
  const { data: PremierTeamData } = useQuery<IgetTeams>(
    ["teams", "england"],
    () => getTeams(39)
  );
  const { data: LaLigaData } = useQuery<IGetStandings>(
    ["league", "laliga"],
    () => getLeagueStanding("140")
  );
  const { data: LaLigaTeamData } = useQuery<IgetTeams>(["teams", "spain"], () =>
    getTeams(140)
  );
  const { data: SerieData } = useQuery<IGetStandings>(["league", "serie"], () =>
    getLeagueStanding("135")
  );
  const { data: SerieTeamData } = useQuery<IgetTeams>(["teams", "italy"], () =>
    getTeams(135)
  );
  const { data: BundesData } = useQuery<IGetStandings>(
    ["league", "bundes"],
    () => getLeagueStanding("78")
  );
  const { data: BundesTeamData } = useQuery<IgetTeams>(
    ["teams", "germany"],
    () => getTeams(78)
  );
  const { data: LigueData } = useQuery<IGetStandings>(["league", "ligue"], () =>
    getLeagueStanding("61")
  );
  const { data: LigueTeamData } = useQuery<IgetTeams>(["teams", "france"], () =>
    getTeams(61)
  );
  const { scrollY } = useScroll();
  const teamMatch1 = useMatch("/team/39/:teamId");
  const teamMatch2 = useMatch("/team/140/:teamId");
  const teamMatch3 = useMatch("/team/135/:teamId");
  const teamMatch4 = useMatch("/team/78/:teamId");
  const teamMatch5 = useMatch("/team/61/:teamId");
  const onOverlayClick = () => {
    navigate("/team");
  };
  const clickedTeam1 =
    teamMatch1?.params.teamId &&
    PremierTeamData?.response.find(
      (team) => String(team.team.id) === teamMatch1?.params.teamId
    );
  const clickedTeam2 =
    teamMatch2?.params.teamId &&
    LaLigaTeamData?.response.find(
      (team) => String(team.team.id) === teamMatch2?.params.teamId
    );
  const clickedTeam3 =
    teamMatch3?.params.teamId &&
    SerieTeamData?.response.find(
      (team) => String(team.team.id) === teamMatch3?.params.teamId
    );
  const clickedTeam4 =
    teamMatch4?.params.teamId &&
    BundesTeamData?.response.find(
      (team) => String(team.team.id) === teamMatch4?.params.teamId
    );
  const clickedTeam5 =
    teamMatch5?.params.teamId &&
    LigueTeamData?.response.find(
      (team) => String(team.team.id) === teamMatch5?.params.teamId
    );
  const [league, setLeague] = useState("Premier");
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(to bottom, gray, transparent),
                      url("https://images.pexels.com/photos/2291006/pexels-photo-2291006.jpeg")`,
      }}
    >
      <Cols>
        <Select onChange={(e) => setLeague(e.target.value)}>
          <option value="Premier">Premier League</option>
          <option value="Laliga">Laliga</option>
          <option value="Serie">Serie A</option>
          <option value="Bundes">Bundesliga</option>
          <option value="Ligue">Ligue 1</option>
        </Select>
        <Col>
          {league === "Premier" && (
            <Box>
              <Lname>Premier League</Lname>
              {PremierData?.response?.map((res) => (
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
                      onClick={() => navigate(`/team/39/${team.team.id}`)}
                      key={team.team.id}
                      style={{
                        borderBottom: "0.5px solid black",
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
              ))}
            </Box>
          )}
          {league === "Laliga" && (
            <Box>
              <Lname>Laliga</Lname>
              {LaLigaData?.response?.map((res) => (
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
                      onClick={() => navigate(`/team/140/${team.team.id}`)}
                      key={team.team.id}
                      style={{
                        borderBottom: "0.5px solid black",
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
              ))}
            </Box>
          )}
          {league === "Serie" && (
            <Box>
              <Lname>Serie A</Lname>
              {SerieData?.response?.map((res) => (
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
                      onClick={() => navigate(`/team/135/${team.team.id}`)}
                      key={team.team.id}
                      style={{
                        borderBottom: "0.5px solid black",
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
              ))}
            </Box>
          )}
          {league === "Bundes" && (
            <Box>
              <Lname>Bundesliga</Lname>
              {BundesData?.response?.map((res) => (
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
                      onClick={() => navigate(`/team/78/${team.team.id}`)}
                      key={team.team.id}
                      style={{
                        borderBottom: "0.5px solid black",
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
              ))}
            </Box>
          )}
          {league === "Ligue" && (
            <Box>
              <Lname>Ligue 1</Lname>
              {LigueData?.response?.map((res) => (
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
                      onClick={() => navigate(`/team/61/${team.team.id}`)}
                      key={team.team.id}
                      style={{
                        borderBottom: "0.5px solid black",
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
              ))}
            </Box>
          )}
        </Col>
      </Cols>
      <AnimatePresence>
        {teamMatch1 ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Bigbox
              style={{ top: scrollY.get() + 100 }}
              layoutId={teamMatch1.params.teamId}
            >
              {clickedTeam1 && (
                <>
                  <Bcover
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent),
                  url(${makeImagePath(clickedTeam1.venue.id)})
                `,
                    }}
                  />
                  <Bname>
                    <Blogo src={clickedTeam1.team.logo} />
                    {clickedTeam1.team.name}
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
                      <Binfo>Country : {clickedTeam1.team.country}</Binfo>
                      <Binfo>Founded : {clickedTeam1.team.founded}</Binfo>
                    </InfoBox>
                    <VenueBox>
                      <Bvenue style={{ fontSize: "24px", textAlign: "center" }}>
                        Venue
                      </Bvenue>
                      <Bvenue>Name : {clickedTeam1.venue.name}</Bvenue>
                      <Bvenue>Address : {clickedTeam1.venue.address}</Bvenue>
                      <Bvenue>Capacity : {clickedTeam1.venue.capacity}</Bvenue>
                    </VenueBox>
                  </div>
                </>
              )}
            </Bigbox>
          </>
        ) : teamMatch2 ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Bigbox
              style={{ top: scrollY.get() + 100 }}
              layoutId={teamMatch2.params.teamId}
            >
              {clickedTeam2 && (
                <>
                  <Bcover
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent),
                  url(${makeImagePath(clickedTeam2.venue.id)})
                `,
                    }}
                  />
                  <Bname>
                    <Blogo src={clickedTeam2.team.logo} />
                    {clickedTeam2.team.name}
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
                      <Binfo>Country : {clickedTeam2.team.country}</Binfo>
                      <Binfo>Founded : {clickedTeam2.team.founded}</Binfo>
                    </InfoBox>
                    <VenueBox>
                      <Bvenue style={{ fontSize: "24px", textAlign: "center" }}>
                        Venue
                      </Bvenue>
                      <Bvenue>Name : {clickedTeam2.venue.name}</Bvenue>
                      <Bvenue>Address : {clickedTeam2.venue.address}</Bvenue>
                      <Bvenue>Capacity : {clickedTeam2.venue.capacity}</Bvenue>
                    </VenueBox>
                  </div>
                </>
              )}
            </Bigbox>
          </>
        ) : teamMatch3 ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Bigbox
              style={{ top: scrollY.get() + 100 }}
              layoutId={teamMatch3.params.teamId}
            >
              {clickedTeam3 && (
                <>
                  <Bcover
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent),
                  url(${makeImagePath(clickedTeam3.venue.id)})
                `,
                    }}
                  />
                  <Bname>
                    <Blogo src={clickedTeam3.team.logo} />
                    {clickedTeam3.team.name}
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
                      <Binfo>Country : {clickedTeam3.team.country}</Binfo>
                      <Binfo>Founded : {clickedTeam3.team.founded}</Binfo>
                    </InfoBox>
                    <VenueBox>
                      <Bvenue style={{ fontSize: "24px", textAlign: "center" }}>
                        Venue
                      </Bvenue>
                      <Bvenue>Name : {clickedTeam3.venue.name}</Bvenue>
                      <Bvenue>Address : {clickedTeam3.venue.address}</Bvenue>
                      <Bvenue>Capacity : {clickedTeam3.venue.capacity}</Bvenue>
                    </VenueBox>
                  </div>
                </>
              )}
            </Bigbox>
          </>
        ) : teamMatch4 ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Bigbox
              style={{ top: scrollY.get() + 100 }}
              layoutId={teamMatch4.params.teamId}
            >
              {clickedTeam4 && (
                <>
                  <Bcover
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent),
                  url(${makeImagePath(clickedTeam4.venue.id)})
                `,
                    }}
                  />
                  <Bname>
                    <Blogo src={clickedTeam4.team.logo} />
                    {clickedTeam4.team.name}
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
                      <Binfo>Country : {clickedTeam4.team.country}</Binfo>
                      <Binfo>Founded : {clickedTeam4.team.founded}</Binfo>
                    </InfoBox>
                    <VenueBox>
                      <Bvenue style={{ fontSize: "24px", textAlign: "center" }}>
                        Venue
                      </Bvenue>
                      <Bvenue>Name : {clickedTeam4.venue.name}</Bvenue>
                      <Bvenue>Address : {clickedTeam4.venue.address}</Bvenue>
                      <Bvenue>Capacity : {clickedTeam4.venue.capacity}</Bvenue>
                    </VenueBox>
                  </div>
                </>
              )}
            </Bigbox>
          </>
        ) : teamMatch5 ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Bigbox
              style={{ top: scrollY.get() + 100 }}
              layoutId={teamMatch5.params.teamId}
            >
              {clickedTeam5 && (
                <>
                  <Bcover
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent),
                  url(${makeImagePath(clickedTeam5.venue.id)})
                `,
                    }}
                  />
                  <Bname>
                    <Blogo src={clickedTeam5.team.logo} />
                    {clickedTeam5.team.name}
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
                      <Binfo>Country : {clickedTeam5.team.country}</Binfo>
                      <Binfo>Founded : {clickedTeam5.team.founded}</Binfo>
                    </InfoBox>
                    <VenueBox>
                      <Bvenue style={{ fontSize: "24px", textAlign: "center" }}>
                        Venue
                      </Bvenue>
                      <Bvenue>Name : {clickedTeam5.venue.name}</Bvenue>
                      <Bvenue>Address : {clickedTeam5.venue.address}</Bvenue>
                      <Bvenue>Capacity : {clickedTeam5.venue.capacity}</Bvenue>
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

export default Team;

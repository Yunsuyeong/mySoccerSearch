import { motion, useAnimation } from "framer-motion";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Nav = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 20px 60px;
  z-index: 1;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    color: blue;
  }
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
  padding-left: 40px;
  z-index: -1;
  font-size: 16px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: red;
`;

interface IForm {
  keyword: string;
}

const Header = () => {
  const navigate = useNavigate();
  const homeMatch = useMatch("/");
  const teamMatch = useMatch("/team");
  const playerMatch = useMatch("/player");
  const { register, handleSubmit, setFocus } = useForm<IForm>();
  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation();
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((prev) => !prev);
    setFocus("keyword");
  };
  const onValid = (data: IForm) => {
    navigate(`/search?keyword=${data.keyword}`);
    window.location.reload();
  };
  return (
    <Nav>
      <Col>
        <Items>
          <Item>
            <Link to="/">Home {homeMatch && <Circle layoutId="circle" />}</Link>
          </Item>
          <Item>
            <Link to="/team">
              Team {teamMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/player">
              Player {playerMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onValid)}>
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: searchOpen ? -185 : 0 }}
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
            {...register("keyword", { required: true, minLength: 2 })}
            placeholder="Search for league, team, and player"
            initial={{ scaleX: 0 }}
            animate={inputAnimation}
          />
        </Search>
      </Col>
    </Nav>
  );
};

export default Header;

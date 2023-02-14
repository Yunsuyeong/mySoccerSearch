import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 20px 60px;
  z-index: 1;
  background-color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const Item = styled.li`
  margin-right: 20px;
  color: black;
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

const Title = styled.h1`
  font-size: 48px;
`;

const Header = () => {
  return (
    <Nav>
      <Col>
        <Items>
          <Title>A Simple Soccer Search Site</Title>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/search">Search</Link>
          </Item>
        </Items>
      </Col>
    </Nav>
  );
};

export default Header;

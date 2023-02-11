import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Banner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 80px;
`;

const SearchForm = styled.form`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  position: relative;
`;

const Input = styled(motion.input)`
  padding: 5px 10px;
  padding-left: 40px;
  color: black;
  font-size: 24px;
  border: 1px solid white;
`;

const SearchTeam = () => {
  const { register, handleSubmit, setFocus } = useForm();
  const [searchParams, _] = useSearchParams();
  const num = searchParams.get("num");
  const keyword = searchParams.get("keyword");
  return (
    <Banner>
      <SearchForm>
        <Input {...register("num", { required: true })} placeholder="enter" />
        <Input
          {...register("keyword", { required: true, minLength: 2 })}
          placeholder="enter2"
        />
      </SearchForm>
    </Banner>
  );
};

export default SearchTeam;

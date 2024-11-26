import styled from "styled-components";

const AboutDream = styled.div`
  width: 100%;
  height: 289px;
  textarea {
    width: 100%;
    height: 289px;
    padding: 15px;
    border: 2px solid #00b9c6;
    border-radius: 10px;
    background-color: rgba(0, 185, 198, 0.18);
    color: #fff;
    font-size: 16px;
    resize: none; /* 크기 조정 막기 */
  }
`;

const DreamBox = ({ value, onChange, placeholder }) => {
  return (
    <AboutDream>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </AboutDream>
  );
};

export default DreamBox;

import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 289px;
  padding: 15px;
  border: 2px solid #00b9c6;
  border-radius: 10px;
  background-color: rgba(0, 185, 198, 0.18);
  color: #fff;
  font-size: 22px;
  font-family: "Dongle", sans-serif;
  font-weight: 400;
  font-style: normal;
  resize: none;
`;

const DreamBox = ({
  value,
  onChange = () => {},
  placeholder = "Describe your dream...",
  isEditable = true,
}) => {
  return (
    <div>
      <StyledTextarea
        value={value}
        onChange={isEditable ? onChange : undefined}
        placeholder={placeholder}
        readOnly={!isEditable}
      />
    </div>
  );
};

export default DreamBox;

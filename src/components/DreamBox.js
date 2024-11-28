import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 289px;
  padding: 15px;
  border: 2px solid rgba(0, 185, 198, 0.6);
  border-radius: 10px;
  background-color: rgba(0, 185, 198, 0.3);
  color: #fff;
  font-size: 22px;
  font-family: "Dongle", sans-serif;
  font-weight: 400;
  font-style: normal;
  resize: none;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #00b9c6;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #008b99;
  }

  scrollbar-width: thin;
  scrollbar-color: #00b9c6 rgba(0, 0, 0, 0.2);
`;

const DreamBox = ({
  value,
  onChange = () => {},
  placeholder = "Describe your dream...",
  isEditable = true,
}) => {
  return (
    <StyledTextarea
      value={value}
      onChange={isEditable ? onChange : undefined}
      placeholder={placeholder}
      readOnly={!isEditable}
    />
  );
};

export default DreamBox;

import React from "react";
import chroma from "chroma-js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import { colourOptions } from './data';
import Select from "react-select";

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 5,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 8,
    width: 8,
  },
});

const colourStyles = {
  control: (styles,{isDisabled}) => {
    return {
      ...styles,
      backgroundColor: "white",
      position: "absolute",
      width: "120px",
      height: "40px",
      left: "435px",
      top: "120px",
      background: "#ffffff",
      border: "1px solid #036FCB",
      boxSizing: "border-box",
      boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
      borderRadius: "8px",
      cursor: isDisabled ? "not-allowed" : "default",
         };
  },
  menu: (css) => ({
    ...css,
    width: "150px",
    // ...(isCalculatingWidth && { height: 0, visibility: "hidden" })
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    console.log("option-data", data);
    const color = data.color;
    return {
      ...styles,
      width: "150px",
      backgroundColor: isSelected ? "#F1F4F5" : "#FFFFFF",
      Color: isSelected ? "black" : 'black',

      // "&:hover": {
      //   backgroundColor: "white",
      //   // color: "red"
      // },
      // "&:onclick": {
      //   // borderColor: "white",
      //   backgroundColor: "red",

      //   // color: "red"
      // },

      color: isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : "black",
      cursor: isDisabled ? "not-allowed" : "default",


      // ":active": {
      //   ...styles[":active"],
      //   backgroundColor: isSelected ? data.color : color,
      // },
    };
  },

  input: (styles) => {
    return { ...styles, ...dot() };
  },
  placeholder: (styles) => {
    return { ...styles, ...dot() };
  },
  singleValue: (styles, { data }) => {
    return { ...styles, ...dot(data.color) };
  },
};
const data = [
  {
    value: "1",
    label: "All Status",
    color: "white",
  },
  {
    value: "2",
    label: "Active",
    color: "green",
  },
  {
    value: "3",
    label: "Pending",
    color: "yellow",
  },
  {
    value: "4",
    label: "Past",
    color: "red",
  },
];
const Option = (props) => {
  console.log("props", props);
  const {data,isSelected,innerRef,innerProps}=props;
  const {color,label,value}=data;

  return (
    <div ref={innerRef} {...innerProps} style={{display:'flex',flexDirection:'row',backgroundColor:isSelected ?"#E5E5E5":"#FFFFFF" ,height:'40px',flex:1,justifyContent:"space-evenly",alignItems:'center'}}>
      {value=='1'? null: <div style={{height:'10px', width:'10px',borderRadius:'5px',backgroundColor:color}}></div>}
      <div>
        {label}</div>
    </div>
  );
};

const DropdownMenu = () => (
  <Select
   classNamePrefix="select"
    defaultValue={data[1]}
    label="Single select"
    options={data}
    styles={colourStyles}
    style={{ width: "120px" }}
    menuPosition={"fixed"}
    menuPlacement={"auto"}
    components={{
      DropdownIndicator: () => <ExpandMoreIcon />,
      IndicatorSeparator: () => null,
      Cursor:()=>null,
      
       Option

    }}
    // Components={<div><div>dot</div><span>ab</span></div>}
  />
);
export default DropdownMenu;
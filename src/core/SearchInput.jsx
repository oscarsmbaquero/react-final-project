import React from "react";

/* import SearchIcon from "@mui/icons-material/Search"; */
import styles from "./SearchInput.module.css";
const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      
            <input {...rest} className={styles.input} />🔎
      
    </div>
  );
};

export default SearchInput;

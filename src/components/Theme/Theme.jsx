import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (theme !== undefined) {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, [theme]);

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("theme")));
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return theme === "light" ? (
    <div onClick={toggleDarkMode}>
      <MdDarkMode />
    </div>
  ) : (
    <div onClick={toggleDarkMode}>
      <FaSun />
    </div>
  );
};

export default Theme;

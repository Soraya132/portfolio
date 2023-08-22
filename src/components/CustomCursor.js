
import { Cursor } from "react-custom-cursors";
import "react-custom-cursors/dist/index.css";
import { useTheme } from "../ThemeContext";

function CustomCursor() {
  const { themeColor, animatedCursor } = useTheme()
  return (
    <div>
      {animatedCursor}

    </div>
  )
}

export default CustomCursor

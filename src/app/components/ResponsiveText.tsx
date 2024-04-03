import { useState, useEffect } from "react";
import PermutableText from "./PermutableText";
import { DRAG_RESIZE_EVENT_NAME } from "../draggableGrid";

interface TextOption {
  text: string;
  breakpoint: number;
}

interface PermutationOptions {
  options: string[];
  delay?: number;
}

const getCurrentText = (textOptions: TextOption[], innerWidth: number) => {
  // Sort textOptions ascending by breakpoint
  textOptions.sort(
    (a: TextOption, b: TextOption) => a.breakpoint - b.breakpoint
  );
  for (const option of textOptions) {
    if (innerWidth < option.breakpoint) {
      return option.text; // Get the text for the first breakpoint smaller than the innerWidth
    }
  }
  return textOptions.slice(-1)[0].text; // Otherwise, return the longest text
};

const ResponsiveText = ({
  textOptions,
  permutationOptions = null,
}: {
  textOptions: TextOption[];
  permutationOptions?: PermutationOptions | null;
}) => {
  const [text, setText] = useState(
    getCurrentText(textOptions, window.innerWidth)
  );

  // TODO: Improve this so it isn't coupled to the main page ID
  useEffect(() => {
    const handleResize = () => {
      console.log(
        window.innerWidth -
          (document.getElementById("left-panel")?.clientWidth || 0)
      );
      setText(
        getCurrentText(
          textOptions,
          window.innerWidth -
            (document.getElementById("left-panel")?.clientWidth || 0)
        )
      );
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener(DRAG_RESIZE_EVENT_NAME, handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener(DRAG_RESIZE_EVENT_NAME, handleResize);
    };
  }, [textOptions]);

  if (permutationOptions) {
    return (
      <PermutableText
        text={text}
        options={permutationOptions.options || [""]}
        delay={permutationOptions.delay || 60}
      />
    );
  }
  return <div>{text}</div>;
};

export default ResponsiveText;

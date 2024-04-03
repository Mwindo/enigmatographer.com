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
  textOptions.sort(
    (a: TextOption, b: TextOption) => b.breakpoint - a.breakpoint
  );
  for (const option of textOptions) {
    if (innerWidth < option.breakpoint) {
      return option.text;
    }
  }
  return textOptions.slice(-1)[0].text;
};

const ResponsiveText = ({
  textOptions,
  permutationOptions = null,
}: {
  textOptions: TextOption[];
  permutationOptions?: PermutationOptions | null; // TODO: Add checks that the passed breakpoints make sense
}) => {
  const [text, setText] = useState(
    getCurrentText(textOptions, window.innerWidth)
  );

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

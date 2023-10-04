import { createElement } from "react";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  label: string;
};

const EyebrowTitle = ({ as, label }: Props) => {
  const component = as || "div";

  return createElement(component, {
    className:
      "text-sm uppercase tracking-wide bg-secondary text-primary px-5 py-2 rounded-full inline-flex font-heading mb-4 lg:mb-6",
    children: label,
  });
};

export default EyebrowTitle;

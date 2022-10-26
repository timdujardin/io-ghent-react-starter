import { FC, HTMLAttributes } from "react";

export const Introduction: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

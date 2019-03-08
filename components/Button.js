import { css } from "@emotion/core";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const CSS = () =>
  mq({
    color: ["red", "green", "hotpink"],
  });

export default props => <button css={CSS} {...props} />;

import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const MailWhiteIcon = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M9.92 10.415a2.553 2.553 0 0 1-2.84 0L.112 5.771A2.524 2.524 0 0 1 0 5.691v7.61c0 .873.708 1.565 1.565 1.565h13.87c.873 0 1.565-.708 1.565-1.565v-7.61a2.498 2.498 0 0 1-.113.08L9.92 10.415Z" />
      <Path d="m.666 4.943 6.966 4.644a1.563 1.563 0 0 0 1.736 0l6.966-4.644c.417-.278.666-.743.666-1.245 0-.862-.702-1.564-1.564-1.564H1.564C.702 2.134 0 2.836 0 3.699c0 .5.249.966.666 1.244Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h17v17H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MailWhiteIcon;

import styled, { css } from "styled-components";
import { colors, TColors } from "./constants/colors";

export type TTypographyProps = {
  color?: TColors;
  align?: "center" | "end" | "justify" | "left" | "right" | "start";
  subColor?: TColors;
};

const subColorStyle = css<TTypographyProps>`
  && {
    span {
      ${({ subColor }) => {
    return subColor?.substring(0, 8) === "gradient"
      ? css`
              background: ${colors[subColor]};
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `
      : css`
              color: ${subColor
          ? colors[subColor]
          : "var(--grey-900, #101010)"};
            `;
  }}
    }
  }
`;

const globalStyle = css<TTypographyProps>`
  ${({ color }) => {
    return color?.substring(0, 8) === "gradient"
      ? css`
          background: ${colors[color]};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `
      : css`
          color: ${color ? colors[color] : "var(--grey-900, #101010)"};
        `;
  }}
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  ${({ subColor }) => subColor && subColorStyle}
  font-family:  'Mulish', sans-serif;
  font-style: normal;
  text-transform: none;
`;

/* -------------------- display text style -------------------- */
export const Display1 = styled.h1<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 64px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 84px;
  }
`;
export const Display2 = styled.h1<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 56px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 78px;
  }
`;
export const Display3 = styled.h1<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 48px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 68px;
  }
`;
export const Display4 = styled.h1<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 46px;
  }
`;

/* -------------------- Heading text style -------------------- */
export const H1 = styled.h1<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 38px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 52px;
  }
`;
export const H2 = styled.h2<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 44px;
  }
`;
export const H3 = styled.h3<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 36px;
  }
`;
export const H4 = styled.h4<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 30px;
  }
`;
export const H5 = styled.h5<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 24px;
  }
`;
export const H6 = styled.h6<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 21px;
  }
`;

/* -------------------- Paragraph text style -------------------- */
export const ParagraphLead = styled.p<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
  }
`;
export const Paragraph = styled.p<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22px;
  }
`;
export const ParagraphMedium = styled.p<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 22px;
  }
`;
export const ParagraphSemiBold = styled.p<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 22px;
  }
`;
export const ParagraphBold = styled.p<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 22px;
  }
`;
export const ParagraphSmall = styled.p<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
  }
`;
export const ParagraphSmallSemiBold = styled.p<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 14px;
  }
`;
export const ParagraphSmallBold = styled.p<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 20px;
  }
`;

/* -------------------- Extra text style -------------------- */
export const DeleteText = styled.del<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    text-decoration: line-through;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
  }
`;
export const Italicized = styled.i<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    text-transform: lowercase;
  }
`;
export const Underline = styled.u<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
  }
`;
export const Caption = styled.caption<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 14px;
  }
`;

/* -------------------- button text style -------------------- */
export const ButtonLG = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.4300000071525574px;
    line-height: 22px;
  }
`;
export const ButtonDefault = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.4300000071525574px;
  }
`;
export const ButtonSmall = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.4300000071525574px;
    line-height: 16px;
  }
`;

/* -------------------- label text style -------------------- */
export const LabelLg = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
  }
`;
export const LabelDefault = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
  }
`;
export const LabelSm = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0px;
  }
`;

/* -------------------- input text style -------------------- */
export const InputLg = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
  }
`;
export const InputDefault = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
  }
`;
export const InputSm = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0px;
  }
`;

/* -------------------- placeholder text style -------------------- */
export const PlaceholderLg = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22px;
  }
`;
export const PlaceholderDefault = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
  }
`;
export const PlaceholderSm = styled.button<TTypographyProps>`
  && {
    ${globalStyle}

    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 21px;
  }
`;

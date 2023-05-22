/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type Props = {
  label: string;
  value: number;
  color: string;
};

export default function Typewriter({ label, value, color }: Props) {
  return (
    <div
      css={css`
        margin-bottom: 10px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <span
          css={css`
            font-weight: 500;
          `}
        >
          {label}
        </span>
        <span
          css={css`
            font-weight: 200;
          `}
        >
          {value}%
        </span>
      </div>

      <div
        css={css`
          width: 100%;
          height: 10px;
          background-color: #e0e0de;
          border-radius: 20px;
          margin-top: 10px;
        `}
      >
        <div
          css={css`
            width: ${value}%;
            height: 100%;
            background-color: ${color};
            border-radius: 20px;
          `}
        />
      </div>
    </div>
  );
}

/** @jsxImportSource @emotion/react */

type Props = {
  width: number;
  height: number;
  fill: string;
};

const UserIcon: React.FC<Props> = ({ width, height, fill }) => {
  return (
    <svg fill={fill} width={width} height={height} viewBox="0 0 60 60">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM30 54C38.2949 54 45.6069 49.7919 49.9177 43.3941C47.2024 39.8027 42.5642 37.5364 37.469 37.5364H22.531C17.4358 37.5364 12.7976 39.8027 10.0823 43.3941C14.3931 49.7919 21.7051 54 30 54ZM42.5494 20.3898C42.5494 27.2325 36.9309 32.7796 30.0001 32.7796C23.0693 32.7796 17.4508 27.2325 17.4508 20.3898C17.4508 13.5471 23.0693 8 30.0001 8C36.9309 8 42.5494 13.5471 42.5494 20.3898Z"
      />
    </svg>
  );
};

export default UserIcon;

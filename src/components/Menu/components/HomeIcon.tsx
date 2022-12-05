/** @jsxImportSource @emotion/react */

type Props = {
  width: number;
  height: number;
  fill: string;
};

const HomeIcon: React.FC<Props> = ({ width, height, fill }) => {
  return (
    <svg fill={fill} width={width} height={height} viewBox="0 0 32 28">
      <path
        width={width}
        height={height}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8512 0.767595C16.8297 -0.255866 15.1735 -0.255864 14.152 0.767595L0.459681 14.8514C-0.153225 15.4655 -0.153228 16.4611 0.459679 17.0752C1.07259 17.6893 2.06631 17.6893 2.67921 17.0752L4.99991 14.6864V24C4.99991 26.2091 6.79078 28 8.99991 28H11.9999C12.5522 28 12.9999 27.5523 12.9999 27V20C12.9999 19.4477 13.4476 19 13.9999 19H17.9999C18.5522 19 18.9999 19.4477 18.9999 20V27C18.9999 27.5523 19.4476 28 19.9999 28H22.9999C25.2091 28 26.9999 26.2091 26.9999 24V14.683L29.3239 17.0752C29.9368 17.6893 30.9305 17.6893 31.5434 17.0752C32.1563 16.4611 32.1563 15.4655 31.5434 14.8514L17.8512 0.767595Z"
      />
    </svg>
  );
};

export default HomeIcon;

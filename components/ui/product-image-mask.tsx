interface ProductImageMaskProps {
  src: string;
}

export default function ProductImageMask({ src }: ProductImageMaskProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1254 774"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="productGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="black" stopOpacity="0.5" />
          <stop offset="100%" stopColor="black" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <mask
        id="productMask"
        maskUnits="userSpaceOnUse"
        x="-1"
        y="-1"
        width="1255"
        height="776"
        mask-type="alpha"
      >
        <path
          d="M1151.53 61.5533C1222.82 60.9817 1249.75 67.5834 1252.46 100.093L1252.46 719.464C1252.93 750.258 1261.9 774 1184.06 774H980.709C935.712 774 926.482 770.499 926.482 743.275V588.501C918.768 562.138 900.548 561.983 859.077 561.631L858.986 561.63C817.45 561.277 302.215 561.63 302.215 561.63H187.79C56.8506 561.63 0 570.425 0 511.366V82.3053C0 -2.00116 2.00415 0.0041718 161.047 0.00413006H373.613H681.001C713.554 1.40294 722.643 7.00304 726.878 23.2888C731.566 38.5952 739.179 58.5064 763.106 61.5533H1151.53Z"
          fill="#fff"
          stroke="#F7FEE7"
        />
      </mask>

      {/* Background Placeholder */}
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="#D9D9D9"
        mask="url(#productMask)"
      />

      {/* Image if provided */}
      {src && (
        <image
          href={src}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#productMask)"
        />
      )}

      {/* Gradient overlay for image */}
      {src && (
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#productGradient)"
          mask="url(#productMask)"
        />
      )}
    </svg>
  );
}

interface BlobMaskProps {
  src: string;
}

export default function BlobMask({ src }: BlobMaskProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 533 645"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-cover"
      preserveAspectRatio="xMidYMid meet"
    >
      <mask
        id="blobMask"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="533"
        height="645"
        mask-type="alpha"
      >
        <path
          d="M43.5093 36.9273C13.2936 36.4724 1.87545 41.7269 0.728792 67.603L0.728768 600.592C0.52903 625.103 -3.27106 644 29.7226 644H189C215.5 644 234.5 646 234.5 635C238 616.5 235.625 588.908 258 585H452C507.5 585 531.597 592 531.597 544.993V67.603C531.597 0.500053 531.597 0.500033 464.185 0.5H374.086H136.201C122.403 1.61337 118.55 6.07072 116.755 19.0332C114.768 31.2162 110.692 34.5022 100.55 36.9273H43.5093Z"
          fill="#fff"
        />
      </mask>

      {/* Background Placeholder */}
      <rect
        x="-31.5"
        y="-28.5"
        width="646"
        height="673"
        fill="#D0A5A5"
        mask="url(#blobMask)"
      />

      {/* Jika gambar diberikan, tampilkan */}
      {src && (
        <image
          href={src}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#blobMask)"
        />
      )}
    </svg>
  );
}

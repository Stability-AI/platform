import { Theme } from "~/Theme";

export function Token(props: Theme.Icon) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.4">
        <path
          d="M6.66504 11.6667C9.42646 11.6667 11.665 9.42811 11.665 6.66669C11.665 3.90526 9.42646 1.66669 6.66504 1.66669C3.90362 1.66669 1.66504 3.90526 1.66504 6.66669C1.66504 9.42811 3.90362 11.6667 6.66504 11.6667Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.0736 8.64166C15.8613 8.93535 16.5623 9.42294 17.1117 10.0593C17.6611 10.6957 18.0411 11.4604 18.2167 12.2826C18.3922 13.1047 18.3577 13.9579 18.1161 14.7632C17.8746 15.5685 17.4339 16.2998 16.8348 16.8897C16.2357 17.4795 15.4975 17.9087 14.6886 18.1377C13.8796 18.3666 13.026 18.3879 12.2066 18.1995C11.3873 18.0112 10.6287 17.6192 10.0009 17.06C9.37318 16.5007 8.8966 15.7922 8.61523 15"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83496 5H6.66829V8.33333"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9249 11.5667L14.5082 12.1583L12.1582 14.5083"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

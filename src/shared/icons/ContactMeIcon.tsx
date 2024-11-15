'use client'
import React from 'react';

interface IconProps {
  color?: string;
}

export default function ContactMeIcon({ color }: IconProps) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 512 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M424 80H88C73.1528 80.0159 58.9182 85.921 48.4196 96.4196C37.921 106.918 32.0159 121.153 32 136V376C32.0159 390.847 37.921 405.082 48.4196 415.58C58.9182 426.079 73.1528 431.984 88 432H424C438.847 431.984 453.082 426.079 463.58 415.58C474.079 405.082 479.984 390.847 480 376V136C479.984 121.153 474.079 106.918 463.58 96.4196C453.082 85.921 438.847 80.0159 424 80ZM409.82 172.63L265.82 284.63C263.012 286.813 259.557 287.998 256 287.998C252.443 287.998 248.988 286.813 246.18 284.63L102.18 172.63C100.488 171.352 99.0671 169.751 97.9994 167.92C96.9316 166.088 96.2386 164.062 95.9605 161.961C95.6824 159.859 95.8248 157.723 96.3793 155.676C96.9339 153.63 97.8897 151.715 99.191 150.041C100.492 148.367 102.113 146.969 103.96 145.927C105.806 144.885 107.841 144.221 109.947 143.972C112.052 143.724 114.186 143.896 116.224 144.479C118.263 145.063 120.165 146.045 121.82 147.37L256 251.73L390.18 147.37C393.535 144.836 397.753 143.725 401.921 144.276C406.089 144.828 409.873 146.998 412.453 150.317C415.034 153.636 416.205 157.838 415.712 162.014C415.219 166.189 413.103 170.003 409.82 172.63Z'
        fill={color}
      />
    </svg>
  );
}
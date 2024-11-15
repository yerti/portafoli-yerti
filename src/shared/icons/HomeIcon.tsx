'use client'
import React from 'react';

interface IconProps {
  color?: string;
}

export default function HomeIcon({ color }: IconProps) {
  return (
    <svg
      width='24'
      height='26'
      viewBox='0 0 512 513'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M261.567 101.437C260.079 100.012 258.098 99.2176 256.037 99.2176C253.977 99.2176 251.996 100.012 250.507 101.437L66.4075 277.307C65.6256 278.055 65.0036 278.953 64.5791 279.949C64.1545 280.944 63.9362 282.015 63.9375 283.097L63.9075 448.157C63.9075 456.644 67.2789 464.783 73.2801 470.784C79.2812 476.785 87.4205 480.157 95.9075 480.157H192.007C196.251 480.157 200.321 478.471 203.321 475.47C206.322 472.47 208.007 468.4 208.007 464.157V328.157C208.007 326.035 208.85 324 210.351 322.5C211.851 321 213.886 320.157 216.007 320.157H296.007C298.129 320.157 300.164 321 301.664 322.5C303.165 324 304.007 326.035 304.007 328.157V464.157C304.007 468.4 305.693 472.47 308.694 475.47C311.694 478.471 315.764 480.157 320.007 480.157H416.067C424.554 480.157 432.694 476.785 438.695 470.784C444.696 464.783 448.067 456.644 448.067 448.157V283.097C448.069 282.015 447.85 280.944 447.426 279.949C447.001 278.953 446.379 278.055 445.597 277.307L261.567 101.437Z'
        fill={color}
      />
      <path
        d='M490.917 244.307L416.117 172.747V64.1567C416.117 59.9132 414.432 55.8435 411.431 52.843C408.431 49.8424 404.361 48.1567 400.117 48.1567H352.117C347.874 48.1567 343.804 49.8424 340.804 52.843C337.803 55.8435 336.117 59.9132 336.117 64.1567V96.1567L278.197 40.7767C272.777 35.2967 264.717 32.1567 256.007 32.1567C247.327 32.1567 239.287 35.2967 233.867 40.7867L21.1675 244.287C14.9475 250.287 14.1675 260.157 19.8275 266.657C21.2488 268.297 22.9891 269.632 24.9424 270.578C26.8958 271.525 29.0214 272.065 31.1899 272.164C33.3583 272.263 35.5243 271.92 37.5559 271.155C39.5875 270.391 41.4423 269.221 43.0075 267.717L250.507 69.4367C251.996 68.0125 253.977 67.2176 256.037 67.2176C258.098 67.2176 260.079 68.0125 261.567 69.4367L469.087 267.717C472.144 270.648 476.239 272.248 480.473 272.166C484.708 272.083 488.737 270.325 491.677 267.277C497.817 260.917 497.307 250.417 490.917 244.307Z'
        fill={color}
      />
    </svg>
  );
}

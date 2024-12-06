'use client';
import React, { useEffect, useState } from 'react';
import styles from './RouteButton.module.css';
import Image from 'next/image';

interface RouteButtonProps {
  name: string;
  route: string;
  img?: string | React.ReactNode;
  variant?: string;
}

export default function RouteButton({
  name,
  route,
  img,
  variant,
}: RouteButtonProps) {
  const [variantRoute, setVariantRout] = useState(styles.buttonRoute);
  useEffect(() => {
    switch (variant) {
      case 'buttonRoute':
        setVariantRout(styles.buttonRoute);
        break;
      case 'secondary':
        setVariantRout(styles.secondary);
        break;
      default:
        setVariantRout(styles.buttonRoute);
        break;
    }
  }, [variant]);

  return (
    <a className={variantRoute} href={route}>
      {typeof img === 'string' ? (
        <Image width={15} height={15} src={img} alt={name} />
      ) : (
        img
      )}
      <span>{name}</span>
    </a>
  );
}

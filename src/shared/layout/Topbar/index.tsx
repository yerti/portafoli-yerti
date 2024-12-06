'use client';
import React from 'react';
import RouteButton from 'app/shared/components/RouteButton/RouteButton';
import { MdOutlineFileDownload } from 'react-icons/md';
import styles from './styles.module.css'

const Topbar = () => {
  return (
    <div className={styles.contentTotalTopbar}>
      <RouteButton
        name='Descargar CV'
        route='#'
        variant='buttonRoute'
        img={<MdOutlineFileDownload />}
      />
    </div>
  );
};

export default Topbar;

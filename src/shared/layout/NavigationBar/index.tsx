'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './style.module.css';
import Image from 'next/image';
import { MenuItem } from 'app/shared/types/MenuItem';

interface Props {
  menu: MenuItem[];
}

const NavigationBar: React.FC<Props> = ({ menu }) => {
  const pathname = usePathname();
  const [isOpenMenuResponsive, setIsOpenMenuResponsive] = useState(false);

  const hanldeOpenMenuResponsive = () => {
    setIsOpenMenuResponsive(!isOpenMenuResponsive);
  };

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.contentIcon}>
        <Image width={140} height={70} src='/assets/logo-white.svg' alt='' />
      </div>
      <div className={styles.navigationList}>
        <ul>
          {menu.map((item, index) => {
            const Icon = item.icon;
            const isItemActive = pathname === item.path;

            return (
              <li key={index}>
                <div
                  className={`${styles.navItem} ${
                    isItemActive ? styles.active : styles.notActive
                  }`}
                >
                  <Link
                    href={item.path}
                    className={styles.contentAnclaMenuItem}
                  >
                    <div className={styles.navItemIcon}>
                      <Icon color={isItemActive ? '#F0214F' : '#383838'} />
                    </div>
                    <div className={styles.contetTextArrow}>
                      <p className={styles.titleNavigationBar}>{item.title}</p>
                    </div>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <Image
          onClick={hanldeOpenMenuResponsive}
          width={32}
          height={32}
          src='/assets/menu.svg'
          alt='icon menu'
        />
      </div>

      {isOpenMenuResponsive && (
        <ul className={styles.contenMenuResponsive}>
          {menu.map((item, idx) => {
            const Icon = item.icon;
            const isItemActive = pathname === item.path;
            return (
              <li key={idx}>
                <Link href=''>
                  <div className={styles.navItemIcon}>
                    <Icon color={isItemActive ? '#F0214F' : '#383838'} />
                  </div>{' '}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavigationBar;

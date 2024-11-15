import AboutMeIcon from '../icons/AboutMeIcon';
import ContactMeIcon from '../icons/ContactMeIcon';
import HomeIcon from '../icons/HomeIcon';
import ProjectsIcons from '../icons/ProjectsIcons';
import SkillsIcon from '../icons/SkillsIcon';
import { MenuItem } from '../types/MenuItem';

export const menuItemList: MenuItem[] = [
  {
    title: 'Inicio',
    path: '/home',
    icon: HomeIcon,
  },
  {
    title: 'Sobre mi',
    path: '/evaluaciones',
    icon: AboutMeIcon,
  },
  {
    title: 'Habilidades',
    path: '/evaluaciones',
    icon: SkillsIcon,
  },
  {
    title: 'Proyectos',
    path: '/evaluaciones',
    icon: ProjectsIcons,
  },
  {
    title: 'Contáctame',
    path: '/evaluaciones',
    icon: ContactMeIcon,
  },
];

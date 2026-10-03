import type {ReactNode} from 'react';

import styles from './styles.module.css';

type Props = {
  /** Nome do ícone no Devicon, ex.: "docker/docker-original" */
  icon: string;
  alt: string;
  size?: number;
};

const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

/** Ícone de tecnologia vindo do Devicon. */
export default function TechIcon({icon, alt, size = 72}: Props): ReactNode {
  return (
    <img
      className={styles.icon}
      src={`${DEVICON_CDN}/${icon}.svg`}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
    />
  );
}

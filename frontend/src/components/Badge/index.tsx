import type {ReactNode} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export type BadgeColor = 'orange' | 'pink' | 'red' | 'purple' | 'green' | 'blue' | 'cyan' | 'gray';

type Props = {
  color?: BadgeColor;
  children: ReactNode;
};

/** Etiqueta colorida para status, versões e níveis. Ex.: <Badge color="green">estável</Badge> */
export default function Badge({color = 'orange', children}: Props): ReactNode {
  return <span className={clsx(styles.badge, styles[color])}>{children}</span>;
}

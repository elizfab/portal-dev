import type {CSSProperties, ReactNode} from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

type Category = {
  title: string;
  description: string;
  to: string;
  icon: string;
  color: string;
};

const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const categories: Category[] = [
  {
    title: 'Frontend',
    description: 'HTML, CSS, JavaScript, TypeScript, React, Angular e Vue.',
    to: '/docs/frontend',
    icon: 'react/react-original',
    color: 'var(--pd-cyan)',
  },
  {
    title: 'Backend',
    description: 'Node.js, Python, Java, Go, APIs e bancos de dados.',
    to: '/docs/backend',
    icon: 'nodejs/nodejs-original',
    color: 'var(--pd-green)',
  },
  {
    title: 'Cloud',
    description: 'Fundamentos, AWS, Azure e Google Cloud.',
    to: '/docs/cloud',
    icon: 'amazonwebservices/amazonwebservices-original-wordmark',
    color: 'var(--pd-orange)',
  },
  {
    title: 'DevOps',
    description: 'CI/CD, GitHub Actions, GitLab CI, Jenkins, Terraform e Ansible.',
    to: '/docs/devops',
    icon: 'githubactions/githubactions-original',
    color: 'var(--pd-blue)',
  },
  {
    title: 'Release & Rollout',
    description: 'Release train, pacotes e rollout progressivo, sob demanda, nativo e por score.',
    to: '/docs/release',
    icon: 'argocd/argocd-original',
    color: 'var(--pd-orange)',
  },
  {
    title: 'Containers',
    description: 'Docker e Kubernetes, do básico à orquestração.',
    to: '/docs/containers',
    icon: 'docker/docker-original',
    color: 'var(--pd-purple)',
  },
  {
    title: 'Observabilidade',
    description: 'Métricas, logs e traces com Prometheus, Grafana e OpenTelemetry.',
    to: '/docs/observability',
    icon: 'grafana/grafana-original',
    color: 'var(--pd-yellow)',
  },
  {
    title: 'Sistemas Operacionais',
    description: 'Linux, Windows, macOS e WSL2: instalação e configuração.',
    to: '/docs/operatingsystems',
    icon: 'linux/linux-original',
    color: 'var(--pd-red)',
  },
  {
    title: 'Metodologias',
    description: 'Ágil, Scrum, Kanban e o método BMAD.',
    to: '/docs/methodologies',
    icon: 'jira/jira-original',
    color: 'var(--pd-pink)',
  },
];

export default function CategoryGrid(): ReactNode {
  return (
    <div className={styles.grid}>
      {categories.map((category) => (
        <Link
          key={category.title}
          to={category.to}
          className={styles.card}
          style={{'--accent': category.color} as CSSProperties}>
          <img
            className={styles.icon}
            src={`${DEVICON_CDN}/${category.icon}.svg`}
            alt=""
            width={48}
            height={48}
            loading="lazy"
          />
          <h3 className={styles.title}>{category.title}</h3>
          <p className={styles.description}>{category.description}</p>
          <span className={styles.more}>Explorar →</span>
        </Link>
      ))}
    </div>
  );
}

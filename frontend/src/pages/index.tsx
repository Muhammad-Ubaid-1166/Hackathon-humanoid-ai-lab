import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from "../components/HomepageFeatures"
import styles from './index.module.css';
import AIAssistantWidget from '../components/HomepageFeatures/Chatbot';

// Tech stack data for badges
const TECH_STACK = [
  { label: 'ROS 2', color: '#22314E' },
  { label: 'NVIDIA Isaac', color: '#76B900' },
  { label: 'PyTorch', color: '#EE4C2C' },
  { label: 'Gazebo', color: '#F5821F' },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroSection}>
      {/* Background Animated Elements */}
      <div className={styles.backgroundCanvas}>
        <div className={styles.geometricPattern}></div>
        <div className={styles.floatingOrbs}>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>
      </div>

      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.diagonalLayout}>
          
          {/* LEFT SECTION: Content */}
          <div className={styles.contentSection}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot}></span>
              <span>Revolutionary Robotics Platform</span>
            </div>
            
            <Heading as="h1" className={styles.heroTitle}>
              Next-Gen <span className={styles.gradientText}>Embodied AI</span>
            </Heading>

            <p className={styles.heroDescription}>
              Transform <strong>digital intelligence</strong> into <strong>physical action</strong>. 
              Master advanced simulation-to-real transfer, reinforcement learning, 
              and whole-body control for cutting-edge humanoid robotics.
            </p>

            {/* Tech Stack Chips */}
            <div className={styles.technologies}>
              <span className={styles.techCategory}>Powered by:</span>
              <div className={styles.techChips}>
                {TECH_STACK.map((tech) => (
                  <div key={tech.label} className={styles.techChip} style={{backgroundColor: tech.color + '20', borderColor: tech.color}}>
                    <span className={styles.techIcon} style={{backgroundColor: tech.color}}></span>
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <Link
                className={clsx('button button--primary', styles.primaryButton)}
                to="/docs/intro">
                <span>Begin Your Journey</span>
                <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                className={clsx('button button--secondary', styles.secondaryButton)}
                to="https://github.com/Muhammad-Ubaid-1166/">
                <span>Explore Repository</span>
                <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION: AI Assistant */}
          <div className={styles.visualSection}>
            <div className={styles.terminalCard}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalControls}>
                  <span className={styles.terminalDot}></span>
                  <span className={styles.terminalDot}></span>
                  <span className={styles.terminalDot}></span>
                </div>
                <span className={styles.terminalTitle}>ai_robotics_simulator.exe</span>
              </div>
              <div className={styles.terminalContent}>
                <div className={styles.terminalPrompt}>
                  <span className={styles.promptSymbol}>></span>
                  <span className={styles.promptText}>Initializing humanoid robotics environment...</span>
                </div>
                <div className={styles.terminalPrompt}>
                  <span className={styles.promptSymbol}>></span>
                  <span className={styles.promptText}>Loading reinforcement learning models...</span>
                </div>
                <div className={styles.terminalPrompt}>
                  <span className={styles.promptSymbol}>></span>
                  <span className={styles.promptText}>Ready for interaction</span>
                </div>
                <div className={styles.terminalInput}>
                  <span className={styles.promptSymbol}>></span>
                  <div className={styles.inputLine}></div>
                </div>
              </div>
              <div className={styles.terminalFooter}>
                <AIAssistantWidget />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className={styles.scrollIndicator}>
          <span>Discover More</span>
          <div className={styles.scrollIcon}>
            <div className={styles.scrollChevron}></div>
            <div className={styles.scrollChevron}></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Next-Gen Embodied AI & Humanoid Robotics"
      description="Advanced simulation-to-real transfer, reinforcement learning, and whole-body control for cutting-edge humanoid robotics.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
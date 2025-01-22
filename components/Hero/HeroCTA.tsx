import classNames from 'classnames';
import styles from './Hero.module.scss';

interface HeroCTAProps {
  // Define any props here (if needed)
}

const HeroCTA = (props: HeroCTAProps) => {
  return <button className={classNames('btn', styles.CTAButton)}>Hire Me</button>;
};

export default HeroCTA;

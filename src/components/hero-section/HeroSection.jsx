import HeroBackground from "./HeroBackground";
import HeroCTA from "./HeroCTA";
import styles from './HeroSection.module.css'
function HeroSection() {
  return (
    <div className={StyleSheet.hero}>
      <HeroBackground />
      <HeroCTA />
    </div>
  );
}
export default HeroSection;

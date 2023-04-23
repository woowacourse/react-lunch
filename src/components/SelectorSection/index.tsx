import CategorySelector from './CategorySelector';
import styles from './SelectorSection.module.css';
import SortedSelector from './SortedSelector';

function SelectorSection() {
  return (
    <section className={styles.section}>
      <CategorySelector />
      <SortedSelector />
    </section>
  );
}

export default SelectorSection;

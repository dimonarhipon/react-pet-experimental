import {useState} from 'react';
import styles from './Categories.module.scss';

const categories = [`Все`, `Мясные`, `Вегетарианская`, `Гриль`, `Острые`, `Закрытые`]

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
  }
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((value, index) => (
          <li key={`${index + value}`} className={activeIndex === index ? styles.active : ''} onClick={() => onClickCategory(index)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

import {useState} from 'react';
import { Counter } from '../Counter/Counter';
import styles from './Card.module.scss';
// import {ICard} from '../../../types/types'

export const Card = ({imageUrl, title, sizes, price, types}) => {
  // const {id, title, imageUrl, types, sizes, price, category, rating} = props;

  const typeNames = ['тонкая', 'традиционная'];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  // const onClickType = (index) => setActiveType(index);
  // const onClickSizes = (index) => setActiveSize(index);

  return (
    <div className={styles.card}>
      <img
        className={styles.card__image}
        src={imageUrl}
        alt={title}
      />
      <h4 className={styles.card__title}>{title}</h4>
      <div className={styles.card__selector}>
        <ul>
          {types.map((typeIndex) => (
            <li
              key={`${typeIndex}`}
              className={activeType === typeIndex ? styles.active : ''}
              onClick={() => setActiveType(typeIndex)}
            >
              {typeNames[typeIndex]}
            </li>
          ))}
        </ul>

        <ul>
          {sizes.map((value, index) => (
            <li
              key={`${value}`}
              className={activeSize === index ? styles.active  : ''}
              onClick={() => setActiveSize(index)}
            >
              {value} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.card__price}>от {price} ₽</div>
        <Counter />
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react';
import { Card } from '../components/Card/Card';
// import {ICard} from './types/types';
import { Skeleton } from '../components/Card/Skeleton';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import styles from '../App.module.scss';

const URL = `https://63bac6eb56043ab3c7a440f2.mockapi.io/items`;

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false)
        setItems(json)
      })
  }, [])

  return (
    <>
      <div className={styles.content__top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.content__title}>Все пиццы</h2>
      <div className={styles.content__items}>
        {isLoading 
          ? items.map((data, index) => <Skeleton key={index} />)  
          : items.map((data, index) => <Card key={index} {...data} />)
        }
      </div>
    </>
  )
}
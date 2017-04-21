import React from 'react'

import ListItem from './ListItem'
import ProductTeaser from './ProductTeaser'

import styles from './styles.css'

import products from './products.json'

const ProductList = () => (
  <div className={styles.wrapper}>
    {
      products.map(product => (
        <ListItem key={product.id}>
          <ProductTeaser {...product} />
        </ListItem>
      ))
    }
  </div>
)

export default ProductList

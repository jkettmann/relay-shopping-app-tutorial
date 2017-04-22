import React from 'react'
import PropTypes from 'prop-types'
import Relay from 'react-relay'

import ShoppingCartIcon from '../../../icons/shopping-cart.svg'

import styles from './styles.css'

const ProductTeaser = ({ product: { imageUrl, name, price } }) => (
  <div className={styles.wrapper} >
    <img
      className={styles.image}
      src={imageUrl}
      alt={name}
    />

    <div className={styles.footer}>
      <span className={styles.name}>
        { name }
      </span>

      <span className={styles.price}>
        $ {(price / 1000).toFixed(2)}
      </span>

      <span className={styles.shoppingCartIcon}>
        <ShoppingCartIcon />
      </span>
    </div>
  </div>
)

ProductTeaser.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}

export default Relay.createContainer(ProductTeaser, {
  fragments: {
    product: () => Relay.QL`
      fragment on Product {
        name
        imageUrl
        price
      }
    `,
  },
})

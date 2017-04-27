import React from 'react'
import PropTypes from 'prop-types'
import Relay from 'react-relay'
import { Link } from 'react-router'

import ShoppingCartIcon from '../../../icons/shopping-cart.svg'

import styles from './styles.css'

const ProductTeaser = ({ product: { id, imageUrl, name, price } }) => (
  <Link
    className={styles.wrapper}
    to={`/product/${id}`}
  >
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
  </Link>
)

ProductTeaser.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}

export default Relay.createContainer(ProductTeaser, {
  fragments: {
    product: () => Relay.QL`
      fragment on Product {
        id
        name
        imageUrl
        price
      }
    `,
  },
})

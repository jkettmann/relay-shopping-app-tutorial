import React from 'react'
import PropTypes from 'prop-types'
import Relay from 'react-relay'

import styles from './styles.css'

const ProductDetail = ({ product: { name, description, imageUrl, price } }) => (
  <div className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <img
        className={styles.image}
        src={imageUrl}
        alt={name}
      />
    </div>

    <div className={styles.detailsWrapper}>
      <div className={styles.name}>
        {name}
      </div>

      <div className={styles.price}>
        $ {(price / 1000).toFixed(2)}
      </div>

      <div className={styles.description}>
        {description}
      </div>
    </div>
  </div>
)

ProductDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}

export default Relay.createContainer(ProductDetail, {
  fragments: {
    product: () => Relay.QL`
      fragment on Product {
        name
        description
        imageUrl
        price
      }
    `,
  },
})

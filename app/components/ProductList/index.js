import React from 'react'
import PropTypes from 'prop-types'
import Relay from 'react-relay'

import ListItem from './ListItem'
import ProductTeaser from './ProductTeaser'

import styles from './styles.css'

const PRODUCTS_PER_PAGE = 3

function increaseProductLimit({ variables, setVariables }) {
  setVariables({ limit: variables.limit + PRODUCTS_PER_PAGE })
}

const ProductList = ({ viewer, relay }) => (
  <div className={styles.wrapper}>
    {
      viewer.allProducts.edges.map(product => (
        <ListItem key={product.node.id}>
          <ProductTeaser product={product.node} />
        </ListItem>
      ))
    }

    <div className={styles.footer}>
      <button
        className={styles.moreButton}
        onClick={() => increaseProductLimit(relay)}
      >
        More
      </button>
    </div>
  </div>
)

ProductList.propTypes = {
  viewer: PropTypes.shape({
    allProducts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.object,
      })).isRequired,
    }).isRequired,
  }).isRequired,
  relay: PropTypes.shape({
    variables: PropTypes.shape({
      limit: PropTypes.number.isRequired,
    }).isRequired,
    setVariables: PropTypes.func.isRequired,
  }).isRequired,
}

export default Relay.createContainer(ProductList, {
  initialVariables: {
    limit: PRODUCTS_PER_PAGE,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        allProducts(first: $limit) {
          edges {
            node {
              id
              ${ProductTeaser.getFragment('product')}
            }
          }
        }
      }
    `,
  },
})

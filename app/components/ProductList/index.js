import React from 'react'
import PropTypes from 'prop-types'
import Relay from 'react-relay'

import ListItem from './ListItem'
import ProductTeaser from './ProductTeaser'

import styles from './styles.css'

const ProductList = ({ viewer }) => (
  <div className={styles.wrapper}>
    {
      viewer.allProducts.edges.map(product => (
        <ListItem key={product.node.id}>
          <ProductTeaser {...product.node} />
        </ListItem>
      ))
    }
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
}

export default Relay.createContainer(ProductList, {
  initialVariables: {
    limit: 10,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        allProducts(first: $limit) {
          edges {
            node {
              id
              name
              imageUrl
              price
            }
          }
        }
      }
    `,
  },
})

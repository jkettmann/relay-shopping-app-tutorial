import Relay from 'react-relay'

export default {
  product: () => Relay.QL`query { getProduct(id: $productId) }`,
}

import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const ListItem = ({ children }) => (
  <div className={styles.outerWrapper} >
    <div className={styles.innerWrapper} >
      <div className={styles.itemWrapper} >
        { children }
      </div>
    </div>
  </div>
)

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ListItem

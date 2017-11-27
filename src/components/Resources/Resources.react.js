import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Resources/Resources.scss';

export default class Resources extends React.Component {

  render() {
    return (
      <div className={styles.Resources}>
        <div className={styles.name}>
            {this.props.name}
        </div>
        <div className={}> Sofware </div>
            {this.props.software}
        <div> Hardware </div>
            {this.props.hardware}
        <div> SWAG! </div>
            {this.props.swag}
      </div>
    );
  }

}
<div className={styles.event}>
  <div className={styles.name}>
    {this.props.name}
  </div>
  <div className={styles.whenAndWhere}>
    {`${this.props.when} | ${this.props.where}`}
  </div>
  {this.props.description && <div className={styles.description}>
    {this.props.description}
  </div>}
</div>

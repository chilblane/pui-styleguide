import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'pivotal-ui/react/panels';
import {Table, withRenderTdChildren} from 'pivotal-ui/react/table';
const EnhancedTable = withRenderTdChildren(Table);

const propToString = propVal => {
  if (propVal === undefined) return '';
  if (Array.isArray(propVal)) return '[' + propVal.map(propToString).join(', ') + ']';
  if (typeof propVal === 'object' || typeof propVal === 'string') return JSON.stringify(propVal);
  return propVal.toString();
};

export default class PropTable extends PureComponent {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentName: PropTypes.string.isRequired,
    pagePropDescriptions: PropTypes.object
  };

  static defaultProps = {
    propDescriptions: {}
  };

  render() {
    const {componentName, component: {propTypes, defaultProps = {}}, pagePropDescriptions = {}} = this.props;
    if (!propTypes) return null;

    let propDescriptions = pagePropDescriptions[componentName];
    if (propDescriptions._extends) {
      const extended = pagePropDescriptions[propDescriptions._extends];
      propDescriptions = {...extended, ...propDescriptions};
    }

    const columns = [{
      attribute: 'prop', displayName: 'Prop', renderTdChildren: ({prop}) => <pre className="pre-unstyled type-sm">{prop}</pre>
    }, {
      attribute: 'type', displayName: 'Type'
    }, {
      attribute: 'isRequired', displayName: 'Required'
    }, {
      attribute: 'defaultValue', displayName: 'Default', renderTdChildren: ({defaultValue}) => <pre className="pre-unstyled type-sm">{defaultValue}</pre>
    }, {
      attribute: 'description', displayName: 'Description'
    }];

    const data = Object.keys(propTypes).sort().map(prop => {
      const metadata = propTypes[prop].metadata;
      const type = metadata ? metadata.type : '';
      const isRequired = metadata ? (metadata.isRequired ? 'yes' : 'no') : '';
      const defaultValue = propToString(defaultProps[prop]);
      const description = propDescriptions[prop] || '';

      if (process.env.NODE_ENV !== 'production') {
        if (!description) {
          console.warn(`No description given for prop '${prop}' on ${componentName} component.`);
        }
      }

      if (description === '(undocumented)') return;
      return {prop, type, isRequired, defaultValue, description};
    }).filter(Boolean);

    return (
      <Panel {...{title: componentName, bodyClassName: 'pan'}}>
        <EnhancedTable {...{className: 'table-no-ext-borders', columns, data}}/>
      </Panel>
    );
  }
}
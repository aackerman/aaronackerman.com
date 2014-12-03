import * as React from 'react/addons';
import SidebarStore from '../stores/SidebarStore';

let Sidebar = React.createClass({
  _onChange() {

  },

  componentDidMount() {
    SidebarStore.addChangeListener(this._onChange)
  },

  componentWillUnmount() {
    SidebarStore.removeChangeListener(this._onChange)
  },

  render() {
    return <div>sidebar</div>;
  }

});

export default Sidebar;

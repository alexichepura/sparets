import React from 'react'
import Link from 'react-router/Link'
const s: any = require('./Side.css')

const SideLink = p => <li>
  <Link
    to={p.to}
    activeClassName={s.active}
    activeOnlyWhenExact={p.exact}>
    {p.children}
  </Link>
</li>

export default class Side extends React.Component<any, any> {
  render() {
    return <aside className={s.side}>
      <ul>
        <SideLink to='/' exact>Home</SideLink>
        <SideLink to='/login'>Login</SideLink>
        <SideLink to='/counter'>Counter</SideLink>
        <SideLink to='/redux/people'>Redux People</SideLink>
        <SideLink to='/mobx/people'>Mobx People</SideLink>
      </ul>
    </aside>
  }
}

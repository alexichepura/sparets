import * as React from 'react'
const s: any = require('./Header.css')

export default class Header extends React.Component<any, any> {
  render() {
    return <div className={s.header}>
      <span className={s.item + ' ' + s.blue}>
        I'm HEADER.
      </span>
      <span className={s.item + ' ' + s.space}>
        Change me. Notice, counter doesn't reset.
      </span>
      <span className={`${s.item} ${s.email}`}>
        john@doe.com
      </span>
    </div>
  }
}

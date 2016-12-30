import React, { Component } from 'react'
const s: any = require('./Header.css')

export default class Header extends Component<any, any> {
  render() {
    return <div className={s.header}>
      <span className={s.item + ' ' + s.blue}>
        I'm HEADER.
      </span>
      <span className={s.item + ' ' + s.space}></span>
      <span className={`${s.item} ${s.email}`}>
        john@doe.com
      </span>
    </div>
  }
}

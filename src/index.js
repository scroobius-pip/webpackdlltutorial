import Vue from "vue"
import lodash from 'lodash'
import 'react'
import 'angular'
import 'bootstrap'
import 'd3'
import 'jquery'
import 'highcharts'

export default function createApp() {
  // vendor()
  const el = document.createElement("div")

  el.setAttribute("id", "app")

  document.body.appendChild(el)
  console.log("hello")
  new Vue({
    el: "#app",
    render: h => h("h1", "Hello world")
  })
}

document.addEventListener('DOMContentLoaded', () => {
  createApp()
})
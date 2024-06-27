"use strict"

new Promise((resolve) => {
    console.log(1)
    resolve()
  }).then(async () => {
    console.log(2)
  }).then(async () => {
    console.log(3)
  })
  
  new Promise((resolve) => {
    console.log('a')
    resolve()
  }).then(() => {
    console.log('b')
  }).then(() => {
    console.log('c')
  }).then(() => {
    console.log('d')
  }).then(() => {
    console.log('e')
  })
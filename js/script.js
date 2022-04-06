// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the area of a trapazoid.
 */
function calculate () {
  // input
  const base1 = parseInt(document.getElementById('base1').value)
  const base2 = parseInt(document.getElementById('base2').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  const area = (base1 + base2) / 2 * height

  // output
  document.getElementById('area').innerHTML = 'The are of the trapazoid is ' + area + ' cm squared. '
}
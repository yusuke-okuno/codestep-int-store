'use strict';

{
  document.addEventListener("DOMContentLoaded", () => {

    document.getElementsByClassName("toggle_btn")[0].addEventListener('click', (e) => {
      // if (document.getElementById("header").classList.contains("open")) {
      //   document.getElementById("header").classList.remove("open");
      // } else {
      //   document.getElementById("header").classList.add("open");
      // }
      document.getElementById("header").classList.toggle("open");
    });

    // 「THIS」使う書き方試してみた（動かず）
    // document.getElementsByClassName("toggle_btn")[0].addEventListener('click', function() {
    //   this.classList.toggle("open");
    // }

    document.getElementById("mask").addEventListener('click', (e) => {
      document.getElementById("header").classList.remove("open");
    });

  });
}

// $(function(){

//   $('.toggle_btn').on('click', function() {
//     if ($('#header').hasClass('open')) {
//       $('#header').removeClass('open');
//     } else {
//       $('#header').addClass('open');
//     }
//   });

//   $('#mask').on('click', function() {
//     $('#header').removeClass('open');
//   });

// });

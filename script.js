// ==UserScript==
// @name         iEMB darkmode
// @namespace    https://github.com/atkh6673
// @version      v1.1
// @description  dark mode for iEMB
// @author       atkh6673
// @match        https://iemb.hci.edu.sg/*
// @icon         https://encrypted-tbn2.gstatic.com/faviconV2?url=https://iemb.hci.edu.sg&client=VFE&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // footer
    $('footer').css('background-color', '#000');

    // login page
    $('.form').css('background-color', '#313131');
    $('.form > div > div').empty();
    $('.form > div > div').html('<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="70.000000pt" height="66.000000pt" viewBox="0 0 70.000000 66.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,66.000000) scale(0.013725,-0.013525)"fill="#b6242b" stroke="none"><path d="M1033 4482 c158 -158 287 -294 287 -302 0 -8 -128 -143 -285 -300 -157 -157 -284 -288 -283 -292 2 -4 130 -135 286 -291 155 -156 282 -289 282 -296 0 -8 -129 -146 -286 -307 l-286 -294 -297 0 -296 -1 290 -284 290 -284 1785 -1 1785 0 285 285 285 285 -583 0 c-320 0 -582 3 -582 7 0 5 132 139 292 300 l292 293 -297 297 -297 298 292 292 293 293 -295 295 -295 295 -365 0 -365 0 295 -295 295 -295 -295 -295 -295 -295 295 -295 295 -295 -300 -300 -300 -300 -177 0 c-98 0 -178 3 -178 8 0 4 128 135 285 292 157 157 285 289 285 295 0 6 -133 143 -295 305 l-295 295 295 295 295 295 -293 293 -292 292 -368 0 -368 0 294 -294 294 -294 -296 -296 -296 -296 297 -297 298 -298 -297 -297 -298 -298 -177 0 c-98 0 -178 3 -178 8 0 4 128 135 285 292 157 157 285 290 285 297 0 7 -131 143 -292 303 l-292 291 294 294 295 295 -295 295 -295 295 -365 0 -365 0 288 -288z"/><path d="M1030 1230 l0 -290 1475 0 1475 0 0 290 0 290 -1475 0 -1475 0 0 -290z"/><path d="M2205 350 c159 -159 297 -290 305 -290 8 0 146 130 305 290 l290 290 -595 0 -595 0 290 -290z"/></g></svg>');
    $('.read_mess_bg > strong').css('color', '#fff');

    // header
    $('#iemb_headerDiv').css('background-color', '#141414');
    $('#iemb_headerDiv > div.left > div.left:first').empty();
    $('#iemb_headerDiv > div.left > div.left:first').html('<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25.000000pt" height="27.000000pt" viewBox="0 0 25.000000 27.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,27.000000) scale(0.004902,-0.005533)"fill="#b6242b" stroke="none"><path d="M1033 4482 c158 -158 287 -294 287 -302 0 -8 -128 -143 -285 -300 -157 -157 -284 -288 -283 -292 2 -4 130 -135 286 -291 155 -156 282 -289 282 -296 0 -8 -129 -146 -286 -307 l-286 -294 -297 0 -296 -1 290 -284 290 -284 1785 -1 1785 0 285 285 285 285 -583 0 c-320 0 -582 3 -582 7 0 5 132 139 292 300 l292 293 -297 297 -297 298 292 292 293 293 -295 295 -295 295 -365 0 -365 0 295 -295 295 -295 -295 -295 -295 -295 295 -295 295 -295 -300 -300 -300 -300 -177 0 c-98 0 -178 3 -178 8 0 4 128 135 285 292 157 157 285 289 285 295 0 6 -133 143 -295 305 l-295 295 295 295 295 295 -293 293 -292 292 -368 0 -368 0 294 -294 294 -294 -296 -296 -296 -296 297 -297 298 -298 -297 -297 -298 -298 -177 0 c-98 0 -178 3 -178 8 0 4 128 135 285 292 157 157 285 290 285 297 0 7 -131 143 -292 303 l-292 291 294 294 295 295 -295 295 -295 295 -365 0 -365 0 288 -288z"/><path d="M1030 1230 l0 -290 1475 0 1475 0 0 290 0 290 -1475 0 -1475 0 0 -290z"/><path d="M2205 350 c159 -159 297 -290 305 -290 8 0 146 130 305 290 l290 290 -595 0 -595 0 290 -290z"/></g></svg>');
    $('#iemb_headerDiv > div.left > div.left:first').css('padding-top', '3px');
    $('#iemb_headerDiv').css('border-bottom', '0px');
    $('#iemb_headerDiv').css('height', '43px');

    // dashboard
    $('.iemb_container').css('background-color', '#313131');
    $('.label-danger').css('background-color', '#000');
    $('.iemb_content').css('overflow-y', 'hidden');

    // student, service request and safety, lost and found
    $('.iemb_sidebar').css('background-color', '#242424');
    $('.iemb_contents').css('background-color', '#313131');
    $('.iemb_breadcrumb1 > li > a, .divider').css('color', '#fff');
    $('.read_message_body_div').css('background-color', '#313131');
    $('.search_mess_bg > a').css('color', '#fff');
    $('.search_mess_bg > input').css({
        'background-color': '#313131',
        'color': '#fff',
        'border': 'none'
    });
    $('#tab_table > thead > tr > th').css({
        'background-color': '#313131',
        'color': '#fff'
    });
    $('#tab_table > tbody > tr > td').css('color', '#fff');
    $('#tab_table > tbody > tr > td > a').css('color', '#fff');
    $('.accordion').css('background-color', '#313131');
    $('.accordion > .read_mess_bg').css('color', '#fff');
    $('.panel').css('background-color', '#313131');
    $('#tab_table1 > thead > tr > th').css({
        'background-color': '#313131',
        'color': '#fff'
    });
    $('#tab_table1 > tbody > tr > td').css({
        'background-color': '#313131',
        'color': '#fff'
    });
    $('#tab_table1 > tbody > tr > td > a').css('color', '#fff');

    // service and request safety, lost and found
    $('.compose_button').css({
        'background-color': '#242424',
        'color': '#fff',
        'border': '2px solid #fff'
    });

    // compose message
    $('.form-1, .legend').css('color', '#fff');

    // message viewing
    $('.read_message_sub').css('color', '#fff');
    $('.read_message_sub > span > a').css('color', '#fff');
    $('.read_message_usericon').css('color', '#fff');
    $('.read_message_username, .read_message_toname').css('color', '#fff');
    $('#hyplink-css-style').css('color', '#fff');
    $('.CrossFile > a').css('color', '#fff');
    $('.no-print').css('color', '#fff');

})()

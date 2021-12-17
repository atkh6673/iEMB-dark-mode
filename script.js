// ==UserScript==
// @name         iEMB darkmode
// @namespace    https://github.com/atkh6673
// @version      v1.0
// @description  dark mode for iEMB
// @author       atkh6673
// @match        https://iemb.hci.edu.sg/*
// @icon         https://o.remove.bg/downloads/ba1843e1-90ae-49fc-923c-ab33c4ec945c/school_logo-removebg-preview.png
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // in all sub pages
    $('footer').css('background-color', '#000');

    // login page
    $('.form').css('background-color', '#000');
    $('.form > div > div').empty();
    $('.form > div > div').html('<img src="https://o.remove.bg/downloads/ba1843e1-90ae-49fc-923c-ab33c4ec945c/school_logo-removebg-preview.png" width="73.1557377px" height="70px"/>');
    $('.read_mess_bg > strong').css('color', '#fff');

    // dashboard
    $('#iemb_headerDiv').css('background-color', '#141414');
    $('.iemb_container').css('background-color', '#313131');
    $('#iemb_headerDiv > div.left > div.left:first').empty();
    $('#iemb_headerDiv > div.left > div.left:first').html('<img src="https://o.remove.bg/downloads/ba1843e1-90ae-49fc-923c-ab33c4ec945c/school_logo-removebg-preview.png" width="35.53278689px" height="34px"/>');
    $('#iemb_headerDiv > div.left > div.left:first').css('padding-top', '3px');
    $('#iemb_headerDiv').css('border-bottom', '0px');
    $('.label-danger').css('background-color', '#000');
    $('.iemb_content').css('overflow-y', 'hidden');

    // student, service request and safety, lost and found
    $('.iemb_sidebar').css('background-color', '#242424');
    $('.iemb_contents').css('background-color', '#313131');
    $('.iemb_breadcrumb1 > li > a, .divider').css('color', '#fff');
    $('.read_message_body_div').css('background-color', '#313131');
    $('.search_mess_bg > a').css('color', '#fff');
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

})()

/*
 * SimpleModal Basic Modal Dialog
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2010 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: basic.js 243 2010-03-15 14:23:14Z emartin24 $
 *
 */

jQuery(function ($) {
	$('.edit').click(function (e) {
		$('#edit-modal-content').modal();
		$('#simplemodal-container').css('height','320px');
		$('#simplemodal-container').css('width','450px');
		  return false;
	});
	
	$('.stop').click(function (e) {
		$('#stop-modal-content').modal();
		  return false;
	});
	
	$('#create').click(function(e) {
		$('#edit-modal-content').modal();
		$('#simplemodal-container').css('height','310px');
		$('#simplemodal-container').css('width','450px');
		  return false;
	});
	
	$('.popit').click(function(e) {
		$('#rpt-dialog-content').dialog();		
		  return false;
	});
	
	$("#addingi").click(function(e) {
		$("#stop-modal-content").dialog();
	});
});
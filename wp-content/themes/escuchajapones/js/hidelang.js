function getSpansByClass(searchClass) {
    var classElements = new Array();
    var allElements = document.getElementsByTagName("span");
    var i;
    var j;
    for (i = 0, j = 0; i < allElements.length; i++) {
	if (allElements[i].className == searchClass) {
	    classElements[j] = allElements[i];
	    j++;
	}
    }
    return classElements;
}
function switch_es(workingClass) {
	var spans = getSpansByClass(workingClass);
    for (i = 0; i < spans.length; i++) {
		//alert("spans[i].style.display = "+spans[i].style.display);
    	if (spans[i].style.display == 'none') {
	    	spans[i].style.display = '';
			document.getElementById('es_alpha_button').style.textDecoration = 'none';
	    } else {
	    	spans[i].style.display = 'none';
			document.getElementById('es_alpha_button').style.textDecoration = 'line-through';
	    }
    }
}
function switch_ja(workingClass) {
	var spans = getSpansByClass(workingClass);
	var ja_kanji = getSpansByClass('ja_kanji');
	var ja_kana = getSpansByClass('ja_kana');
	var ja_alpha = getSpansByClass('ja_alpha');
	var setup = 0;
	if (ja_kanji[0].style.display == 'none' || ja_kana[0].style.display == 'none' || ja_alpha[0].style.display == 'none') {
		setup = 1;
	}
	for (i = 0; i < spans.length; i++) {
		if (spans[i].style.display == 'none') {
			ja_kanji[i].style.display = 'none';
			ja_kana[i].style.display = 'none';
			ja_alpha[i].style.display = 'none';
			spans[i].style.display = '';
			document.getElementById('ja_kanji_button').style.textDecoration = 'line-through';
			document.getElementById('ja_kana_button').style.textDecoration = 'line-through';
			document.getElementById('ja_alpha_button').style.textDecoration = 'line-through';
			if (workingClass == 'ja_kanji') {
				document.getElementById('ja_kanji_button').style.textDecoration = 'none';
			} else if (workingClass == 'ja_kana') {
				document.getElementById('ja_kana_button').style.textDecoration = 'none';
			} else if (workingClass == 'ja_alpha') {
				document.getElementById('ja_alpha_button').style.textDecoration = 'none';
			}
		} else {
			if (setup != 0) {
				ja_kanji[i].style.display = '';
				ja_kana[i].style.display = '';
				ja_alpha[i].style.display = '';
				document.getElementById('ja_kanji_button').style.textDecoration = 'none';
				document.getElementById('ja_kana_button').style.textDecoration = 'none';
				document.getElementById('ja_alpha_button').style.textDecoration = 'none';
			} else {
				ja_kanji[i].style.display = 'none';
				ja_kana[i].style.display = 'none';
				ja_alpha[i].style.display = 'none';
				spans[i].style.display = '';
				document.getElementById('ja_kanji_button').style.textDecoration = 'line-through';
				document.getElementById('ja_kana_button').style.textDecoration = 'line-through';
				document.getElementById('ja_alpha_button').style.textDecoration = 'line-through';
				if (workingClass == 'ja_kanji') {
					document.getElementById('ja_kanji_button').style.textDecoration = 'none';
				} else if (workingClass == 'ja_kana') {
					document.getElementById('ja_kana_button').style.textDecoration = 'none';
				} else if (workingClass == 'ja_alpha') {
					document.getElementById('ja_alpha_button').style.textDecoration = 'none';
				}
			}
		}
	}
}
function hide_show_main() {
	this.ja_kanji_button = document.getElementById('ja_kanji_button');
	this.ja_kana_button = document.getElementById('ja_kana_button');
	this.ja_alpha_button = document.getElementById('ja_alpha_button');
	this.es_alpha_button = document.getElementById('es_alpha_button');
	this.ja_kanji_button.style.cursor = 'pointer';
	this.ja_kana_button.style.cursor = 'pointer';
	this.ja_alpha_button.style.cursor = 'pointer';
	this.es_alpha_button.style.cursor = 'pointer';
	if (this.ja_kanji_button) {
		this.ja_kanji_button.onclick = function() {
			switch_ja('ja_kanji');
		};
	}
	if (this.ja_kana_button) {
		this.ja_kana_button.onclick = function() {
			switch_ja('ja_kana');
		};
	}
	if (this.ja_alpha_button) {
		this.ja_alpha_button.onclick = function() {
			switch_ja('ja_alpha');
		};
	}
	if (this.es_alpha_button) {
		this.es_alpha_button.onclick = function() {
			switch_es('es_alpha');
		};
	}
}
window.onload = function() {
	hide_show_main();
};
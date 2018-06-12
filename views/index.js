import header from './components/header/header.js'
import setUpMap from './components/map/map.js'
import toggleToolButton from './components/storyAddItemButton/storyAddItemButton.js'
import { enhancedDetail, fallbackDetail } from './components/enhancedDetail/enhancedDetail.js'

( function IIFE () {

	if( !( document.documentElement.classList && document.querySelectorAll ) ) return

	header()
	toggleToolButton()

	if (document.querySelector('main > .map')) {
		setUpMap()
	}

	if ( 'IntersectionObserver' in window) {
		enhancedDetail()
	} else {
		fallbackDetail()
	}

	

} )()

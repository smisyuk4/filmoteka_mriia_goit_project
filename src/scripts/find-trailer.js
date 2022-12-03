export function onClickToBtnTrailer(id) {
    // event.preventDefault()
    const param = {
			option: `/movie/${id}/videos`,
			lang: '&language=en',
			imageLang: '&include_image_language=en',
			region: '&region=en-US'
    }
    if (localStorage.getItem("siteOptions") == "ua") {
			param.lang = '&language=uk';
			param.imageLang = '&include_image_language=uk';
			param.region = '&region=uk-UA';
		} else {
			param.lang = '&language=en';
			param.imageLang = '&include_image_language=en';
			param.region = '&region=en-US';
		}
    return window.filmoteka.fetchFilms(param)
		.then(res => {
			if (res.results.length==0) {
				return '';
			} else {
				
				return res.results[0].key;
			}
        })
        .catch(error => {
            console.log(error);
        })
}
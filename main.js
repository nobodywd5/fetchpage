function fetchPage(link, page) {
    let baseURL = `${window.location.protocol}//${window.location.hostname}`;

    if (window.location.port) {
        baseURL += `:${window.location.port}`;
    }

    fetch(`${baseURL}/${page}`)
        .then(function (response) {
            return response.text()
        })
        .then(function (html) {
            let doc = new DOMParser().parseFromString(html, "text/html");

            anime({
                targets: '',
                translateX: 700,
                opacity: 0,
                easing: 'easeInExpo',
                duration: 700,
                complete: (anim) => {
                    document.querySelector('').remove();
                }
            })

             anime({
                 targets: '',
                 translateY: 2200,
                 opacity: 0,
                 easing: 'easeInExpo',
                 duration: 700,
             })

            setTimeout(function () {
                document.querySelector('body').insertBefore(doc.querySelector(''), document.querySelector(''));

                anime({ })
              
            }, 700);
        })
}
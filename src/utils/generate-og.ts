import html2canvas from 'html2canvas'

const generateOGImage = async () => {
    const container = document.getElementById('og-image-container')

    if (!container) return

    html2canvas(container).then((canvas) => {
        console.log(canvas)
        const dataURL = canvas.toDataURL('image/jpeg')
        const ogImageMeta = document.querySelector('meta[property="og:image"]')
        if (ogImageMeta) {
            ogImageMeta.setAttribute('content', dataURL)
        }
    })

    // htmlToImage
    //     .toJpeg(container, {
    //         cacheBust: true,
    //     })
    //     .then((dataURL) => {
    //         console.log('done', dataURL)
    //         // const ogImageMeta = document.querySelector(
    //         //     'meta[property="og:image"]'
    //         // )
    //         // if (ogImageMeta) {
    //         //     ogImageMeta.setAttribute('content', .toString())
    //         // }
    //     })
    //     .catch((res) => {
    //         console.log('ERRR!')
    //         console.error(res)
    //     })
}

export default generateOGImage

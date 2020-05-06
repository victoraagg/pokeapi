import HtmlComponent from './htmlComponent'

export default class Image extends HtmlComponent {

    constructor(cssName, src) {
        super(cssName, src)
        this.cssName = cssName
        this.src = src
    }

    render() {
        var img = document.createElement('img')
        var src = document.createAttribute('src')
        src.value = `https://pokeapi.co/${this.src}`
        img.setAttributeNode(src)
        img.className = this.cssName
        return img
    }

}
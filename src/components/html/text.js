import HtmlComponent from './htmlComponent'

export default class Text extends HtmlComponent {

    constructor(text) {
        super(text)
        this.text = text
    }

    render() {
        return document.createTextNode(this.text)
    }

}
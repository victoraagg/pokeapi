import HtmlComponent from './htmlComponent'

export default class Div extends HtmlComponent {

    constructor(cssName) {
        super(cssName)
        this.cssName = cssName
        this.children = new Set()
    }

    appendChild(element) {
        this.children.add(element)
    }

    render() {
        var div = document.createElement('div')
        div.cssName = this.cssName
        for (let child of this.children) {
            div.appendChild(child.render())
        }
        return div
    }

}
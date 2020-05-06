import {Image, Div, Text} from '../html'
import HtmlComponent from '../html/htmlComponent'

class Card extends HtmlComponent {

    constructor(name, image) {
        super(name, image)
        this.name = name
        this.image = image
    }

    render() {
        var card = new Div('card')
        var cardContent = new Div('card-content')
        var title = new Div('card-title')
        var image = new Image('card-image', this.image)
        var name = new Text(this.name)

        title.appendChild(name)
        cardContent.appendChild(title)
        card.appendChild(image)
        card.appendChild(cardContent)

        return card.render()
    }

}
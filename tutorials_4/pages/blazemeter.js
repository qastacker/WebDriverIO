class BlazeMeter{

    //Header Submenu Parent
    get parent(){
        return $('ul.list-nav-links');
    }

    //Footer Use Cases Submenu Parent
    get footerParent(){
        return $('div.main_b_footer_inner_blocks:nth-child(1) ul:nth-child(1)');
    }

    get childElements(){
        return this.parent.$$('li');
    }

    get getTextForLi(){
        return this.childElements.filter(element => {
            console.log(element.getText());
        });
    }

    get useCasesElements(){
        return $$(' div#main_b_footer_second_block>ul>li')
    }

    get useCasesElementsText(){
        return this.useCasesElements.filter(element => {
            console.log(element.getText());
        });
    }

//This one is for Header using css selector
    specificHeaderChildElement(index){
        return this.parent.$(`li:nth-child(${index})`)
       }

    specificHeaderChildElementText(index){
        console.log(this.specificHeaderChildElement(index).getText());
       }

//This one is for Footer using css selector
    specificFooterChildElement(numbr){
        return this.footerParent.$(`li:nth-child(${numbr})`)
    }

    specificFooterChildElementText(numbr){
        console.log(this.specificFooterChildElement(numbr).getText());
       }
}

module.exports = new BlazeMeter();
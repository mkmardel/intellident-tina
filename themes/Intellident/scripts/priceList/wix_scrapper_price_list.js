function get_elements(){
    const elements = document.querySelectorAll('#comp-k01cmo5u > .font_8')
    
    var current_category = 'Általános';
    var data = {};
    var skip_next_element = false;

    var key = 0;
    var weight = 1;
    for(let element of elements){
        let stripped_text = stripHtml(element.innerHTML);
        
        if(stripped_text.length === 0 || stripped_text.length === 1 || stripped_text.replace(/\s/g,'').length === 0){
            key++;
            continue;
        }

        if(is_element_category(element) == true){
            current_category = stripped_text;
            key++;
            weight = 1;
            continue;
        }
        
        if(skip_next_element === true){
            skip_next_element = false;
            key++;
            continue;
        }
        
        if(typeof data[current_category] === 'undefined'){
            data[current_category] = [];
        }

        var text_and_price = splitAtDigit(stripped_text);
        var note = null;
        
        if(text_and_price[1] === null){
            if(typeof elements[key+1] === 'undefined'){
                key++;
                continue;
            }

            skip_next_element = true;
            
            let note_and_price = splitAtDigit(stripHtml(elements[key+1].innerHTML));
            note = note_and_price[0];
            text_and_price[1] = note_and_price[1];
        }
        
        data[current_category].push({
            name:text_and_price[0],
            price:text_and_price[1] ,
            note:note,
            weight:weight
        });
        weight++;

        key++;
    }

    return data;
}

function splitAtDigit(str) {
    str = str.replace(/^\s+|\s+$/gm,'');//trim
    var split = str.split(/(\s+)(\s+)(\s+)/);
    var text = null;
    var price = null;
    for(let textElement of split){
        if(textElement.length === 0 ||  textElement.replace(/\s/g,'').length === 0){
            continue;
        }
        if(text === null){
            text = textElement;
        }else if(price === null){
            price = textElement;
        }

    }

    return [text,price];
}

function stripHtml(html)
{
   let tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}


function is_element_category(element){
    if(typeof element === 'undefined' || element === null ||  typeof element.firstElementChild === 'undefined' || element.firstElementChild === null || element.firstElementChild.nodeName !== 'SPAN'){
        return false;
    }

    if(element.firstElementChild.attributes[0].value !== 'font-weight:bold;'){
        return false;
    }

    return true;
}


JSON.stringify(get_elements());
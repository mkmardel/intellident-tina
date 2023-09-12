<?php


function get_content_to_generate_content():array{
    $data = file_get_contents('scrapped_price_list.json');

    $md_items_files_to_generate         = [];
    $md_categories_files_to_generate    = [];

    $category_weight = 1;
    foreach(json_decode($data,true) as $category_name => $category_items){
        $items_in_category = array();
        
        foreach($category_items as $price_item){

            $price_item_to_md = price_item_to_md($price_item['name'],$price_item['price'],$price_item['note'],$price_item['weight']);
            $file_name = name_to_file_name($price_item['name']);
            $file_path = "price/items/$file_name";
            $md_items_files_to_generate[$file_name] = $price_item_to_md;
            $items_in_category[] = $file_path;
        }

        $md_categories_files_to_generate[name_to_file_name($category_name)] = category_to_md($category_name,$category_weight,$items_in_category);
        // $file_name =  
        $category_weight++;
    }

    return [$md_categories_files_to_generate,$md_items_files_to_generate];
}

function name_to_file_name(string $name):string{
    $name = strtolower($name);
    $name = str_replace(' ','_',$name);
    $name = str_replace(',','',$name);
    $name = str_replace(':','',$name);
    $name = str_replace('(','',$name);
    $name = str_replace(')','',$name);
    $name = str_replace('/','_',$name);
    $name = str_replace('\\','_',$name);
    $name = trim($name);
    return $name.'.md';
}

// function 
function price_item_to_md(string $name ,?string $price, ?string $note,string $weight){
    if(!$note){
        $note = '""';
    }else{
        $note = "'".$note."'";
    }
    return '+++
draft = false
weight = '.$weight.'
prices = "items"
name = "'.$name.'"
price = "'.$price.'"
note = '.$note.'
+++';
}

function category_to_md(string $category_name,int $weight,array $items):string{
    $items_to_str = '';
    foreach($items as $key => $item){
        if($key > 0){
            $items_to_str .= ',';
        }
        $items_to_str .= '"'.$item.'"';
        
    }
    return '+++
draft = false
prices = "categories"
name = "'.$category_name.'"
weight = '.$weight.'
items = ['.$items_to_str.']
+++';
}


function generate_files(){
    $data = get_content_to_generate_content();
    $category_files = $data[0] ?? [];
    $item_files     = $data[1] ?? [];

    foreach($item_files as $file_name => $item_file_content){
        file_put_contents("../../../../content/price/items/$file_name",$item_file_content);
    }

    foreach($category_files as $file_name => $item_file_content){
        file_put_contents("../../../../content/price/categories/$file_name",$item_file_content);
    }
}

generate_files();
// echo file_put_contents("../../../../content/price/items/test.txt","Hello World. Testing!");

echo PHP_EOL.'ok'.PHP_EOL;
// var_dump(get_content_to_generate_content());
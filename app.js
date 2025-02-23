$(document).ready(function(){
	//variables
	var state={
		items: []
	}

	//functions
	var getListItemHtml=function(item, dVal){
		return '<li>'+
        			'<span class="shopping-item" data-shopping-item="'+dVal+'">'+item+'</span>'+
        				'<div class="shopping-item-controls">'+
          					'<button class="shopping-item-toggle">'+
            					'<span class="button-label">check</span>'+
          					'</button>'+
          					'<button class="shopping-item-delete">'+
            					'<span class="button-label">delete</span>'+
          					'</button>'+
        				'</div>'+
      				'</li>';
	}

	var addItem = function(itemArray, item){
		/*if(var index=state.items.find(function(element, index){
			if(element.name===item)
			return index;
		}) !== undefined)
			state.items[index].quantity+=1;
		else*/
		itemArray.push({name: item, checked: false});
	}
	var checkUncheck=function(itemArray, itemIndex){
		console.log(itemArray);
		console.log(itemArray[itemIndex].checked);
		var itemChecked=itemArray[itemIndex].checked;
		if(itemChecked)
			itemArray[itemIndex].checked=false;
		else
			itemArray[itemIndex].checked=true;
	}
	var removeItem = function(itemArray, itemIndex){
		delete itemArray[itemIndex];
	}

	var renderAddedListItem=function(item, dVal, listElement){
		listElement.append(getListItemHtml(item, dVal));
	}

	var removeListItem=function(item){

	}

	var renderList = function(listArray, listElement){
		listElement.empty();
		var listHtml=listArray.map(function(item, dVal){
			return getListItemHtml(item.name, dVal);
		});
		listElement.html(listHtml);
		reBind();
	}
	var reBind = function(){
			//check item code
	$('button.shopping-item-toggle').click(function(event){
		event.stopImmediatePropagation();
		var item=$(this).closest('div').siblings('span');
		checkUncheck(state.items, parseInt(item.data('shopping-item')));
		item.toggleClass('shopping-item__checked');
	});

	//remove item code
	$('.shopping-item-delete').click(function(event){
		removeItem(state.items, parseInt($(this).closest('div').siblings('span').data('shopping-item')));
		$(this).closest('li').remove();
	});
	};

	//main program

	//add item code
	$('#js-shopping-list-form').submit(function(event){
		event.preventDefault();
		var item=$('#shopping-list-entry').val().trim();
		addItem(state.items, item);
		renderAddedListItem(item, state.items.length-1, $('.shopping-list'));
		reBind();
		$('#shopping-list-entry').val('');
	});

	//check item code
	/*$('button.shopping-item-toggle').click(function(event){
		console.log(state);
		var item=$(this).closest('div').siblings('span');
		console.log(item);
		if(checkUncheck(state.items, item.data('shopping-item')));
		item.toggleClass('shopping-item__checked');
	});

	//remove item code
	$('.shopping-item-delete').click(function(event){
		removeItem(state.items, $(this).closest('div').siblings('span').data('shopping-item'));
		console.log(state);
		$(this).closest('li').remove();
	});*/
	
	renderList(state.items, $('.shopping-list'));
});

/*$(document).ready(function(){
	//variables
	var state={
		items:{}
	}

	//functions
	var addItem = function(state, item){
		if(items[item])
			items[item].amount+=1;
		else
			items[item]={name: item, amount: 1};
	}
	function check(item){
		if(state[item])
			$('').addClass('shopping-item__checked');
	}
	var removeItem = function(item){
		delete items[item];
	}

	var renderList = function(state, element){
		var listHtml=Object.keys(state).map(function(key){
			return '<li>Item Name:'+state[key].name+' - Amount:'+state[key].amount+'</li>';
		});
	}

	//main program
	$('.shopping-item-toggle').click(function(event){
		$(this).closest('li').toggleClass('shopping-item__checked');
	});
	$('.shopping-item-delete').click(function(event){
		removeItem($(this).closest('li').text());
		console.log(state);
		$(this).closest('li').toggleClass('shopping-item__checked');
	});
	
	renderList();
});*/
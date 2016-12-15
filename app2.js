$(document).ready(function(){
	//variables
	var state={
		items: [{name: 'apples', checked: false}, {name: 'oranges', checked: false}, {name: 'milk', checked: false}, {name: 'bread', checked: false}]
	}

	//functions
	var getListItemHtml=function(item){
		var checked = item.checked;
		var cssAdded;
		if(checked)
			cssAdded='shopping-item__checked';

		return '<li>'+
        			'<span class="shopping-item '+cssAdded+'">'+item.name+'</span>'+
        				'<div class="shopping-item-controls">'+
          					'<button class="shopping-item-toggle">'+
            					'<span class="button-label">check</span>'+
          					'</button>'+
          					'<button class="shopping-item-delete">'+
            					'<span class="button-label">delete</span>'+
          					'</button>'+
        				'</div>'+
      			'</li>';
	};

	var addItem = function(itemArray, item){
		/*if(var index=state.items.find(function(element, index){
			if(element.name===item)
			return index;
		}) !== undefined)
			state.items[index].quantity+=1;
		else*/
		itemArray.push({name: item, checked: false});
	};
	var checkUncheck=function(itemArray, itemIndex){
		console.log(itemArray);
		console.log(itemArray[itemIndex].checked);
		var itemChecked=itemArray[itemIndex].checked;
		if(itemChecked)
			itemArray[itemIndex].checked=false;
		else
			itemArray[itemIndex].checked=true;
	};
	var removeItem = function(itemArray, itemIndex){
		itemArray.splice(itemIndex, 1);
		console.log(itemArray);
	};

	var renderAddedListItem=function(item, dVal, listElement){
		listElement.append(getListItemHtml(item, dVal));
	};

	var removeListItem=function(item){

	};

	var bindListItemHandlers = function(){
		//check item code
		$('.shopping-item-toggle').click(function(event){
			console.log(state);
			var listItem = $(this).closest('li');
			console.log(listItem);
			checkUncheck(state.items, listItem.index());
			listItem.children('.shopping-item').toggleClass('shopping-item__checked');
		});

		//remove item code
		$('.shopping-item-delete').click(function(event){
			var listItem=$(this).closest('li');
			removeItem(state.items, listItem.index());
			console.log(state);
			listItem.remove();
		});
	};

	var renderList = function(listArray, listElement){
		//listElement.empty();
		var listHtml=listArray.map(function(item){
			return getListItemHtml(item);
		});
		listElement.html(listHtml);
		bindListItemHandlers();
	};

	//main program
	
	renderList(state.items, $('.shopping-list'));

		//add item code
	$('#js-shopping-list-form').submit(function(event){
		event.preventDefault();
		var item=$('#shopping-list-entry').val().trim();
		addItem(state.items, item);
		$('#shopping-list-entry').val('');
		renderList(state.items, $('.shopping-list'));
	});
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
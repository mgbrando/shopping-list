$(document).ready(function(){
	//variables
	var state={
		items: []
	}

	//functions
	var getListItemHtml=function(item){
		return '<li>'+
        			'<span class="shopping-item">'+item.name+'</span>'+
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

	var addItem = function(state, item){
		if(var index=state.items.find(function(element, index){
			if(element.name===item)
			return index;
		}) !== undefined)
			state.items[index].quantity+=1;
		else
			state.items.push({name: item, quantity: 1, checked: false});
	}
	var check=function(state, item){
		if(state[item])
			$('').addClass('shopping-item__checked');
	}
	var removeItem = function(state, item){
		state.items.
		delete items[item];
	}

	var addListItem =function(item){

	}

	var removeListItem=function(item){

	}

	var renderList = function(state, element){
		var listHtml=state.map(function(item){
			return getListItemHtml(item);
		});
		element.html(listHtml);
	}

	//main program
	$('.js-shopping-list-form').submit(function(event){
		event.preventDefault();
		var item=$('#shopping-list-entry').val().trim();
		additem(item);
		$('.shopping-list').append('<li>Item Name:'+item+' - Amount:'+state[key].amount+'</li>');
	});
	$('.shopping-item-toggle').click(function(event){
		$(this).closest('span').toggleClass('shopping-item__checked');
	});
	$('.shopping-item-delete').click(function(event){
		removeItem($(this).closest('span').text());
		console.log(state);
		$(this).closest('li').remove();
	});
	
	renderList(state, $('.shopping-list'));
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
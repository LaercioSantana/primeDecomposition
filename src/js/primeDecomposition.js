(function ( $ ) {
 
    function PrimeDecomposition(element, op){
		this.element = element;

		op = op || {};
		this.numbers = op.numbers || [23, 45];

		this.results;
		this.factors;

		this.lcm;
		this.showLcm = op.showLcm === undefined ? false : op.showLcm;

		this.__buildUI();
	}
	$.extend(PrimeDecomposition, {
		METHOD_ALIAS: {
		}
	})
	PrimeDecomposition.prototype = {
		__buildUI: function(){
			this.element.empty();
			this.__calcParams(this.numbers);
			
			var table = this.results.slice();
			table.push(this.factors);

			var $table = $('<table class="primeDecomposition">');
			for(var j = 0; j < table[0].length; j++){
				var $tr = $('<tr>');
				for(var i = 0; i < table.length; i++){
					var e = i + 2  < table.length ? table[i][j]+"," : table[i][j] ;
					$tr.append('<td>' + e + '</td>');
				}
				$table.append($tr);
			}

			if(this.showLcm){
				var $tr = $('<tr>');
				$tr.append.apply($tr, new Array(this.results.length).fill("<td>"));
				var showLcm = $('<td class="lcm">').text(this.lcm);
				showLcm.append($('<div class="border-container">').append('<div class="border">'))
				$table.append($tr.append(showLcm));
			}
			
			this.element.append($table);
		},
		__calcParams: function(numbers) {
		  var n = numbers;
		  var factors = [];
		  var divisor;

		  var results = new Array(numbers.length).fill([]).map(function(){ return []});
		  results.forEach(function(e, i, a){ a[i][0] = n[i]})//put first numbers
		  
		  for (var i = 2; Math.max.apply(null, n) > 1;) {

		      var hasPushed = false;
		      for(var k = 0; k < n.length; k++)
		        if (n[k] % i == 0) {
		              n[k] /= i;

		              if(!hasPushed) factors.push(i);
		              hasPushed = true;
		        }

		      if(hasPushed)
		        for(var k = 0; k < n.length; k++)
		          results[k].push(n[k]);


		      i = hasPushed ? i : i+1;
		  }

		  factors.push(1);

		  this.factors = factors;
		  this.results = results;

		  //calc lcm
		  this.lcm = 1;
		  factors.forEach(function(e, i, a){
		  	this.lcm *= e;
		  }, this);


		  return factors;
		},
		show: function(value){
			if(value)
				this.element.removeClass("hidden");
			else
				this.element.addClass("hidden");
		}
	}

 	//jquery plugin definition
 	var dataID = "pd.id";
 	$.fn.primeDecomposition = function (op){

 		if(typeof op === 'string'){
 			var args = Array.prototype.slice.call(arguments, 1);

 			this.each(function(){
 				var pd = $(this).data(dataID); 
 				if(pd)
	 				if(op == "show"){
	 					pd.show(true);
	 				}
	 				else if(op == "hide"){
	 					pd.show(false);
	 				}
	 				else if(PrimeDecomposition.METHOD_ALIAS[op]){
	 					var method = PrimeDecomposition.METHOD_ALIAS[op];
	 					pd[method].apply(pd, args);
	 				}
	 				else if(typeof pd[op] === 'function'){
	 					pd[op].apply(pd, args);
	 				}
	 		});

	 		return this;
 		}

 		return this.each(function () {
            var pd = new PrimeDecomposition($(this), op);
            $(this).data(dataID, pd);
        });
 	}

}( jQuery ));
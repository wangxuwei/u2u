var u2u = u2u || {};

u2u.rate = (function(){
	var _temperatureRate = [{id:"celcius",
						   name:"Celcius",
						   unit:"C",
						   base:true,
						   rate:1},
						   
						  {id:"fahrenheit",
						   name:"Fahrenheit",
						   unit:"F",
						   rate:33.8},
						   
						  {id:"kelvin",
						   name:"Kelvin",
						   unit:"K",
						   rate:274.15},
						   
						  {id:"rankine",
						   name:"Rankine",
						   unit:"Ra",
						   rate:493.46999999999997},
							   
						  {id:"reaumur",
						   name:"Reaumur",
						   unit:"Re",
						   rate:0.8}
						];
	
	var _weightRate = [{id:"gram",
					   name:"gram",
					   unit:"g",
					   base:true,
					   rate:1},
					   
					  {id:"kilogram",
					   name:"kilogram",
					   unit:"kg",
					   rate:0.001},
					   
					  {id:"ton",
					   name:"ton",
					   unit:"t",
					   rate:0.000001},
					   
					  {id:"decigram",
					   name:"decigram",
					   unit:"dg",
					   rate:10},
					   
					  {id:"centigram",
					   name:"centigram",
					   unit:"cg",
					   rate:100},
					   
					  {id:"milligram",
					   name:"milligram",
					   unit:"mg",
					   rate:1000},
					   
					  {id:"microgram",
					   name:"microgram",
					   unit:"μg",
					   rate:1000000},
					  
					  {id:"longTon",
					   name:"long ton",
					   unit:"l.t",
					   rate:0.00000098420653},
					   
					  {id:"shortTon",
					   name:"short ton",
					   unit:"sh.t",
					   rate:0.000001102311},
					   
					  {id:"pound",
					   name:"pound",
					   unit:"lb",
					   rate:0.0022046},
					   
					  {id:"ounce",
					   name:"ounce",
					   unit:"oz",
					   rate:0.03215}
					 ];
	
	
	var _lengthRate = [{id:"meter",
					   name:"meter",
					   unit:"m",
					   base:true,
					   rate:1},
					   
					  {id:"kilometer",
					   name:"kilometer",
					   unit:"km",
					   rate:0.001},
					   
					  {id:"decimeter",
					   name:"decimeter",
					   unit:"dm",
					   rate:10},
					   
					  {id:"centimeter",
					   name:"centimeter",
					   unit:"cm",
					   rate:100},
						   
					  {id:"millimeter",
					   name:"millimeter",
					   unit:"mm",
					   rate:1000},
					  
					  {id:"micrometer",
					   name:"micrometer",
					   unit:"μm",
					   rate:1000000},
			
					  {id:"mile",
					   name:"mile",
					   unit:"nmi",
					   rate:0.0006214},
					   
					  {id:"nauticalMile",
					   name:"nautical mile",
					   unit:"mi",
					   rate:0.00054},
					   
					  {id:"yard",
					   name:"yard",
					   unit:"yd",
					   rate:1.0936133},
					   
					  {id:"foot",
					   name:"foot",
					   unit:"ft",
					   rate:3.2808399},
			
					  {id:"inch",
					   name:"inch",
					   unit:"in",
					   rate:39.3700787}
					 ];
	
	var _speedRate = [{id:"meterPerSecond",
					   name:"meter per second",
					   unit:"m/s",
					   base:true,
					   rate:1},
				   
					  {id:"kilometerPerSecond",
					   name:"kilometer per second",
					   unit:"km/s",
					   rate:0.001},
					   
					  {id:"centimeterPerSecond",
					   name:"centimeter per second",
					   unit:"cm/s",
					   rate:100},
					  
					  {id:"millimeterPerSecond",
					   name:"millimeter per second",
					   unit:"mm/s",
					   rate:1000},
					   
					  {id:"inchesPerSecond",
					   name:"inches per second",
					   unit:"in/s",
					   rate:39.3701},
					   
					  {id:"feetPerSecond",
					   name:"feet per second",
					   unit:"ft/s",
					   rate:3.28084},
						   
					  {id:"kilometerPerMin",
					   name:"kilometer per min",
					   unit:"km/min",
					   rate:0.06},
							   
					  {id:"feetPerMin",
					   name:"feet per min",
					   unit:"ft/min",
					   rate:196.85},
								   
					  {id:"milesPerMin",
					   name:"miles per min",
					   unit:"mi/min",
					   rate:0.0372823},
					  
					  {id:"kilometerPerHour",
					   name:"kilometer per hour",
					   unit:"km/h",
					   rate:3.6},
								   
					  {id:"feetPerHour",
					   name:"feet per hour",
					   unit:"ft/h",
					   rate:11811},
								   
					  {id:"milesPerHour",
					   name:"miles per hour",
					   unit:"mi/h",
					   rate:2.23694},
				   
					  {id:"nauticalMilePerHour",
					   name:"nautical mile per hour",
					   unit:"nmi/h",
					   rate:1.94384448},
					   
					  {id:"knots",
					   name:"knots",
					   unit:"kn",
					   rate:2.23694}
					 ];
	
	var _areaRate = [{id:"squareMeter",
					   name:"square meter",
					   unit:"m2",
					   base:true,
					   rate:1},
					   
					  {id:"squareDecimeter",
					   name:"square decimeter",
					   unit:"dm2",
					   rate:100},
					   
					  {id:"squareCentimeter",
					   name:"square centimeter",
					   unit:"cm2",
					   rate:10000},
					   
					  {id:"squareMillimeter",
					   name:"square millimeter",
					   unit:"mm2",
					   rate:1000000},
						   
					  {id:"hectare",
					   name:"hectare",
					   unit:"ha",
					   rate:0.0001},
					   
					  {id:"squareMiles",
					   name:"square miles",
					   unit:"mi2",
					   rate:0.00000038610216},
					  
					  {id:"squareYards",
					   name:"square yards",
					   unit:"yd2",
					   rate:1.1959900},
			
					  {id:"squareFeet",
					   name:"square feet",
					   unit:"ft2",
					   rate:10.7639104},
					   
					  {id:"squareInch",
					   name:"square inch",
					   unit:"in2",
					   rate:1550.0031},
					 ];
	
	var _volumeRate = [{id:"cubicMeter",
					   name:"cubic meter",
					   unit:"m3",
					   base:true,
					   rate:1},
					   
					  {id:"cubicDecimeter",
					   name:"cubic decimeter",
					   unit:"dm3",
					   rate:1000},
					   
					  {id:"cubicCentimeter",
					   name:"cubic centimeter",
					   unit:"cm3",
					   rate:1000000},
					   
					  {id:"cubicMillimeter",
					   name:"cubic millimeter",
					   unit:"mm3",
					   rate:1000000000},
						   
					  {id:"hectoliter",
					   name:"hectoliter",
					   unit:"hl",
					   rate:10},
					   
					  {id:"dekaliter",
					   name:"dekaliter",
					   unit:"dal",
					   rate:100},
					  
					  {id:"liter",
					   name:"liter",
					   unit:"l",
					   rate:1000},
			
					  {id:"deciliter",
					   name:"deciliter",
					   unit:"dl",
					   rate:10000},
					   
					  {id:"centiliter",
					   name:"centiliter",
					   unit:"cl",
					   rate:100000},
					   
					  {id:"milliliter",
					   name:"milliliter",
					   unit:"ml",
					   rate:1000000},
					   
					  {id:"cubicYard",
					   name:"cubic yard",
					   unit:"yd3",
					   rate:1.3079506},
					   
					  {id:"cubicFeet",
					   name:"cubic feet",
					   unit:"ft3",
					   rate:35.3146667},
					   
					  {id:"cubicInch",
					   name:"cubic Inch",
					   unit:"in3",
					   rate:61023.7440947}
					 ];
	var aRates = [_temperatureRate,_weightRate,_lengthRate,_speedRate,_volumeRate,_areaRate];
	var _cache = {};
	for (var i = 0 ; i < aRates.length; i++){
		var rates = aRates[i];
		for (var j = 0; j < rates.length;j++){
			var rate = rates[j];
			_cache[rate.id] = rate;
		}
	};
	
	
	function buildRatesList(rates){
		return $.extend([],rates);
	};
	
	function getRate(rateId){
		return $.extend({},_cache[rateId]);
	}
	
	function convert(value,baseRateId,newRateId){
		var baseRate = getRate(baseRateId);
		var newRate = getRate(newRateId);
		var convertValue = value*(newRate.rate/baseRate.rate);
		convertValue = convertValue.toFixed(15)*1;
		return convertValue;
	}
	
	return {
		getTemperatureRate:function(){return buildRatesList(_temperatureRate)},
		getWeightRate:function(){return buildRatesList(_weightRate)},
		getLengthRate:function(){return buildRatesList(_lengthRate)},
		getSpeedRate:function(){return buildRatesList(_speedRate)},
		getVolumeRate:function(){return buildRatesList(_volumeRate)},
		getAreaRate:function(){return buildRatesList(_areaRate)},
		convert:function(value,baseRateId,newRateId){return convert(value,baseRateId,newRateId)}
	};
})();
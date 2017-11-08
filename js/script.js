var year=pmt("年份"),
	month=pmt("月份"),
	date=pmt("日期");
document.write("您的生日在"+year+"年是第"+calDate(year,month,date)+"天");
function pmt(str){
	return parseInt(prompt("请输入您的出生"+str));
}

// method 1
function calDate(year,month,date){
	var day=0;
	for(var i=0,j=0;i<month-1;i++){
		switch(i){
			case 2:
				if(year%4===0){
					j=29;
				}else{
					j=28;
				}
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				j=30;
				break;
			default:
				j=31;
		}
		day+=j;
	}
	return day+=date;
}

// method 2
/*function calDate(year,month,date){
	var day=0,
		monArr=[31,28,31,30,31,30,31,31,30,31,30,31];
	if(year%4===0 && month>2){
		monArr[1]=29;
	}
	for(var i=0;i<month-1;i++){
		day+=monArr[i];
	}
	return day+=date;
}*/
var body = document.querySelector('table>tbody');
var json = [];
for (var i = 1; i < body.rows.length; i++) {
   var row = body.rows[i];
   for (var j = 0; j < row.cells.length; j++) {
	   var col = row.cells[j];
	   const no = "Match "+i;
	   const date = row.cells[j++].innerHTML;
	   const time = row.cells[j++].innerHTML;
	   const val = row.cells[j++].innerHTML.replace(/&nbsp;/g,' ').replace(/<br>/g,' ').replace(/<br>↵/g,' ').split(' ').map(a => a.trim());
	   let team1 = "", team2 = "";
	   let flag = false;
	   for (var k = 0; k < val.length - 2; k++) {
	   	if(val[k] == "Vs")
	   		flag = true;
	   	else 
	   		if(!flag)
	   			team1 += val[k] + " ";
		   	else team2 += val[k] + " ";
	   }
	   team1 = team1.trim();
	   team2 = team2.trim();
	   const venue = row.cells[j++].innerHTML.replace('&nbsp;','');
		var obj = {
			date, time, no, team1, team2, venue
		};
		json.push(obj);
	}
	console.log(json);
}
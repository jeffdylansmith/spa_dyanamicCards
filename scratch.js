var create = document.getElementById("create");
var cardarea = document.getElementById("output");
var count = 0;
function createcard (uniqueid){
	console.log(uniqueid);
	var input = document.getElementById("input").value;
	var card = `<article id="A${uniqueid}">
	            <h3>${input}</h3>
	            <input type="button" onclick="deletecard('A${uniqueid}')" value="Delete">
	            </article>`;
 cardarea.innerHTML += card;
}
function deletecard(jerry){
	console.log(jerry);
	console.log("document.getEl)", document.getElementById(jerry));
	document.getElementById(jerry).remove();
};
create.addEventListener("click", function(){
	count++;
	createcard(count);
});
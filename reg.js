function val()
{
	var nm2=document.frm1.nm.value;
	var dt2=document.frm1.dt.value;
	var em2=document.frm1.em.value;
	var t2=document.frm1.t.value;
	var sl2=document.frm1.city.value;
    var tx2=document.frm1.tx.value;
    var f=0;
    if (nm2=="") 
    {
		alert("* please enter your name");
		f=1;
	}
	if(dt2=="")
	{
	    alert("* please enter your date of birth");
	    f=1;
	}
	if(em2=="")
	{
		alert("* please enter your email-id");
		f=1;
	}
	if(t2=="")
	{
	    alert("* please enter your phone number");
	    f=1;	
	}
	if(document.frm1.ug.checked==false && document.frm1.gr.checked==false && document.frm1.pg.checked==false)
	{
	    alert("* please select your qualification");
	    f=1;		
	}
	if(document.frm1.g[0].checked==false && document.frm1.g[1].checked==false)
	{
	    alert("* please select your gender");	
	    f=1;			
	}
	if(sl2=="0")
	{
	    alert("* please select your city");	
	    f=1;					
	}
	if(tx2=="")
	{
		alert("* please describe yourself");	
		f=1;			
	}
	if(f==0){
		alert("you are signed in");
		window.location.href="thankyou.html";
	}

}
function val()
{
	var un2=document.frm1.un.value;
	var pw=document.frm1.ps.value;
	if(un2=="shreya"&&pw=="1234")
	{
		alert("you are logged in");
		window.location.href = "home.html";
	}
	else
	{
		alert("access denied");
		window.location.href="reg.html";
	}
}
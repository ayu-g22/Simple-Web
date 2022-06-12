var a=1;
function show(a);
var slide=getElementbyClassName("slide");
function show(n)
{
    var i;
    if(n>slide.length)
      a=1;
    if(n<1)
     a=slide.length;
    for(i=0;i<slide.length;i++)
    {
        slide[i].style.display="none";
    }   
}
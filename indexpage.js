//!  VARIABLES
const button_1= document.getElementById("start_1"),
      e_mail_1= document.getElementById("e-mail_1"),
      button_2= document.getElementById("start_2"),
      e_mail_2= document.getElementById("e-mail_2"),
      textLabel1= document.getElementById("emailLabel1"),
      textLabel2= document.getElementById("emailLabel2"),
      span_1=document.getElementById("span_1"),
      span_2=document.getElementById("span_2");
/**
 *! TEXT AREA REDUCER FUNCTION
 */
function changer(a)  //? FOR CHANGING TEXTLABEL STYLE
{
    a.height="1.1rem";
    a.fontSize="12px";
    a.paddingTop=".2%";
    a.backgroundColor="transparent";
}
function reducer(element) //? FOR CHOOSING WHICH ELEMENT WİLL BE CHANGED
{
    if(element.id=="emailLabel1")
    {
        let a=textLabel1.style; 
        changer(a);
    }
        else 
        {
            let a = textLabel2.style;
            changer(a);
        }
}
/**
 *! EMAİL AREA CONTROLER FUNCTION
 */
function controler(element) //? FOR CHOOSING WHICH ELEMENT WİLL BE CONTROLED
{
    if(element.id=="start_1")
    {
        var a=textLabel1.style;
        var b=e_mail_1.value;
        var c=span_1;
    }
        else
        {
            var a=textLabel2.style;
            var b=e_mail_2.value;
            var c=span_2;
        }
    if(b== null || b== "")
    {
        c.hidden=false;
        changer(a);
    }
        else 
        {
            changer(a);
            c.hidden=false;
            c.innerHTML=`Hoşgeldiniz ${b} Kişisel sayfanıza yönlendiriliyorsunuz...`;
        }
}
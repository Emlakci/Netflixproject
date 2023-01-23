//!  VARIABLES
const labelEmail=document.getElementById("labelEmail"),
      erorSpan1=document.getElementById("erorSpan1"),
      inputEmail=document.getElementById("input1"),
      labelPassword=document.getElementById("labelPassword"),
      erorSpan2=document.getElementById("erorSpan2"),
      inputPassword=document.getElementById("input2"),
      showPassBtn=document.getElementById("show"),
      inputs=document.getElementById("inputs"),
      permisionMessage=document.getElementById("controlErorMessage"),
      moreKnowledge=document.getElementById("moreKnowlegdeText");
var inputEmail_status=false,
    inputPassword_status=false,
    email=0,
    password=0,
    counter=1;
/**
 *! TEXT AREA REDUCER FUNCTION
 */
function changer(a) //FOR CHANGING TEXTLABEL STYLE
{
    a.height="1rem";
    a.fontSize="12px";
    a.paddingTop=".2%";
    a.backgroundColor="transparent";
    a.zIndex="0"
}   
function reducer(element) //FOR CHOOSING WHICH ELEMENT WİLL BE CHANGED
{
    if(element.id=="labelEmail")
    {
        let a=labelEmail.style; 
        changer(a);
    }
        else 
        {
            let a =labelPassword.style;
            changer(a);
        }
}
/**
 *! FUNCTION FOR HİDE/SHOW TYPİNG PASSWORD 
 */
function show()
{
    let x=inputPassword;
    if(x.type==="password")
    {
        x.type="text";
    }
        else
        {
            x.type="password";
        }
}
/**
 * ! ADD PROPERTY OF EVENTLİSTENER FOR EACH İNPUT
 */
// ? FOR COUNTING INPUTS VALUE LENGTH
 inputEmail.addEventListener("input", isEmpty1=()=>{
    let a=String(inputEmail.value).length;
    if(email>0&&a<4)
    {
        erorSpan1.hidden=false;
        inputEmail.style.borderBottomColor="darkorange";
        inputEmail.style.borderBottomWidth="3px";
    }
    if(email>0&&a>4)
    {
    erorSpan1.hidden=true;
    inputEmail.style.borderBottomColor="none";
    inputEmail.style.borderBottomWidth="0px";
    }
 });
 inputPassword.addEventListener("input", isEmpty2=()=>{
    let a=String(inputPassword.value).length;
    if(a<1)
    {
        showPassBtn.hidden=true;
    }
        else
        {
            showPassBtn.hidden=false;
        };
    if(password>0&&a<4)
    {
        erorSpan2.hidden=false;           
        inputPassword.style.borderBottomColor="darkorange";
        inputPassword.style.borderBottomWidth="3px";

    }
    if(password>0&&a>3)
    {
    erorSpan2.hidden=true;
    inputPassword.style.borderBottomColor="none";
    inputPassword.style.borderBottomWidth="0px";
    }    
 });
// ? FOR ASSIGN INPUTS' STATUS (ACTİVE/PASİVE) 
document.addEventListener("click", isActive=(element)=>{
    element=element.target.id;
    if(element=="input1")
    {
        inputPassword_status=false;
        inputEmail_status=true;
    }
    else if(element=="input2")
    {
        inputEmail_status=false;
        inputPassword_status=true;
    }
    else if(inputEmail_status&&email<1&&element!="show")
    {    
        inputEmail_status=false;
        inputPassword_status=false;
        email=1;
        isEmpty1();
    }
    else if(inputPassword_status&&password<1&&element!="show")
    {                           
        inputPassword_status=false;
        inputEmail_status=false;
        password=1;
        isEmpty2();
    }
});
/**
 *! FUNCTION FOR FORM VALIDATION
 */
function controler ()
{
    let a=String(inputEmail.value).length,
        b=String(inputPassword.value).length;
        // permisionMessage.hidden=true;
    if(a>4&&b>3)
    {
        permisionMessage.innerHTML="HOŞGELDİNİZ KİŞİSEL SAYFANIZA YÖNLENDİRİLİYORSUNUZ..."
        permisionMessage.style.textAlign="center"
        permisionMessage.hidden=false;
    }
        else
        {
            if(a<4)
            {
                erorSpan1.hidden=false;
                inputEmail.style.borderBottomColor="darkorange";
                email=1;
            };
            if(b<4)
            {
                erorSpan2.hidden=false;           
                inputPassword.style.borderBottomColor="darkorange";
                password=1;
            }
        }
}
/**
 *! FUNCTION FOR SHOWING EXTRA KNOWLEDGE TEXT 
 */    
function show2 ()
{
    if(counter%2!=0)
    {
        moreKnowledge.hidden=false;
        counter=counter+1;
    }
        else
        {
            moreKnowledge.hidden=true;
            counter=counter+1;
        }
}
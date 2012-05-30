
var PageName = 'Contact-us-page';
var PageId = 'p8177a480c830417bbdc172f1771d54c6'
var PageUrl = 'Contact-us-page.html'
document.title = 'Contact-us-page';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURI(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return encodeURI('#OnLoadVariable=' + $OnLoadVariable + '&CSUM=1');
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

var u71 = document.getElementById('u71');

var u20 = document.getElementById('u20');

var u64 = document.getElementById('u64');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u70 = document.getElementById('u70');

var u36 = document.getElementById('u36');

x = 0;
y = 0;
InsertAfterBegin(u36ann, "<div id='u36Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u36', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u36').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u36based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u36base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u36based = document.getElementById('u36based');
            
InsertBeforeEnd(u36based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> After giving all required informations, member click the &quot;Submit&quot; button<BR><BR></div>");

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

	self.location.href="After-Contact-us-page.html" + GetQuerystring();

}

}

var u31 = document.getElementById('u31');

var u45 = document.getElementById('u45');

var u11 = document.getElementById('u11');

x = 0;
y = 0;
InsertAfterBegin(u11ann, "<div id='u11Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u11', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u11').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u11based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u11base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u11based = document.getElementById('u11based');
            
InsertBeforeEnd(u11based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can enter any search terms and clic<BR><BR></div>");

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="Search-Results-page.html" + GetQuerystring();

}

}

var u27 = document.getElementById('u27');

var u6 = document.getElementById('u6');

x = 0;
y = 0;
InsertAfterBegin(u6ann, "<div id='u6Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u6', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u6').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u6based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u6base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u6based = document.getElementById('u6based');
            
InsertBeforeEnd(u6based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Contact page to the member<BR><BR></div>");

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href=PageUrl + GetQuerystring();
    window.location.reload();

}

}
gv_vAlignTable['u6'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u2 = document.getElementById('u2');

x = 0;
y = 0;
InsertAfterBegin(u2ann, "<div id='u2Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u2', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u2').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u2based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u2base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u2based = document.getElementById('u2based');
            
InsertBeforeEnd(u2based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the logo, it redirects the user to the Home page of the application<BR><BR></div>");

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u10 = document.getElementById('u10');

var u0 = document.getElementById('u0');

var u69 = document.getElementById('u69');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u49 = document.getElementById('u49');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u35 = document.getElementById('u35');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u8 = document.getElementById('u8');

var u34 = document.getElementById('u34');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}

var u48 = document.getElementById('u48');

var u72 = document.getElementById('u72');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u44 = document.getElementById('u44');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u22 = document.getElementById('u22');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u47 = document.getElementById('u47');

var u12 = document.getElementById('u12');

x = 0;
y = 0;
InsertAfterBegin(u12ann, "<div id='u12Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u12', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u12').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u12based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u12base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u12based = document.getElementById('u12based');
            
InsertBeforeEnd(u12based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> On click member can view the blog page<BR><BR></div>");

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}

var u41 = document.getElementById('u41');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u57 = document.getElementById('u57');

var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u21'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u7 = document.getElementById('u7');

x = 0;
y = 0;
InsertAfterBegin(u7ann, "<div id='u7Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u7', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u7').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u7based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u7base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u7based = document.getElementById('u7based');
            
InsertBeforeEnd(u7based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Advertise page to the member<BR><BR></div>");

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="Advertise-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u7'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u5 = document.getElementById('u5');

x = 0;
y = 0;
InsertAfterBegin(u5ann, "<div id='u5Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u5', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u5').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u5based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u5base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u5based = document.getElementById('u5based');
            
InsertBeforeEnd(u5based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives About page to the member<BR><BR></div>");

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="About-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u5'] = 'top';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u15'] = 'top';
var u56 = document.getElementById('u56');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u16 = document.getElementById('u16');

x = 0;
y = 0;
InsertAfterBegin(u16ann, "<div id='u16Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u16', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u16').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u16based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u16base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u16based = document.getElementById('u16based');
            
InsertBeforeEnd(u16based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect to hisMyWBA page when the member is already login, otherwise redirect him/her to the Login page<BR><BR></div>");

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", u16Click);
else u16.addEventListener("click", u16Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u16LinksClick'></DIV>")
var u16LinksClick = document.getElementById('u16LinksClick');
function u16Click(e) 
{

	ToggleLinks(e, 'u16LinksClick');
}

InsertBeforeEnd(u16LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u16Clickuf26652fc77a44cf6a6d7c1700aae2109(event)'>1) When member already login</div>");
function u16Clickuf26652fc77a44cf6a6d7c1700aae2109(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u16LinksClick');
}

InsertBeforeEnd(u16LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u16Clicku5b543c87eb6f4a3cb48670af41a269b5(event)'>2) When member not login </div>");
function u16Clicku5b543c87eb6f4a3cb48670af41a269b5(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u16LinksClick');
}

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u60 = document.getElementById('u60');

var u24 = document.getElementById('u24');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u18 = document.getElementById('u18');

x = 0;
y = 0;
InsertAfterBegin(u18ann, "<div id='u18Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u18', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u18').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u18based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u18base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u18based = document.getElementById('u18based');
            
InsertBeforeEnd(u18based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the directory listing page<BR><BR></div>");

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
if (window.OnLoad) OnLoad();

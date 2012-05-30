
var PageName = 'Blog-page';
var PageId = 'pf208bfe7ffce47c0bffd6b1f9fdeec8e'
var PageUrl = 'Blog-page.html'
document.title = 'Blog-page';

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

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u256 = document.getElementById('u256');

x = 0;
y = 0;
InsertAfterBegin(u256ann, "<div id='u256Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u256', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u256').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u256based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u256base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u256based = document.getElementById('u256based');
            
InsertBeforeEnd(u256based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can save this particular blog post to his My web business. But he should be login to save this post, otherwise he is redirect to the login page.<BR><BR></div>");

u256.style.cursor = 'pointer';
if (bIE) u256.attachEvent("onclick", u256Click);
else u256.addEventListener("click", u256Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u256LinksClick'></DIV>")
var u256LinksClick = document.getElementById('u256LinksClick');
function u256Click(e) 
{

	ToggleLinks(e, 'u256LinksClick');
}

InsertBeforeEnd(u256LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u256Clickuc4ea9c3bad334def957e78fcd61a167e(event)'>1) When member is already login</div>");
function u256Clickuc4ea9c3bad334def957e78fcd61a167e(e)
{

	self.location.href="Reader-My-Saved-Blogposts.html" + GetQuerystring();

	ToggleLinks(e, 'u256LinksClick');
}

InsertBeforeEnd(u256LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u256Clicku7cfb8a2cf90d447d945cde63641f5cd1(event)'>2) If member is not login </div>");
function u256Clicku7cfb8a2cf90d447d945cde63641f5cd1(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u256LinksClick');
}
gv_vAlignTable['u256'] = 'top';
var u247 = document.getElementById('u247');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');

x = 0;
y = 0;
InsertAfterBegin(u45ann, "<div id='u45Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u45', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u45').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u45based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u45base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u45based = document.getElementById('u45based');
            
InsertBeforeEnd(u45based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicked this link, the profile of ours in Linkedin is shown to the user.<BR><BR></div>");

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

	self.location.href="Member-click-linked-in-button.html" + GetQuerystring();

}

}

var u28 = document.getElementById('u28');

x = 0;
y = 0;
InsertAfterBegin(u28ann, "<div id='u28Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u28', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u28').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u28based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u28base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u28based = document.getElementById('u28based');
            
InsertBeforeEnd(u28based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to Registration page<BR><BR></div>");

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="Registeration-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u28'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u251 = document.getElementById('u251');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');

var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');

var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');

x = 0;
y = 0;
InsertAfterBegin(u193ann, "<div id='u193Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u193', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u193').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u193based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u193base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u193based = document.getElementById('u193based');
            
InsertBeforeEnd(u193based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the post the member can read the content<BR><BR></div>");

u193.style.cursor = 'pointer';
if (bIE) u193.attachEvent("onclick", Clicku193);
else u193.addEventListener("click", Clicku193, true);
function Clicku193(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u193'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u262 = document.getElementById('u262');

var u91 = document.getElementById('u91');

x = 0;
y = 0;
InsertAfterBegin(u91ann, "<div id='u91Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u91', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u91').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u91based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u91base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u91based = document.getElementById('u91based');
            
InsertBeforeEnd(u91based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the directory listing page<BR><BR></div>");

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u173 = document.getElementById('u173');

x = 0;
y = 0;
InsertAfterBegin(u173ann, "<div id='u173Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u173', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u173').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u173based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u173base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u173based = document.getElementById('u173based');
            
InsertBeforeEnd(u173based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can enter any search terms and clic<BR><BR></div>");

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if (true) {

	self.location.href="Search-Results-page.html" + GetQuerystring();

}

}

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u163 = document.getElementById('u163');

x = 0;
y = 0;
InsertAfterBegin(u163ann, "<div id='u163Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u163', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u163').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u163based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u163base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u163based = document.getElementById('u163based');
            
InsertBeforeEnd(u163based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the logo, it redirects the user to the Home page of the application<BR><BR></div>");

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u252 = document.getElementById('u252');

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u268 = document.getElementById('u268');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u246 = document.getElementById('u246');

x = 0;
y = 0;
InsertAfterBegin(u246ann, "<div id='u246Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u246', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u246').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u246based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u246base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u246based = document.getElementById('u246based');
            
InsertBeforeEnd(u246based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member redirected to the blog post page<BR><BR></div>");

u246.style.cursor = 'pointer';
if (bIE) u246.attachEvent("onclick", Clicku246);
else u246.addEventListener("click", Clicku246, true);
function Clicku246(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u246'] = 'top';
var u257 = document.getElementById('u257');

x = 0;
y = 0;
InsertAfterBegin(u257ann, "<div id='u257Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u257', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u257').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u257based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u257base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u257based = document.getElementById('u257based');
            
InsertBeforeEnd(u257based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can save this particular blog post to his My web business. But he should be login to save this post, otherwise he is redirect to the login page.<BR><BR></div>");

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", u257Click);
else u257.addEventListener("click", u257Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u257LinksClick'></DIV>")
var u257LinksClick = document.getElementById('u257LinksClick');
function u257Click(e) 
{

	ToggleLinks(e, 'u257LinksClick');
}

InsertBeforeEnd(u257LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u257Clicku421f84c21af949c1b57cbac17be96d80(event)'>1) When member is already login</div>");
function u257Clicku421f84c21af949c1b57cbac17be96d80(e)
{

	self.location.href="Reader-My-Saved-Blogposts.html" + GetQuerystring();

	ToggleLinks(e, 'u257LinksClick');
}

InsertBeforeEnd(u257LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u257Clicku1ffa85db91b5410b8f823b450ec380b6(event)'>2) If member is not login </div>");
function u257Clicku1ffa85db91b5410b8f823b450ec380b6(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u257LinksClick');
}
gv_vAlignTable['u257'] = 'top';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href=PageUrl + GetQuerystring();
    window.location.reload();

}

}
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u108 = document.getElementById('u108');

var u228 = document.getElementById('u228');

x = 0;
y = 0;
InsertAfterBegin(u228ann, "<div id='u228Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u228', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u228').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u228based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u228base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u228based = document.getElementById('u228based');
            
InsertBeforeEnd(u228based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can save this particular blog post to his My web business. But he should be login to save this post, otherwise he is redirect to the login page.<BR><BR></div>");

u228.style.cursor = 'pointer';
if (bIE) u228.attachEvent("onclick", u228Click);
else u228.addEventListener("click", u228Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u228LinksClick'></DIV>")
var u228LinksClick = document.getElementById('u228LinksClick');
function u228Click(e) 
{

	ToggleLinks(e, 'u228LinksClick');
}

InsertBeforeEnd(u228LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u228Clickucde41c448d074c139f505377465522f7(event)'>1) When member is already login</div>");
function u228Clickucde41c448d074c139f505377465522f7(e)
{

	self.location.href="Reader-My-Saved-Blogposts.html" + GetQuerystring();

	ToggleLinks(e, 'u228LinksClick');
}

InsertBeforeEnd(u228LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u228Clicku2728416129ea41a59573d7ef7de70921(event)'>2) If member is not login </div>");
function u228Clicku2728416129ea41a59573d7ef7de70921(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u228LinksClick');
}
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');

var u100 = document.getElementById('u100');

var u177 = document.getElementById('u177');

x = 0;
y = 0;
InsertAfterBegin(u177ann, "<div id='u177Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u177', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u177').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u177based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u177base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u177based = document.getElementById('u177based');
            
InsertBeforeEnd(u177based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Breadcrumb Trail... Redirects the member to the Home page<BR><BR></div>");

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u68 = document.getElementById('u68');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u21 = document.getElementById('u21');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u156 = document.getElementById('u156');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');

x = 0;
y = 0;
InsertAfterBegin(u18ann, "<div id='u18Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u18', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u18').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u18based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u18base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u18based = document.getElementById('u18based');
            
InsertBeforeEnd(u18based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member wants to login to the application,<BR><BR></div>");

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", u18Click);
else u18.addEventListener("click", u18Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u18LinksClick'></DIV>")
var u18LinksClick = document.getElementById('u18LinksClick');
function u18Click(e) 
{

	ToggleLinks(e, 'u18LinksClick');
}

InsertBeforeEnd(u18LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u18Clicku01d31fb5df994f8a8596e0c2c2a55755(event)'>1) When user gives valid credentials  & Member</div>");
function u18Clicku01d31fb5df994f8a8596e0c2c2a55755(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u18LinksClick');
}

InsertBeforeEnd(u18LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u18Clicku4db4cb03247b431c9ddb9d6e51c40e69(event)'>2) When user gives valid credentials & Advertiser</div>");
function u18Clicku4db4cb03247b431c9ddb9d6e51c40e69(e)
{

	self.location.href="#" + GetQuerystring();

	ToggleLinks(e, 'u18LinksClick');
}

InsertBeforeEnd(u18LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u18Clicku489eeb3387cb4bd196116eeea16c66ba(event)'>3) When user gives invalid credentials</div>");
function u18Clicku489eeb3387cb4bd196116eeea16c66ba(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u18LinksClick');
}

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');

var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');

x = 0;
y = 0;
InsertAfterBegin(u220ann, "<div id='u220Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u220', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u220').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u220based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u220base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u220based = document.getElementById('u220based');
            
InsertBeforeEnd(u220based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Image of the post, on click this member redirect the member to the post page.<BR><BR></div>");

u220.style.cursor = 'pointer';
if (bIE) u220.attachEvent("onclick", Clicku220);
else u220.addEventListener("click", Clicku220, true);
function Clicku220(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}

var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u84 = document.getElementById('u84');

x = 0;
y = 0;
InsertAfterBegin(u84ann, "<div id='u84Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u84', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u84').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u84based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u84base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u84based = document.getElementById('u84based');
            
InsertBeforeEnd(u84based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can enter any search terms and clic<BR><BR></div>");

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

	self.location.href="Search-Results-page.html" + GetQuerystring();

}

}

var u106 = document.getElementById('u106');

x = 0;
y = 0;
InsertAfterBegin(u106ann, "<div id='u106Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u106', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u106').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u106based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u106base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u106based = document.getElementById('u106based');
            
InsertBeforeEnd(u106based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirect to the blog post page<BR><BR></div>");

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u46 = document.getElementById('u46');

x = 0;
y = 0;
InsertAfterBegin(u46ann, "<div id='u46Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u46', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u46').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u46based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u46base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u46based = document.getElementById('u46based');
            
InsertBeforeEnd(u46based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the public profile page of WBA in twitter<BR><BR></div>");

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="Member-click-Twitter-button.html" + GetQuerystring();

}

}

var u198 = document.getElementById('u198');

var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');

x = 0;
y = 0;
InsertAfterBegin(u233ann, "<div id='u233Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u233', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u233').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u233based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u233base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u233based = document.getElementById('u233based');
            
InsertBeforeEnd(u233based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member redirected to the blog post page<BR><BR></div>");

u233.style.cursor = 'pointer';
if (bIE) u233.attachEvent("onclick", Clicku233);
else u233.addEventListener("click", Clicku233, true);
function Clicku233(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u233'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u151 = document.getElementById('u151');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u94'] = 'top';
var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u253 = document.getElementById('u253');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u165 = document.getElementById('u165');

x = 0;
y = 0;
InsertAfterBegin(u165ann, "<div id='u165Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u165', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u165').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u165based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u165base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u165based = document.getElementById('u165based');
            
InsertBeforeEnd(u165based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Advertise page to the member<BR><BR></div>");

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	self.location.href="Advertise-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u165'] = 'top';
var u254 = document.getElementById('u254');

var u181 = document.getElementById('u181');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u4 = document.getElementById('u4');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');

x = 0;
y = 0;
InsertAfterBegin(u75ann, "<div id='u75Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u75', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u75').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u75based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u75base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u75based = document.getElementById('u75based');
            
InsertBeforeEnd(u75based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the logo, it redirects the user to the Home page of the application<BR><BR></div>");

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u255 = document.getElementById('u255');

x = 0;
y = 0;
InsertAfterBegin(u255ann, "<div id='u255Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u255', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u255').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u255based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u255base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u255based = document.getElementById('u255based');
            
InsertBeforeEnd(u255based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can save this particular blog post to his My web business. But he should be login to save this post, otherwise he is redirect to the login page.<BR><BR></div>");

u255.style.cursor = 'pointer';
if (bIE) u255.attachEvent("onclick", u255Click);
else u255.addEventListener("click", u255Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u255LinksClick'></DIV>")
var u255LinksClick = document.getElementById('u255LinksClick');
function u255Click(e) 
{

	ToggleLinks(e, 'u255LinksClick');
}

InsertBeforeEnd(u255LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u255Clicku195b8d92d7704dc7b3ebc828eb40ea50(event)'>1) When member is already login</div>");
function u255Clicku195b8d92d7704dc7b3ebc828eb40ea50(e)
{

	self.location.href="Reader-My-Saved-Blogposts.html" + GetQuerystring();

	ToggleLinks(e, 'u255LinksClick');
}

InsertBeforeEnd(u255LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u255Clicku76f531238db141ca9dc3708e1073d090(event)'>2) If member is not login </div>");
function u255Clicku76f531238db141ca9dc3708e1073d090(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u255LinksClick');
}
gv_vAlignTable['u255'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');

var u250 = document.getElementById('u250');

var u199 = document.getElementById('u199');

var u42 = document.getElementById('u42');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');

x = 0;
y = 0;
InsertAfterBegin(u234ann, "<div id='u234Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u234', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u234').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u234based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u234base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u234based = document.getElementById('u234based');
            
InsertBeforeEnd(u234based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the post the member can read the content<BR><BR></div>");

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u234'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u25 = document.getElementById('u25');

var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');

x = 0;
y = 0;
InsertAfterBegin(u169ann, "<div id='u169Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u169', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u169').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u169based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u169base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u169based = document.getElementById('u169based');
            
InsertBeforeEnd(u169based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect to hisMyWBA page when the member is already login, otherwise redirect him/her to the Login page<BR><BR></div>");

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", u169Click);
else u169.addEventListener("click", u169Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u169LinksClick'></DIV>")
var u169LinksClick = document.getElementById('u169LinksClick');
function u169Click(e) 
{

	ToggleLinks(e, 'u169LinksClick');
}

InsertBeforeEnd(u169LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u169Clicku29230ea35fca455c9b17a68b38ba7a27(event)'>1) When member already login</div>");
function u169Clicku29230ea35fca455c9b17a68b38ba7a27(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u169LinksClick');
}

InsertBeforeEnd(u169LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u169Clicku1b443452f95c41a0913bfe5081634415(event)'>2) When member not login </div>");
function u169Clicku1b443452f95c41a0913bfe5081634415(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u169LinksClick');
}

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');

var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	self.location.href=PageUrl + GetQuerystring();
    window.location.reload();

}

}

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u149 = document.getElementById('u149');

x = 0;
y = 0;
InsertAfterBegin(u149ann, "<div id='u149Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u149', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u149').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u149based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u149base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u149based = document.getElementById('u149based');
            
InsertBeforeEnd(u149based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives About page to the member<BR><BR></div>");

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{

if (true) {

	self.location.href="About-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u149'] = 'top';
var u238 = document.getElementById('u238');

x = 0;
y = 0;
InsertAfterBegin(u238ann, "<div id='u238Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u238', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u238').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u238based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u238base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u238based = document.getElementById('u238based');
            
InsertBeforeEnd(u238based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member redirected to the blog post page<BR><BR></div>");

u238.style.cursor = 'pointer';
if (bIE) u238.attachEvent("onclick", Clicku238);
else u238.addEventListener("click", Clicku238, true);
function Clicku238(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u238'] = 'top';
var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u85 = document.getElementById('u85');

x = 0;
y = 0;
InsertAfterBegin(u85ann, "<div id='u85Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u85', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u85').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u85based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u85base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u85based = document.getElementById('u85based');
            
InsertBeforeEnd(u85based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> On click member can view the blog page<BR><BR></div>");

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{

if (true) {

	self.location.href=PageUrl + GetQuerystring();
    window.location.reload();

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u235 = document.getElementById('u235');

var u34 = document.getElementById('u34');

var u154 = document.getElementById('u154');

x = 0;
y = 0;
InsertAfterBegin(u154ann, "<div id='u154Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u154', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u154').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u154based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u154base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u154based = document.getElementById('u154based');
            
InsertBeforeEnd(u154based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirected to the blog page<BR><BR></div>");

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if (true) {

	self.location.href=PageUrl + GetQuerystring();
    window.location.reload();

}

}

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u121 = document.getElementById('u121');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u242 = document.getElementById('u242');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');

x = 0;
y = 0;
InsertAfterBegin(u79ann, "<div id='u79Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u79', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u79').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u79based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u79base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u79based = document.getElementById('u79based');
            
InsertBeforeEnd(u79based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Contact page to the member<BR><BR></div>");

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

	self.location.href="Contact-us-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u79'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u188 = document.getElementById('u188');

x = 0;
y = 0;
InsertAfterBegin(u188ann, "<div id='u188Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u188', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u188').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u188based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u188base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u188based = document.getElementById('u188based');
            
InsertBeforeEnd(u188based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the post the member can read the content<BR><BR></div>");

u188.style.cursor = 'pointer';
if (bIE) u188.attachEvent("onclick", Clicku188);
else u188.addEventListener("click", Clicku188, true);
function Clicku188(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u188'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');

x = 0;
y = 0;
InsertAfterBegin(u80ann, "<div id='u80Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u80', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u80').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u80based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u80base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u80based = document.getElementById('u80based');
            
InsertBeforeEnd(u80based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Advertise page to the member<BR><BR></div>");

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{

if (true) {

	self.location.href="Advertise-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u80'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u239 = document.getElementById('u239');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u158 = document.getElementById('u158');

x = 0;
y = 0;
InsertAfterBegin(u158ann, "<div id='u158Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u158', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u158').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u158based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u158base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u158based = document.getElementById('u158based');
            
InsertBeforeEnd(u158based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member<BR><BR></div>");

u158.style.cursor = 'pointer';
if (bIE) u158.attachEvent("onclick", Clicku158);
else u158.addEventListener("click", Clicku158, true);
function Clicku158(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u204 = document.getElementById('u204');

var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');

x = 0;
y = 0;
InsertAfterBegin(u150ann, "<div id='u150Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u150', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u150').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u150based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u150base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u150based = document.getElementById('u150based');
            
InsertBeforeEnd(u150based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Contact page to the member<BR><BR></div>");

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{

if (true) {

	self.location.href="Contact-us-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u150'] = 'top';
var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u89 = document.getElementById('u89');

x = 0;
y = 0;
InsertAfterBegin(u89ann, "<div id='u89Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u89', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u89').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u89based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u89base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u89based = document.getElementById('u89based');
            
InsertBeforeEnd(u89based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect to hisMyWBA page when the member is already login, otherwise redirect him/her to the Login page<BR><BR></div>");

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", u89Click);
else u89.addEventListener("click", u89Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u89LinksClick'></DIV>")
var u89LinksClick = document.getElementById('u89LinksClick');
function u89Click(e) 
{

	ToggleLinks(e, 'u89LinksClick');
}

InsertBeforeEnd(u89LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u89Clickuf26652fc77a44cf6a6d7c1700aae2109(event)'>1) When member already login</div>");
function u89Clickuf26652fc77a44cf6a6d7c1700aae2109(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u89LinksClick');
}

InsertBeforeEnd(u89LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u89Clicku5b543c87eb6f4a3cb48670af41a269b5(event)'>2) When member not login </div>");
function u89Clicku5b543c87eb6f4a3cb48670af41a269b5(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u89LinksClick');
}

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u26 = document.getElementById('u26');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u135 = document.getElementById('u135');

x = 0;
y = 0;
InsertAfterBegin(u135ann, "<div id='u135Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u135', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u135').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u135based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u135base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u135based = document.getElementById('u135based');
            
InsertBeforeEnd(u135based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> By clcking the tag, the memer<BR><BR></div>");

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{

if (true) {

	self.location.href="User-click-any-tag.html" + GetQuerystring();

}

}
gv_vAlignTable['u135'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u24 = document.getElementById('u24');

x = 0;
y = 0;
InsertAfterBegin(u24ann, "<div id='u24Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u24', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u24').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u24based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u24base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u24based = document.getElementById('u24based');
            
InsertBeforeEnd(u24based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to FYP page<BR><BR></div>");

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="Forgot-your-password-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u24'] = 'top';
var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u223 = document.getElementById('u223');

x = 0;
y = 0;
InsertAfterBegin(u223ann, "<div id='u223Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u223', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u223').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u223based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u223base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u223based = document.getElementById('u223based');
            
InsertBeforeEnd(u223based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member redirected to the blog post page<BR><BR></div>");

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u216 = document.getElementById('u216');

var u258 = document.getElementById('u258');

x = 0;
y = 0;
InsertAfterBegin(u258ann, "<div id='u258Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u258', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u258').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u258based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u258base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u258based = document.getElementById('u258based');
            
InsertBeforeEnd(u258based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can save this particular blog post to his My web business. But he should be login to save this post, otherwise he is redirect to the login page.<BR><BR></div>");

u258.style.cursor = 'pointer';
if (bIE) u258.attachEvent("onclick", u258Click);
else u258.addEventListener("click", u258Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u258LinksClick'></DIV>")
var u258LinksClick = document.getElementById('u258LinksClick');
function u258Click(e) 
{

	ToggleLinks(e, 'u258LinksClick');
}

InsertBeforeEnd(u258LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u258Clicku37312fbc7ae940f3b1f00c7ba5c7d9fc(event)'>1) When member is already login</div>");
function u258Clicku37312fbc7ae940f3b1f00c7ba5c7d9fc(e)
{

	self.location.href="Reader-My-Saved-Blogposts.html" + GetQuerystring();

	ToggleLinks(e, 'u258LinksClick');
}

InsertBeforeEnd(u258LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u258Clickueaf99297b79148668e0336b5fc2541cd(event)'>2) If member is not login </div>");
function u258Clickueaf99297b79148668e0336b5fc2541cd(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u258LinksClick');
}
gv_vAlignTable['u258'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');

var u271 = document.getElementById('u271');

var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');

var u217 = document.getElementById('u217');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u225 = document.getElementById('u225');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');

var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');

x = 0;
y = 0;
InsertAfterBegin(u192ann, "<div id='u192Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u192', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u192').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u192based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u192base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u192based = document.getElementById('u192based');
            
InsertBeforeEnd(u192based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member redirected to the blog post page<BR><BR></div>");

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u175 = document.getElementById('u175');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');

x = 0;
y = 0;
InsertAfterBegin(u78ann, "<div id='u78Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u78', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u78').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u78based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u78base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u78based = document.getElementById('u78based');
            
InsertBeforeEnd(u78based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives About page to the member<BR><BR></div>");

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	self.location.href="About-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u78'] = 'top';
var u259 = document.getElementById('u259');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');

x = 0;
y = 0;
InsertAfterBegin(u162ann, "<div id='u162Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u162', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u162').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u162based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u162base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u162based = document.getElementById('u162based');
            
InsertBeforeEnd(u162based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> User redirected to the home page<BR><BR></div>");

u162.style.cursor = 'pointer';
if (bIE) u162.attachEvent("onclick", Clicku162);
else u162.addEventListener("click", Clicku162, true);
function Clicku162(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u162'] = 'top';
var u213 = document.getElementById('u213');

var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u229 = document.getElementById('u229');

x = 0;
y = 0;
InsertAfterBegin(u229ann, "<div id='u229Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u229', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u229').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u229based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u229base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u229based = document.getElementById('u229based');
            
InsertBeforeEnd(u229based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the post the member can read the content<BR><BR></div>");

u229.style.cursor = 'pointer';
if (bIE) u229.attachEvent("onclick", Clicku229);
else u229.addEventListener("click", Clicku229, true);
function Clicku229(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u229'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u244 = document.getElementById('u244');

x = 0;
y = 0;
InsertAfterBegin(u244ann, "<div id='u244Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u244', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u244').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u244based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u244base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u244based = document.getElementById('u244based');
            
InsertBeforeEnd(u244based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the post the member can read the content<BR><BR></div>");

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u244'] = 'top';
if (window.OnLoad) OnLoad();

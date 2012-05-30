
var PageName = 'Individual-blog-post-page';
var PageId = 'p494e48722f6f49ac8d90f4659ba90e3d'
var PageUrl = 'Individual-blog-post-page.html'
document.title = 'Individual-blog-post-page';

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
gv_vAlignTable['u62'] = 'top';
var u256 = document.getElementById('u256');

x = 0;
y = 0;
InsertAfterBegin(u256ann, "<div id='u256Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u256', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u256').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u256based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u256base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u256based = document.getElementById('u256based');
            
InsertBeforeEnd(u256based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the logo, it redirects the user to the Home page of the application<BR><BR></div>");

u256.style.cursor = 'pointer';
if (bIE) u256.attachEvent("onclick", Clicku256);
else u256.addEventListener("click", Clicku256, true);
function Clicku256(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u247 = document.getElementById('u247');

x = 0;
y = 0;
InsertAfterBegin(u247ann, "<div id='u247Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u247', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u247').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u247based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u247base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u247based = document.getElementById('u247based');
            
InsertBeforeEnd(u247based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirected to the blog page<BR><BR></div>");

u247.style.cursor = 'pointer';
if (bIE) u247.attachEvent("onclick", Clicku247);
else u247.addEventListener("click", Clicku247, true);
function Clicku247(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u180 = document.getElementById('u180');

x = 0;
y = 0;
InsertAfterBegin(u180ann, "<div id='u180Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u180', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u180').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u180based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u180base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u180based = document.getElementById('u180based');
            
InsertBeforeEnd(u180based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose if the user is already a member in WBA, then he click this link to login to the post his comment<BR><BR></div>");

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{

if (true) {

	self.location.href="Login-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u180'] = 'top';
var u251 = document.getElementById('u251');

x = 0;
y = 0;
InsertAfterBegin(u251ann, "<div id='u251Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u251', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u251').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u251based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u251base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u251based = document.getElementById('u251based');
            
InsertBeforeEnd(u251based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member<BR><BR></div>");

u251.style.cursor = 'pointer';
if (bIE) u251.attachEvent("onclick", Clicku251);
else u251.addEventListener("click", Clicku251, true);
function Clicku251(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}

var u190 = document.getElementById('u190');

var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u104 = document.getElementById('u104');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u12 = document.getElementById('u12');

var u277 = document.getElementById('u277');

x = 0;
y = 0;
InsertAfterBegin(u277ann, "<div id='u277Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u277', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u277').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u277based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u277base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u277based = document.getElementById('u277based');
            
InsertBeforeEnd(u277based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirect to the blog post page<BR><BR></div>");

u277.style.cursor = 'pointer';
if (bIE) u277.attachEvent("onclick", Clicku277);
else u277.addEventListener("click", Clicku277, true);
function Clicku277(e)
{

if (true) {

	self.location.href=PageUrl + GetQuerystring();
    window.location.reload();

}

}
gv_vAlignTable['u277'] = 'top';
var u73 = document.getElementById('u73');

x = 0;
y = 0;
InsertAfterBegin(u73ann, "<div id='u73Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u73', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u73').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u73based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u73base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u73based = document.getElementById('u73based');
            
InsertBeforeEnd(u73based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member wants to login to the application,<BR><BR></div>");

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", u73Click);
else u73.addEventListener("click", u73Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u73LinksClick'></DIV>")
var u73LinksClick = document.getElementById('u73LinksClick');
function u73Click(e) 
{

	ToggleLinks(e, 'u73LinksClick');
}

InsertBeforeEnd(u73LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u73Clicku01d31fb5df994f8a8596e0c2c2a55755(event)'>1) When user gives valid credentials  & Member</div>");
function u73Clicku01d31fb5df994f8a8596e0c2c2a55755(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u73LinksClick');
}

InsertBeforeEnd(u73LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u73Clicku4db4cb03247b431c9ddb9d6e51c40e69(event)'>2) When user gives valid credentials & Advertiser</div>");
function u73Clicku4db4cb03247b431c9ddb9d6e51c40e69(e)
{

	self.location.href="#" + GetQuerystring();

	ToggleLinks(e, 'u73LinksClick');
}

InsertBeforeEnd(u73LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u73Clicku489eeb3387cb4bd196116eeea16c66ba(event)'>3) When user gives invalid credentials</div>");
function u73Clicku489eeb3387cb4bd196116eeea16c66ba(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u73LinksClick');
}

var u112 = document.getElementById('u112');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u193 = document.getElementById('u193');

var u282 = document.getElementById('u282');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u262 = document.getElementById('u262');

x = 0;
y = 0;
InsertAfterBegin(u262ann, "<div id='u262Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u262', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u262').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u262based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u262base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u262based = document.getElementById('u262based');
            
InsertBeforeEnd(u262based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect to hisMyWBA page when the member is already login, otherwise redirect him/her to the Login page<BR><BR></div>");

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", u262Click);
else u262.addEventListener("click", u262Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u262LinksClick'></DIV>")
var u262LinksClick = document.getElementById('u262LinksClick');
function u262Click(e) 
{

	ToggleLinks(e, 'u262LinksClick');
}

InsertBeforeEnd(u262LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u262Clicku29230ea35fca455c9b17a68b38ba7a27(event)'>1) When member already login</div>");
function u262Clicku29230ea35fca455c9b17a68b38ba7a27(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u262LinksClick');
}

InsertBeforeEnd(u262LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u262Clicku1b443452f95c41a0913bfe5081634415(event)'>2) When member not login </div>");
function u262Clicku1b443452f95c41a0913bfe5081634415(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u262LinksClick');
}

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u90 = document.getElementById('u90');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u270 = document.getElementById('u270');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u268 = document.getElementById('u268');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u246 = document.getElementById('u246');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u88 = document.getElementById('u88');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u228 = document.getElementById('u228');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u100 = document.getElementById('u100');

x = 0;
y = 0;
InsertAfterBegin(u100ann, "<div id='u100Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u100', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u100').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u100based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u100base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u100based = document.getElementById('u100based');
            
InsertBeforeEnd(u100based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicked this link, the profile of ours in Linkedin is shown to the user.<BR><BR></div>");

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{

if (true) {

	self.location.href="Member-click-linked-in-button.html" + GetQuerystring();

}

}

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u21 = document.getElementById('u21');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');

var u264 = document.getElementById('u264');

var u185 = document.getElementById('u185');

var u197 = document.getElementById('u197');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');

var u182 = document.getElementById('u182');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u249 = document.getElementById('u249');

var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u7 = document.getElementById('u7');

var u13 = document.getElementById('u13');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u253 = document.getElementById('u253');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u181 = document.getElementById('u181');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u243 = document.getElementById('u243');

x = 0;
y = 0;
InsertAfterBegin(u243ann, "<div id='u243Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u243', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u243').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u243based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u243base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u243based = document.getElementById('u243based');
            
InsertBeforeEnd(u243based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Contact page to the member<BR><BR></div>");

u243.style.cursor = 'pointer';
if (bIE) u243.attachEvent("onclick", Clicku243);
else u243.addEventListener("click", Clicku243, true);
function Clicku243(e)
{

if (true) {

	self.location.href="Contact-us-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u243'] = 'top';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u255 = document.getElementById('u255');

x = 0;
y = 0;
InsertAfterBegin(u255ann, "<div id='u255Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u255', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u255').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u255based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u255base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u255based = document.getElementById('u255based');
            
InsertBeforeEnd(u255based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> User redirected to the home page<BR><BR></div>");

u255.style.cursor = 'pointer';
if (bIE) u255.attachEvent("onclick", Clicku255);
else u255.addEventListener("click", Clicku255, true);
function Clicku255(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u255'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u267 = document.getElementById('u267');

x = 0;
y = 0;
InsertAfterBegin(u267ann, "<div id='u267Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u267', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u267').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u267based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u267base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u267based = document.getElementById('u267based');
            
InsertBeforeEnd(u267based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> By clcking the tag, the memer<BR><BR></div>");

u267.style.cursor = 'pointer';
if (bIE) u267.attachEvent("onclick", Clicku267);
else u267.addEventListener("click", Clicku267, true);
function Clicku267(e)
{

if (true) {

	self.location.href="User-click-any-tag.html" + GetQuerystring();

}

}
gv_vAlignTable['u267'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');

var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u281 = document.getElementById('u281');

var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u184 = document.getElementById('u184');

var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u275 = document.getElementById('u275');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u121 = document.getElementById('u121');

var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');

x = 0;
y = 0;
InsertAfterBegin(u242ann, "<div id='u242Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u242', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u242').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u242based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u242base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u242based = document.getElementById('u242based');
            
InsertBeforeEnd(u242based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives About page to the member<BR><BR></div>");

u242.style.cursor = 'pointer';
if (bIE) u242.attachEvent("onclick", Clicku242);
else u242.addEventListener("click", Clicku242, true);
function Clicku242(e)
{

if (true) {

	self.location.href="About-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u242'] = 'top';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u203 = document.getElementById('u203');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u79 = document.getElementById('u79');

x = 0;
y = 0;
InsertAfterBegin(u79ann, "<div id='u79Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u79', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u79').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u79based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u79base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u79based = document.getElementById('u79based');
            
InsertBeforeEnd(u79based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to FYP page<BR><BR></div>");

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

	self.location.href="Forgot-your-password-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u79'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u32 = document.getElementById('u32');

var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');

var u51 = document.getElementById('u51');

var u239 = document.getElementById('u239');

x = 0;
y = 0;
InsertAfterBegin(u239ann, "<div id='u239Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u239', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u239').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u239based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u239base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u239based = document.getElementById('u239based');
            
InsertBeforeEnd(u239based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member wants to search the blogs on category based...<BR><BR></div>");

u239.style.cursor = 'pointer';
if (bIE) u239.attachEvent("onclick", Clicku239);
else u239.addEventListener("click", Clicku239, true);
function Clicku239(e)
{

if (true) {

	self.location.href="User-click-any-blog-category-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u239'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');

x = 0;
y = 0;
InsertAfterBegin(u101ann, "<div id='u101Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u101', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u101').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u101based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u101base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u101based = document.getElementById('u101based');
            
InsertBeforeEnd(u101based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the public profile page of WBA in twitter<BR><BR></div>");

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="Member-click-Twitter-button.html" + GetQuerystring();

}

}

var u204 = document.getElementById('u204');

var u276 = document.getElementById('u276');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u114 = document.getElementById('u114');

var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u219 = document.getElementById('u219');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u10 = document.getElementById('u10');

var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u189 = document.getElementById('u189');

x = 0;
y = 0;
InsertAfterBegin(u189ann, "<div id='u189Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u189', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u189').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u189based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u189base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u189based = document.getElementById('u189based');
            
InsertBeforeEnd(u189based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member gives all the required information, the user redirected to the Registration page<BR><BR></div>");

u189.style.cursor = 'pointer';
if (bIE) u189.attachEvent("onclick", Clicku189);
else u189.addEventListener("click", Clicku189, true);
function Clicku189(e)
{

if (true) {

	self.location.href="Registeration-page.html" + GetQuerystring();

}

}

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u278 = document.getElementById('u278');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u83 = document.getElementById('u83');

x = 0;
y = 0;
InsertAfterBegin(u83ann, "<div id='u83Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u83', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u83').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u83based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u83base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u83based = document.getElementById('u83based');
            
InsertBeforeEnd(u83based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to Registration page<BR><BR></div>");

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{

if (true) {

	self.location.href="Registeration-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u83'] = 'top';
var u110 = document.getElementById('u110');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u280 = document.getElementById('u280');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u258 = document.getElementById('u258');

x = 0;
y = 0;
InsertAfterBegin(u258ann, "<div id='u258Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u258', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u258').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u258based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u258base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u258based = document.getElementById('u258based');
            
InsertBeforeEnd(u258based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Advertise page to the member<BR><BR></div>");

u258.style.cursor = 'pointer';
if (bIE) u258.attachEvent("onclick", Clicku258);
else u258.addEventListener("click", Clicku258, true);
function Clicku258(e)
{

if (true) {

	self.location.href="Advertise-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u258'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u123 = document.getElementById('u123');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');

var u271 = document.getElementById('u271');

var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u157 = document.getElementById('u157');

var u266 = document.getElementById('u266');

x = 0;
y = 0;
InsertAfterBegin(u266ann, "<div id='u266Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u266', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u266').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u266based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u266base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u266based = document.getElementById('u266based');
            
InsertBeforeEnd(u266based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can enter any search terms and clic<BR><BR></div>");

u266.style.cursor = 'pointer';
if (bIE) u266.attachEvent("onclick", Clicku266);
else u266.addEventListener("click", Clicku266, true);
function Clicku266(e)
{

if (true) {

	self.location.href="Search-Results-page.html" + GetQuerystring();

}

}

var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u107 = document.getElementById('u107');

var u269 = document.getElementById('u269');

var u98 = document.getElementById('u98');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u16 = document.getElementById('u16');

var u119 = document.getElementById('u119');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u64 = document.getElementById('u64');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u116 = document.getElementById('u116');

var u205 = document.getElementById('u205');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u259 = document.getElementById('u259');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();

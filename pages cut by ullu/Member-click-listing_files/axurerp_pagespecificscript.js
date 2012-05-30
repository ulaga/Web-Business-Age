
var PageName = 'Member-click-listing';
var PageId = 'p0c3222c5c4dc41f6b2997b63d7e7eecc'
var PageUrl = 'Member-click-listing.html'
document.title = 'Member-click-listing';

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

eval(GetDynamicPanelScript('u114', 1));

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u256 = document.getElementById('u256');

var u247 = document.getElementById('u247');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');

x = 0;
y = 0;
InsertAfterBegin(u93ann, "<div id='u93Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u93', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u93').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u93based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u93base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u93based = document.getElementById('u93based');
            
InsertBeforeEnd(u93based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Advertise page to the member<BR><BR></div>");

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{

if (true) {

	self.location.href="Advertise-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u93'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u56 = document.getElementById('u56');

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
            
InsertBeforeEnd(u91based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the logo, it redirects the user to the Home page of the application<BR><BR></div>");

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u90 = document.getElementById('u90');

x = 0;
y = 0;
InsertAfterBegin(u90ann, "<div id='u90Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u90', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u90').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u90based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u90base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u90based = document.getElementById('u90based');
            
InsertBeforeEnd(u90based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> User redirected to the home page<BR><BR></div>");

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u90'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u23 = document.getElementById('u23');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u257 = document.getElementById('u257');

var u88 = document.getElementById('u88');

var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u197 = document.getElementById('u197');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

x = 0;
y = 0;
InsertAfterBegin(u97ann, "<div id='u97Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u97', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u97').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u97based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u97base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u97based = document.getElementById('u97based');
            
InsertBeforeEnd(u97based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect to hisMyWBA page when the member is already login, otherwise redirect him/her to the Login page<BR><BR></div>");

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", u97Click);
else u97.addEventListener("click", u97Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u97LinksClick'></DIV>")
var u97LinksClick = document.getElementById('u97LinksClick');
function u97Click(e) 
{

	ToggleLinks(e, 'u97LinksClick');
}

InsertBeforeEnd(u97LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u97Clickud27483c76a6d4071bfb6538a1855a451(event)'>1) When member already login</div>");
function u97Clickud27483c76a6d4071bfb6538a1855a451(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u97LinksClick');
}

InsertBeforeEnd(u97LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u97Clickuc9fd9d6f8d824e7ba3864ee13fe0dfcb(event)'>2) When member not login </div>");
function u97Clickuc9fd9d6f8d824e7ba3864ee13fe0dfcb(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u97LinksClick');
}

var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u198 = document.getElementById('u198');

var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u249 = document.getElementById('u249');

var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');

x = 0;
y = 0;
InsertAfterBegin(u30ann, "<div id='u30Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u30', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u30').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u30based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u30base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u30based = document.getElementById('u30based');
            
InsertBeforeEnd(u30based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to Registration page<BR><BR></div>");

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	self.location.href="Registeration-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u30'] = 'top';
var u77 = document.getElementById('u77');

x = 0;
y = 0;
InsertAfterBegin(u77ann, "<div id='u77Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u77', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u77').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u77based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u77base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u77based = document.getElementById('u77based');
            
InsertBeforeEnd(u77based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives About page to the member<BR><BR></div>");

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if (true) {

	self.location.href="About-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u77'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');

var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u13 = document.getElementById('u13');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');

var u243 = document.getElementById('u243');

var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u199 = document.getElementById('u199');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');

x = 0;
y = 0;
InsertAfterBegin(u196ann, "<div id='u196Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u196', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u196').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u196based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u196base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u196based = document.getElementById('u196based');
            
InsertBeforeEnd(u196based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose if the user is already a member in WBA, then he click this link to login to the post his comment<BR><BR></div>");

u196.style.cursor = 'pointer';
if (bIE) u196.attachEvent("onclick", Clicku196);
else u196.addEventListener("click", Clicku196, true);
function Clicku196(e)
{

if (true) {

	self.location.href="Login-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u20 = document.getElementById('u20');

x = 0;
y = 0;
InsertAfterBegin(u20ann, "<div id='u20Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u20', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u20').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u20based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u20base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u20based = document.getElementById('u20based');
            
InsertBeforeEnd(u20based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member wants to login to the application,<BR><BR></div>");

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", u20Click);
else u20.addEventListener("click", u20Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u20LinksClick'></DIV>")
var u20LinksClick = document.getElementById('u20LinksClick');
function u20Click(e) 
{

	ToggleLinks(e, 'u20LinksClick');
}

InsertBeforeEnd(u20LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u20Clicku01d31fb5df994f8a8596e0c2c2a55755(event)'>1) When user gives valid credentials  & Member</div>");
function u20Clicku01d31fb5df994f8a8596e0c2c2a55755(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u20LinksClick');
}

InsertBeforeEnd(u20LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u20Clicku4db4cb03247b431c9ddb9d6e51c40e69(event)'>2) When user gives valid credentials & Advertiser</div>");
function u20Clicku4db4cb03247b431c9ddb9d6e51c40e69(e)
{

	self.location.href="#" + GetQuerystring();

	ToggleLinks(e, 'u20LinksClick');
}

InsertBeforeEnd(u20LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u20Clicku489eeb3387cb4bd196116eeea16c66ba(event)'>3) When user gives invalid credentials</div>");
function u20Clicku489eeb3387cb4bd196116eeea16c66ba(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u20LinksClick');
}

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');

var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u235 = document.getElementById('u235');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');

var u236 = document.getElementById('u236');

var u99 = document.getElementById('u99');

var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u48 = document.getElementById('u48');

x = 0;
y = 0;
InsertAfterBegin(u48ann, "<div id='u48Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u48', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u48').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u48based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u48base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u48based = document.getElementById('u48based');
            
InsertBeforeEnd(u48based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the public profile page of WBA in twitter<BR><BR></div>");

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{

if (true) {

	self.location.href="Member-click-Twitter-button.html" + GetQuerystring();

}

}

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u245 = document.getElementById('u245');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u32 = document.getElementById('u32');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');

var u101 = document.getElementById('u101');

x = 0;
y = 0;
InsertAfterBegin(u101ann, "<div id='u101Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u101', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u101').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u101based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u101base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u101based = document.getElementById('u101based');
            
InsertBeforeEnd(u101based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can enter any search terms and clic<BR><BR></div>");

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="Search-Results-page.html" + GetQuerystring();

}

}

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u114 = document.getElementById('u114');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');

x = 0;
y = 0;
InsertAfterBegin(u26ann, "<div id='u26Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u26', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u26').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u26based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u26base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u26based = document.getElementById('u26based');
            
InsertBeforeEnd(u26based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to FYP page<BR><BR></div>");

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	self.location.href="Forgot-your-password-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u26'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');

var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u189 = document.getElementById('u189');

var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u110 = document.getElementById('u110');

var u273 = document.getElementById('u273');

var u86 = document.getElementById('u86');

x = 0;
y = 0;
InsertAfterBegin(u86ann, "<div id='u86Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u86', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u86').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u86based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u86base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u86based = document.getElementById('u86based');
            
InsertBeforeEnd(u86based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirected to the directory page<BR><BR></div>");

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u258 = document.getElementById('u258');

var u22 = document.getElementById('u22');

var u123 = document.getElementById('u123');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u271 = document.getElementById('u271');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u66 = document.getElementById('u66');

var u217 = document.getElementById('u217');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u266 = document.getElementById('u266');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');

x = 0;
y = 0;
InsertAfterBegin(u47ann, "<div id='u47Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u47', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u47').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u47based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u47base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u47based = document.getElementById('u47based');
            
InsertBeforeEnd(u47based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicked this link, the profile of ours in Linkedin is shown to the user.<BR><BR></div>");

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	self.location.href="Member-click-linked-in-button.html" + GetQuerystring();

}

}

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u82 = document.getElementById('u82');

x = 0;
y = 0;
InsertAfterBegin(u82ann, "<div id='u82Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u82', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u82').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u82based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u82base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u82based = document.getElementById('u82based');
            
InsertBeforeEnd(u82based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirected to the Blog page<BR><BR></div>");

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u205 = document.getElementById('u205');

x = 0;
y = 0;
InsertAfterBegin(u205ann, "<div id='u205Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u205', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u205').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u205based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u205base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u205based = document.getElementById('u205based');
            
InsertBeforeEnd(u205based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member gives all the required information, the user redirected to the Registration page<BR><BR></div>");

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{

if (true) {

	self.location.href="Registeration-page.html" + GetQuerystring();

}

}

var u78 = document.getElementById('u78');

x = 0;
y = 0;
InsertAfterBegin(u78ann, "<div id='u78Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u78', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u78').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u78based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u78base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u78based = document.getElementById('u78based');
            
InsertBeforeEnd(u78based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Contact page to the member<BR><BR></div>");

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	self.location.href="Contact-us-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u78'] = 'top';
var u259 = document.getElementById('u259');

var u272 = document.getElementById('u272');

var u31 = document.getElementById('u31');

var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u178 = document.getElementById('u178');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
if (window.OnLoad) OnLoad();
